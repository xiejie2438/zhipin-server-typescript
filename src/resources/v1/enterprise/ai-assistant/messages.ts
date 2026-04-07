// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MessagesAPI from './messages';
import * as AIAssistantMessagesAPI from '../../seeker/ai-assistant/messages';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * AI助理对话、数据分析、设置等相关接口
 */
export class Messages extends APIResource {
  /**
   * 获取与 AI 助理的对话历史记录
   *
   * @example
   * ```ts
   * const resultPageResultMapStringObject =
   *   await client.v1.enterprise.aiAssistant.messages.list();
   * ```
   */
  list(
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AIAssistantMessagesAPI.ResultPageResultMapStringObject> {
    return this._client.get('/api/v1/enterprise/ai-assistant/messages', { query, ...options });
  }

  /**
   * 向 AI 助理发送消息并获取回复
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.enterprise.aiAssistant.messages.send({
   *     content: '帮我分析一下本周的招聘数据',
   *   });
   * ```
   */
  send(body: MessageSendParams, options?: RequestOptions): APIPromise<MessageSendResponse> {
    return this._client.post('/api/v1/enterprise/ai-assistant/messages', { body, ...options });
  }
}

/**
 * AI 消息
 */
export interface Message {
  /**
   * 消息 ID
   */
  id?: string;

  /**
   * 内容
   */
  content?: string;

  /**
   * 时间戳
   */
  timestamp?: string;

  /**
   * 类型: user/assistant/system
   */
  type?: string;
}

/**
 * 统一响应包装类
 */
export interface MessageSendResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * AI 对话响应
   */
  data?: MessageSendResponse.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace MessageSendResponse {
  /**
   * AI 对话响应
   */
  export interface Data {
    /**
     * AI 消息
     */
    aiResponse?: MessagesAPI.Message;

    /**
     * AI 消息
     */
    userMessage?: MessagesAPI.Message;
  }
}

export interface MessageListParams {
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
   * 会话 ID，为空则创建新会话
   */
  sessionId?: string;
}

export declare namespace Messages {
  export {
    type Message as Message,
    type MessageSendResponse as MessageSendResponse,
    type MessageListParams as MessageListParams,
    type MessageSendParams as MessageSendParams,
  };
}
