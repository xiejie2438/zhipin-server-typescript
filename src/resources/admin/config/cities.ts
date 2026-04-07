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
export class Cities extends APIResource {
  /**
   * 新增城市
   */
  create(
    params: CityCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    const { body } = params;
    return this._client.post('/api/admin/config/cities', { body: body, ...options });
  }

  /**
   * 修改城市
   */
  update(
    id: number,
    params: CityUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    const { body } = params;
    return this._client.put(path`/api/admin/config/cities/${id}`, { body: body, ...options });
  }

  /**
   * 分页获取城市列表
   */
  list(
    query: CityListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.ResultPageResultMapStringObject> {
    return this._client.get('/api/admin/config/cities', { query, ...options });
  }

  /**
   * 删除城市
   */
  delete(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/admin/config/cities/${id}`, options);
  }
}

export interface CityCreateParams {
  body: { [key: string]: unknown };
}

export interface CityUpdateParams {
  body: { [key: string]: unknown };
}

export interface CityListParams {
  /**
   * 搜索关键词
   */
  keyword?: string;

  /**
   * 页码，默认 1
   */
  page?: number;

  /**
   * 每页条数，默认 20
   */
  pageSize?: number;

  /**
   * 省份 ID
   */
  provinceId?: number;
}

export declare namespace Cities {
  export {
    type CityCreateParams as CityCreateParams,
    type CityUpdateParams as CityUpdateParams,
    type CityListParams as CityListParams,
  };
}
