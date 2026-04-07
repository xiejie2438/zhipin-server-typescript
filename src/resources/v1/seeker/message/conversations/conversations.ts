// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as SchedulesAPI from '../../../enterprise/schedules';
import * as WorkExperienceAPI from '../../profile/work-experience';
import * as MessagesAPI from './messages';
import {
  MessageCreateParams,
  MessageListParams,
  MessageResponse,
  MessageSendRequest,
  Messages,
  Pagination,
  ResultMessage,
  ResultPageResultMessage,
} from './messages';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Conversations extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * 创建新的聊天会话
   *
   * @example
   * ```ts
   * const resultConversation =
   *   await client.v1.seeker.message.conversations.create({
   *     talentId: 1,
   *   });
   * ```
   */
  create(body: ConversationCreateParams, options?: RequestOptions): APIPromise<ResultConversation> {
    return this._client.post('/api/v1/seeker/message/conversations', { body, ...options });
  }

  /**
   * 获取会话详情
   *
   * @example
   * ```ts
   * const resultConversation =
   *   await client.v1.seeker.message.conversations.retrieve(0);
   * ```
   */
  retrieve(conversationID: number, options?: RequestOptions): APIPromise<ResultConversation> {
    return this._client.get(path`/api/v1/seeker/message/conversations/${conversationID}`, options);
  }

  /**
   * 获取当前用户的所有会话列表
   *
   * @example
   * ```ts
   * const resultListConversation =
   *   await client.v1.seeker.message.conversations.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ResultListConversation> {
    return this._client.get('/api/v1/seeker/message/conversations', options);
  }

  /**
   * 删除会话
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.message.conversations.delete(0);
   * ```
   */
  delete(conversationID: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/seeker/message/conversations/${conversationID}`, options);
  }

  /**
   * 标记消息已读
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.message.conversations.read(0);
   * ```
   */
  read(conversationID: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/v1/seeker/message/conversations/${conversationID}/read`, options);
  }

  /**
   * 免打扰/取消免打扰
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.message.conversations.updateMute(
   *     0,
   *     { isMuted: true },
   *   );
   * ```
   */
  updateMute(
    conversationID: number,
    params: ConversationUpdateMuteParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    const { isMuted } = params;
    return this._client.put(path`/api/v1/seeker/message/conversations/${conversationID}/mute`, {
      query: { isMuted },
      ...options,
    });
  }

  /**
   * 置顶/取消置顶会话
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.message.conversations.updatePin(
   *     0,
   *     { isPinned: true },
   *   );
   * ```
   */
  updatePin(
    conversationID: number,
    params: ConversationUpdatePinParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    const { isPinned } = params;
    return this._client.put(path`/api/v1/seeker/message/conversations/${conversationID}/pin`, {
      query: { isPinned },
      ...options,
    });
  }
}

/**
 * 创建会话请求
 */
export interface ConversationCreateRequest {
  /**
   * 人才 ID
   */
  talentId: number;

  /**
   * 职位 ID
   */
  positionId?: number;

  /**
   * 简历 ID
   */
  resumeId?: number;

  /**
   * 会话标题
   */
  title?: string;

  /**
   * 会话类型: candidate 候选人/ai_assistant AI 助理
   */
  type?: string;
}

/**
 * 会话响应
 */
export interface ConversationResponse {
  /**
   * 会话 ID
   */
  id?: string;

  /**
   * 创建时间
   */
  createdAt?: string;

  /**
   * 是否免打扰: 0 否 1 是
   */
  isMuted?: number;

  /**
   * 是否置顶: 0 否 1 是
   */
  isPinned?: number;

  /**
   * 最后消息时间
   */
  lastMessageAt?: string;

  /**
   * 最后一条消息内容
   */
  lastMessageContent?: string;

  /**
   * 最后发送者类型: recruiter/talent/system/ai
   */
  lastSenderType?: string;

  /**
   * 职位信息
   */
  position?: SchedulesAPI.PositionInfo;

  /**
   * 职位 ID
   */
  positionId?: string;

  /**
   * 最近消息列表
   */
  recentMessages?: Array<MessagesAPI.MessageResponse>;

  /**
   * 简历 ID
   */
  resumeId?: string;

  /**
   * 投递状态
   */
  status?: string;

  /**
   * 人才信息
   */
  talent?: SchedulesAPI.TalentInfo;

  /**
   * 人才 ID
   */
  talentId?: string;

  /**
   * 会话标题
   */
  title?: string;

  /**
   * 会话类型: candidate 候选人/ai_assistant AI 助理/system 系统
   */
  type?: string;

  /**
   * 未读消息数
   */
  unreadCount?: number;
}

/**
 * 统一响应包装类
 */
export interface ResultConversation {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 会话响应
   */
  data?: ConversationResponse;

  /**
   * 响应消息
   */
  message?: string;
}

/**
 * 统一响应包装类
 */
export interface ResultListConversation {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: Array<ConversationResponse>;

  /**
   * 响应消息
   */
  message?: string;
}

export interface ConversationCreateParams {
  /**
   * 人才 ID
   */
  talentId: number;

  /**
   * 职位 ID
   */
  positionId?: number;

  /**
   * 简历 ID
   */
  resumeId?: number;

  /**
   * 会话标题
   */
  title?: string;

  /**
   * 会话类型: candidate 候选人/ai_assistant AI 助理
   */
  type?: string;
}

export interface ConversationUpdateMuteParams {
  /**
   * 是否免打扰
   */
  isMuted: boolean;
}

export interface ConversationUpdatePinParams {
  /**
   * 是否置顶
   */
  isPinned: boolean;
}

Conversations.Messages = Messages;

export declare namespace Conversations {
  export {
    type ConversationCreateRequest as ConversationCreateRequest,
    type ConversationResponse as ConversationResponse,
    type ResultConversation as ResultConversation,
    type ResultListConversation as ResultListConversation,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationUpdateMuteParams as ConversationUpdateMuteParams,
    type ConversationUpdatePinParams as ConversationUpdatePinParams,
  };

  export {
    Messages as Messages,
    type MessageResponse as MessageResponse,
    type MessageSendRequest as MessageSendRequest,
    type Pagination as Pagination,
    type ResultMessage as ResultMessage,
    type ResultPageResultMessage as ResultPageResultMessage,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };
}
