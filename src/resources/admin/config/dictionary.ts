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
export class Dictionary extends APIResource {
  /**
   * 获取指定类型的字典选项
   */
  retrieve(type: string, options?: RequestOptions): APIPromise<BannersAPI.ResultListBanners> {
    return this._client.get(path`/api/admin/config/dictionary/${type}`, options);
  }

  /**
   * 向指定类型添加字典选项
   */
  update(
    type: string,
    body: DictionaryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post(path`/api/admin/config/dictionary/${type}`, { body, ...options });
  }

  /**
   * 删除指定字典选项
   */
  delete(
    id: number,
    params: DictionaryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    const { type } = params;
    return this._client.delete(path`/api/admin/config/dictionary/${type}/${id}`, options);
  }

  /**
   * 批量删除字典选项
   */
  deleteBatch(
    type: string,
    params: DictionaryDeleteBatchParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    const { body } = params;
    return this._client.delete(path`/api/admin/config/dictionary/${type}/batch`, { body: body, ...options });
  }

  /**
   * 获取所有字典类型
   */
  retrieveTypes(options?: RequestOptions): APIPromise<BannersAPI.ResultListBanners> {
    return this._client.get('/api/admin/config/dictionary/types', options);
  }

  /**
   * 切换字典选项状态
   */
  updateStatus(
    id: number,
    params: DictionaryUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    const { type, body } = params;
    return this._client.put(path`/api/admin/config/dictionary/${type}/${id}/status`, {
      body: body,
      ...options,
    });
  }
}

/**
 * 字典选项请求
 */
export interface DictionaryItem {
  /**
   * 名称
   */
  name: string;

  /**
   * 排序
   */
  sort: number;
}

export interface DictionaryUpdateParams {
  /**
   * 名称
   */
  name: string;

  /**
   * 排序
   */
  sort: number;
}

export interface DictionaryDeleteParams {
  /**
   * 字典类型
   */
  type: string;
}

export interface DictionaryDeleteBatchParams {
  body: { [key: string]: Array<number> };
}

export interface DictionaryUpdateStatusParams {
  /**
   * Path param
   */
  type: string;

  /**
   * Body param
   */
  body: { [key: string]: string };
}

export declare namespace Dictionary {
  export {
    type DictionaryItem as DictionaryItem,
    type DictionaryUpdateParams as DictionaryUpdateParams,
    type DictionaryDeleteParams as DictionaryDeleteParams,
    type DictionaryDeleteBatchParams as DictionaryDeleteBatchParams,
    type DictionaryUpdateStatusParams as DictionaryUpdateStatusParams,
  };
}
