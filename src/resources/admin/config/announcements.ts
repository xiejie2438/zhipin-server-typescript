// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessagesAPI from '../../v1/seeker/ai-assistant/messages';
import * as AssistantSettingsAPI from '../../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 字典管理、省市配置、违禁词、公告、Banner等配置接口
 */
export class Announcements extends APIResource {
  /**
   * 创建新公告
   */
  create(
    body: AnnouncementCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/admin/config/announcements', { body, ...options });
  }

  /**
   * 获取指定公告详情
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get(path`/api/admin/config/announcements/${id}`, options);
  }

  /**
   * 修改指定公告
   */
  update(
    id: number,
    body: AnnouncementUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.put(path`/api/admin/config/announcements/${id}`, { body, ...options });
  }

  /**
   * 分页获取公告列表
   */
  list(
    query: AnnouncementListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.ResultPageResultMapStringObject> {
    return this._client.get('/api/admin/config/announcements', { query, ...options });
  }

  /**
   * 删除指定公告
   */
  delete(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/admin/config/announcements/${id}`, options);
  }
}

/**
 * 公告请求
 */
export interface Announcement {
  /**
   * 内容
   */
  content: string;

  /**
   * 标题
   */
  title: string;

  /**
   * 发布时间
   */
  publishAt?: string;

  /**
   * 状态: draft/published
   */
  status?: string;
}

export interface AnnouncementCreateParams {
  /**
   * 内容
   */
  content: string;

  /**
   * 标题
   */
  title: string;

  /**
   * 发布时间
   */
  publishAt?: string;

  /**
   * 状态: draft/published
   */
  status?: string;
}

export interface AnnouncementUpdateParams {
  /**
   * 内容
   */
  content: string;

  /**
   * 标题
   */
  title: string;

  /**
   * 发布时间
   */
  publishAt?: string;

  /**
   * 状态: draft/published
   */
  status?: string;
}

export interface AnnouncementListParams {
  /**
   * 页码，默认 1
   */
  page?: number;

  /**
   * 每页条数，默认 10
   */
  pageSize?: number;

  /**
   * 状态: published/draft
   */
  status?: string;
}

export declare namespace Announcements {
  export {
    type Announcement as Announcement,
    type AnnouncementCreateParams as AnnouncementCreateParams,
    type AnnouncementUpdateParams as AnnouncementUpdateParams,
    type AnnouncementListParams as AnnouncementListParams,
  };
}
