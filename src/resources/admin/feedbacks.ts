// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from '../v1/seeker/ai-assistant/messages';
import * as AssistantSettingsAPI from '../v1/seeker/preferences/assistant-settings';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 用户反馈处理、反馈统计等接口
 */
export class Feedbacks extends APIResource {
  /**
   * 获取指定反馈的详细信息
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get(path`/api/admin/feedbacks/${id}`, options);
  }

  /**
   * 分页获取用户反馈列表
   */
  list(
    query: FeedbackListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.ResultPageResultMapStringObject> {
    return this._client.get('/api/admin/feedbacks', { query, ...options });
  }

  /**
   * 获取反馈统计数据
   */
  getStatistics(
    query: FeedbackGetStatisticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get('/api/admin/feedbacks/statistics', { query, ...options });
  }

  /**
   * 回复用户反馈
   */
  reply(
    id: number,
    body: FeedbackReplyParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post(path`/api/admin/feedbacks/${id}/reply`, { body, ...options });
  }

  /**
   * 上传反馈回复的附件
   */
  uploadAttachment(
    body: FeedbackUploadAttachmentParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/admin/feedbacks/attachments', { body, ...options });
  }
}

export interface FeedbackListParams {
  /**
   * 日期范围: week/all
   */
  dateRange?: string;

  /**
   * 搜索关键词
   */
  keyword?: string;

  /**
   * 页码，默认 1
   */
  page?: number;

  /**
   * 每页条数，默认 10
   */
  pageSize?: number;

  /**
   * 处理状态: pending/processing/resolved
   */
  status?: string;

  /**
   * 反馈类型: suggestion/complaint/consult/report/bug
   */
  type?: string;
}

export interface FeedbackGetStatisticsParams {
  /**
   * 时间范围: week/month/quarter/year
   */
  range?: string;
}

export interface FeedbackReplyParams {
  /**
   * 回复内容
   */
  content: string;

  /**
   * 附件 URL 列表
   */
  attachments?: Array<string>;
}

export interface FeedbackUploadAttachmentParams {
  /**
   * 附件文件
   */
  file: Uploadable;
}

export declare namespace Feedbacks {
  export {
    type FeedbackListParams as FeedbackListParams,
    type FeedbackGetStatisticsParams as FeedbackGetStatisticsParams,
    type FeedbackReplyParams as FeedbackReplyParams,
    type FeedbackUploadAttachmentParams as FeedbackUploadAttachmentParams,
  };
}
