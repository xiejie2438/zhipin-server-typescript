// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ConversationsMessagesAPI from '../../../seeker/message/conversations/messages';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * 分页获取指定会话的消息列表
   *
   * @example
   * ```ts
   * const resultPageResultMessage =
   *   await client.v1.enterprise.message.conversations.messages.list(
   *     0,
   *   );
   * ```
   */
  list(
    conversationID: number,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationsMessagesAPI.ResultPageResultMessage> {
    return this._client.get(path`/api/v1/enterprise/message/conversations/${conversationID}/messages`, {
      query,
      ...options,
    });
  }

  /**
   * 向指定会话发送消息
   *
   * @example
   * ```ts
   * const resultMessage =
   *   await client.v1.enterprise.message.conversations.messages.send(
   *     0,
   *     { content: '您好，我们安排了面试', conversationId: 1 },
   *   );
   * ```
   */
  send(
    conversationID: number,
    body: MessageSendParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsMessagesAPI.ResultMessage> {
    return this._client.post(path`/api/v1/enterprise/message/conversations/${conversationID}/messages`, {
      body,
      ...options,
    });
  }
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

export interface MessageSendParams {
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

export declare namespace Messages {
  export { type MessageListParams as MessageListParams, type MessageSendParams as MessageSendParams };
}
