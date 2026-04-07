// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as MessagesAPI from './messages';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * 向指定会话发送消息
   *
   * @example
   * ```ts
   * const resultMessage =
   *   await client.v1.seeker.message.conversations.messages.create(
   *     0,
   *     { content: '您好，我们安排了面试', conversationId: 1 },
   *   );
   * ```
   */
  create(
    conversationID: number,
    body: MessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<ResultMessage> {
    return this._client.post(path`/api/v1/seeker/message/conversations/${conversationID}/messages`, {
      body,
      ...options,
    });
  }

  /**
   * 分页获取指定会话的消息列表
   *
   * @example
   * ```ts
   * const resultPageResultMessage =
   *   await client.v1.seeker.message.conversations.messages.list(
   *     0,
   *   );
   * ```
   */
  list(
    conversationID: number,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResultPageResultMessage> {
    return this._client.get(path`/api/v1/seeker/message/conversations/${conversationID}/messages`, {
      query,
      ...options,
    });
  }
}

/**
 * 消息响应
 */
export interface MessageResponse {
  /**
   * 消息 ID
   */
  id?: string;

  /**
   * 客户端消息 ID
   */
  clientMsgId?: string;

  /**
   * 消息内容
   */
  content?: string;

  /**
   * 会话 ID
   */
  conversationId?: string;

  /**
   * 创建时间
   */
  createdAt?: string;

  /**
   * 扩展数据(JSON 格式)
   */
  extraData?: string;

  /**
   * 是否已读: 0 未读 1 已读
   */
  isRead?: number;

  /**
   * 是否已撤回: 0 否 1 是
   */
  isRecalled?: number;

  /**
   * 消息类型: text 文本/image 图片/file 文件
   */
  msgType?: string;

  /**
   * 阅读时间
   */
  readAt?: string;

  /**
   * 撤回时间
   */
  recalledAt?: string;

  /**
   * 回复的消息 ID
   */
  replyToId?: string;

  /**
   * 发送者信息
   */
  sender?: MessageResponse.Sender;

  /**
   * 发送者 ID
   */
  senderId?: string;

  /**
   * 发送者类型: recruiter/talent/system/ai
   */
  senderType?: string;

  /**
   * 状态: sent 发送成功/failed 发送失败
   */
  status?: string;
}

export namespace MessageResponse {
  /**
   * 发送者信息
   */
  export interface Sender {
    /**
     * 发送者 ID
     */
    id?: string;

    /**
     * 发送者头像
     */
    avatar?: string;

    /**
     * 发送者名称
     */
    name?: string;

    /**
     * 发送者类型
     */
    type?: string;
  }
}

/**
 * 发送消息请求
 */
export interface MessageSendRequest {
  /**
   * 消息内容
   */
  content: string;

  /**
   * 会话 ID
   */
  conversationId: number;

  /**
   * 客户端消息 ID(用于去重)
   */
  clientMsgId?: string;

  /**
   * 扩展数据(JSON 格式)
   */
  extraData?: string;

  /**
   * 消息类型: text 文本/image 图片/file 文件
   */
  msgType?: string;

  /**
   * 回复的消息 ID
   */
  replyToId?: number;
}

/**
 * 分页信息
 */
export interface Pagination {
  /**
   * 当前页码
   */
  page?: number;

  /**
   * 每页数量
   */
  pageSize?: number;

  /**
   * 总记录数
   */
  total?: number;

  /**
   * 总页数
   */
  totalPages?: number;
}

/**
 * 统一响应包装类
 */
export interface ResultMessage {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 消息响应
   */
  data?: MessageResponse;

  /**
   * 响应消息
   */
  message?: string;
}

/**
 * 统一响应包装类
 */
export interface ResultPageResultMessage {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 分页响应包装类
   */
  data?: ResultPageResultMessage.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace ResultPageResultMessage {
  /**
   * 分页响应包装类
   */
  export interface Data {
    /**
     * 数据列表
     */
    list?: Array<MessagesAPI.MessageResponse>;

    /**
     * 分页信息
     */
    pagination?: MessagesAPI.Pagination;
  }
}

export interface MessageCreateParams {
  /**
   * 消息内容
   */
  content: string;

  /**
   * 会话 ID
   */
  conversationId: number;

  /**
   * 客户端消息 ID(用于去重)
   */
  clientMsgId?: string;

  /**
   * 扩展数据(JSON 格式)
   */
  extraData?: string;

  /**
   * 消息类型: text 文本/image 图片/file 文件
   */
  msgType?: string;

  /**
   * 回复的消息 ID
   */
  replyToId?: number;
}

export interface MessageListParams {
  /**
   * 获取此时间之前的消息
   */
  before?: string;

  /**
   * 页码
   */
  page?: number;

  /**
   * 每页数量
   */
  pageSize?: number;
}

export declare namespace Messages {
  export {
    type MessageResponse as MessageResponse,
    type MessageSendRequest as MessageSendRequest,
    type Pagination as Pagination,
    type ResultMessage as ResultMessage,
    type ResultPageResultMessage as ResultPageResultMessage,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };
}
