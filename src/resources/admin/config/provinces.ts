// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BannersAPI from './banners';
import * as AssistantSettingsAPI from '../../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 字典管理、省市配置、违禁词、公告、Banner等配置接口
 */
export class Provinces extends APIResource {
  /**
   * 添加新省份
   */
  create(
    body: ProvinceCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/admin/config/provinces', { body, ...options });
  }

  /**
   * 修改省份信息
   */
  update(
    id: number,
    body: ProvinceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.put(path`/api/admin/config/provinces/${id}`, { body, ...options });
  }

  /**
   * 获取所有省份列表
   */
  list(
    query: ProvinceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BannersAPI.ResultListBanners> {
    return this._client.get('/api/admin/config/provinces', { query, ...options });
  }

  /**
   * 删除省份（存在关联城市时不可删除）
   */
  delete(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/admin/config/provinces/${id}`, options);
  }
}

/**
 * 省份请求
 */
export interface Province {
  /**
   * 省份编码
   */
  code: string;

  /**
   * 省份名称
   */
  name: string;

  /**
   * 排序
   */
  sort: number;
}

export interface ProvinceCreateParams {
  /**
   * 省份编码
   */
  code: string;

  /**
   * 省份名称
   */
  name: string;

  /**
   * 排序
   */
  sort: number;
}

export interface ProvinceUpdateParams {
  /**
   * 省份编码
   */
  code: string;

  /**
   * 省份名称
   */
  name: string;

  /**
   * 排序
   */
  sort: number;
}

export interface ProvinceListParams {
  /**
   * 搜索关键词
   */
  keyword?: string;
}

export declare namespace Provinces {
  export {
    type Province as Province,
    type ProvinceCreateParams as ProvinceCreateParams,
    type ProvinceUpdateParams as ProvinceUpdateParams,
    type ProvinceListParams as ProvinceListParams,
  };
}
