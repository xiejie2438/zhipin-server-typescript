// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 系统配置、数据字典、公告等接口
 */
export class Notice extends APIResource {
  /**
   * 根据公告 ID 获取详情，同时增加浏览次数
   */
  retrieve(noticeID: number, options?: RequestOptions): APIPromise<NoticeRetrieveResponse> {
    return this._client.get(path`/api/admin/system/notice/${noticeID}`, options);
  }

  /**
   * 获取已发布的公告列表，支持按类型筛选
   */
  list(
    query: NoticeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResultListSystemNotices> {
    return this._client.get('/api/admin/system/notice/list', { query, ...options });
  }

  /**
   * 获取置顶的公告列表，最多 5 条
   */
  listTop(options?: RequestOptions): APIPromise<ResultListSystemNotices> {
    return this._client.get('/api/admin/system/notice/top', options);
  }
}

/**
 * 统一响应包装类
 */
export interface ResultListSystemNotices {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: Array<SystemNotice>;

  /**
   * 响应消息
   */
  message?: string;
}

/**
 * 系统公告响应
 */
export interface SystemNotice {
  /**
   * 公告 ID
   */
  id?: number;

  /**
   * 公告内容
   */
  content?: string;

  /**
   * 创建时间
   */
  createTime?: string;

  /**
   * 是否置顶:0 否 1 是
   */
  isTop?: number;

  /**
   * 公告类型:1 系统公告 2 活动公告 3 更新公告
   */
  noticeType?: number;

  /**
   * 公告类型名称
   */
  noticeTypeName?: string;

  /**
   * 发布时间
   */
  publishTime?: string;

  /**
   * 公告标题
   */
  title?: string;

  /**
   * 浏览次数
   */
  viewCount?: number;
}

/**
 * 统一响应包装类
 */
export interface NoticeRetrieveResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 系统公告响应
   */
  data?: SystemNotice;

  /**
   * 响应消息
   */
  message?: string;
}

export interface NoticeListParams {
  /**
   * 数量限制
   */
  limit?: number;

  /**
   * 公告类型:1 系统公告 2 活动公告 3 更新公告
   */
  type?: number;
}

export declare namespace Notice {
  export {
    type ResultListSystemNotices as ResultListSystemNotices,
    type SystemNotice as SystemNotice,
    type NoticeRetrieveResponse as NoticeRetrieveResponse,
    type NoticeListParams as NoticeListParams,
  };
}
