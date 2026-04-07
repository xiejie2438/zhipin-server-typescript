// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as WorkExperienceAPI from '../../../seeker/profile/work-experience';
import * as MessagesAPI from './messages';
import { MessageListParams, MessageSendParams, Messages } from './messages';
import * as MessageConversationsAPI from '../../../seeker/message/conversations/conversations';
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
   *   await client.v1.enterprise.message.conversations.create({
   *     talentId: 1,
   *   });
   * ```
   */
  create(
    body: ConversationCreateParams,
    options?: RequestOptions,
  ): APIPromise<MessageConversationsAPI.ResultConversation> {
    return this._client.post('/api/v1/enterprise/message/conversations', { body, ...options });
  }

  /**
   * 获取会话详情
   *
   * @example
   * ```ts
   * const resultConversation =
   *   await client.v1.enterprise.message.conversations.retrieve(
   *     0,
   *   );
   * ```
   */
  retrieve(
    conversationID: number,
    options?: RequestOptions,
  ): APIPromise<MessageConversationsAPI.ResultConversation> {
    return this._client.get(path`/api/v1/enterprise/message/conversations/${conversationID}`, options);
  }

  /**
   * 获取当前用户的所有会话列表
   *
   * @example
   * ```ts
   * const resultListConversation =
   *   await client.v1.enterprise.message.conversations.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<MessageConversationsAPI.ResultListConversation> {
    return this._client.get('/api/v1/enterprise/message/conversations', options);
  }

  /**
   * 删除会话
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.message.conversations.delete(
   *     0,
   *   );
   * ```
   */
  delete(conversationID: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/enterprise/message/conversations/${conversationID}`, options);
  }

  /**
   * 标记消息已读
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.message.conversations.markRead(
   *     0,
   *   );
   * ```
   */
  markRead(conversationID: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/v1/enterprise/message/conversations/${conversationID}/read`, options);
  }

  /**
   * 免打扰/取消免打扰
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.message.conversations.mute(0, {
   *     isMuted: true,
   *   });
   * ```
   */
  mute(
    conversationID: number,
    params: ConversationMuteParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    const { isMuted } = params;
    return this._client.put(path`/api/v1/enterprise/message/conversations/${conversationID}/mute`, {
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
   *   await client.v1.enterprise.message.conversations.pin(0, {
   *     isPinned: true,
   *   });
   * ```
   */
  pin(
    conversationID: number,
    params: ConversationPinParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    const { isPinned } = params;
    return this._client.put(path`/api/v1/enterprise/message/conversations/${conversationID}/pin`, {
      query: { isPinned },
      ...options,
    });
  }
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

export interface ConversationMuteParams {
  /**
   * 是否免打扰
   */
  isMuted: boolean;
}

export interface ConversationPinParams {
  /**
   * 是否置顶
   */
  isPinned: boolean;
}

Conversations.Messages = Messages;

export declare namespace Conversations {
  export {
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationMuteParams as ConversationMuteParams,
    type ConversationPinParams as ConversationPinParams,
  };

  export {
    Messages as Messages,
    type MessageListParams as MessageListParams,
    type MessageSendParams as MessageSendParams,
  };
}
