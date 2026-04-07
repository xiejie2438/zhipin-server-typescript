// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WorkExperienceAPI from '../seeker/profile/work-experience';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 快捷回复常用语管理
 */
export class QuickReplies extends APIResource {
  /**
   * 添加新的常用语
   *
   * @example
   * ```ts
   * const resultQuickReplyList =
   *   await client.v1.enterprise.quickReplies.create({
   *     content: '您好，感谢您对我们公司的关注',
   *   });
   * ```
   */
  create(body: QuickReplyCreateParams, options?: RequestOptions): APIPromise<ResultQuickReplyList> {
    return this._client.post('/api/v1/enterprise/quick-replies', { body, ...options });
  }

  /**
   * 更新指定常用语
   *
   * @example
   * ```ts
   * const resultQuickReplyList =
   *   await client.v1.enterprise.quickReplies.update(0);
   * ```
   */
  update(
    id: number,
    body: QuickReplyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResultQuickReplyList> {
    return this._client.put(path`/api/v1/enterprise/quick-replies/${id}`, { body, ...options });
  }

  /**
   * 获取当前用户的常用语列表
   *
   * @example
   * ```ts
   * const quickReplies =
   *   await client.v1.enterprise.quickReplies.list();
   * ```
   */
  list(
    query: QuickReplyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QuickReplyListResponse> {
    return this._client.get('/api/v1/enterprise/quick-replies', { query, ...options });
  }

  /**
   * 删除指定常用语
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.quickReplies.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/enterprise/quick-replies/${id}`, options);
  }
}

/**
 * 常用语列表项响应
 */
export interface QuickReplyList {
  /**
   * 常用语 ID
   */
  id?: string;

  /**
   * 分类
   */
  category?: string;

  /**
   * 内容
   */
  content?: string;

  /**
   * 创建时间
   */
  createdAt?: string;

  /**
   * 快捷键/关键词
   */
  shortcut?: string;

  /**
   * 排序
   */
  sortOrder?: number;

  /**
   * 使用次数
   */
  useCount?: number;
}

/**
 * 统一响应包装类
 */
export interface ResultQuickReplyList {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 常用语列表项响应
   */
  data?: QuickReplyList;

  /**
   * 响应消息
   */
  message?: string;
}

/**
 * 统一响应包装类
 */
export interface QuickReplyListResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: Array<QuickReplyList>;

  /**
   * 响应消息
   */
  message?: string;
}

export interface QuickReplyCreateParams {
  /**
   * 常用语内容
   */
  content: string;

  /**
   * 分类: 问候/邀约/回复/结束语
   */
  category?: string;

  /**
   * 快捷键/关键词
   */
  shortcut?: string;

  /**
   * 排序
   */
  sortOrder?: number;
}

export interface QuickReplyUpdateParams {
  /**
   * 分类
   */
  category?: string;

  /**
   * 常用语内容
   */
  content?: string;

  /**
   * 快捷键/关键词
   */
  shortcut?: string;

  /**
   * 排序
   */
  sortOrder?: number;
}

export interface QuickReplyListParams {
  /**
   * 分类筛选
   */
  category?: string;
}

export declare namespace QuickReplies {
  export {
    type QuickReplyList as QuickReplyList,
    type ResultQuickReplyList as ResultQuickReplyList,
    type QuickReplyListResponse as QuickReplyListResponse,
    type QuickReplyCreateParams as QuickReplyCreateParams,
    type QuickReplyUpdateParams as QuickReplyUpdateParams,
    type QuickReplyListParams as QuickReplyListParams,
  };
}
