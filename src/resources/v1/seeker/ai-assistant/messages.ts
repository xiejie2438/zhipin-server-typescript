// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssistantSettingsAPI from '../preferences/assistant-settings';
import * as ConversationsMessagesAPI from '../message/conversations/messages';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * 求职者AI助理相关接口
 */
export class Messages extends APIResource {
  /**
   * 向 AI 助理发送消息并获取回复
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.seeker.aiAssistant.messages.create({
   *     content: 'content',
   *   });
   * ```
   */
  create(
    body: MessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/v1/seeker/ai-assistant/messages', { body, ...options });
  }

  /**
   * 获取与 AI 助理的对话历史
   *
   * @example
   * ```ts
   * const resultPageResultMapStringObject =
   *   await client.v1.seeker.aiAssistant.messages.list();
   * ```
   */
  list(
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResultPageResultMapStringObject> {
    return this._client.get('/api/v1/seeker/ai-assistant/messages', { query, ...options });
  }
}

/**
 * 分页响应包装类
 */
export interface PageResultMapStringObject {
  /**
   * 数据列表
   */
  list?: Array<{ [key: string]: unknown }>;

  /**
   * 分页信息
   */
  pagination?: ConversationsMessagesAPI.Pagination;
}

/**
 * 统一响应包装类
 */
export interface ResultPageResultMapStringObject {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 分页响应包装类
   */
  data?: PageResultMapStringObject;

  /**
   * 响应消息
   */
  message?: string;
}

export interface MessageCreateParams {
  /**
   * 消息内容
   */
  content: string;
}

export interface MessageListParams {
  /**
   * 页码，默认 1
   */
  page?: number;

  /**
   * 每页数量，默认 50
   */
  pageSize?: number;
}

export declare namespace Messages {
  export {
    type PageResultMapStringObject as PageResultMapStringObject,
    type ResultPageResultMapStringObject as ResultPageResultMapStringObject,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };
}
