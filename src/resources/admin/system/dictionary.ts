// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AutocompleteAPI from '../../v1/seeker/lookups/autocomplete';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 系统配置、数据字典、公告等接口
 */
export class Dictionary extends APIResource {
  /**
   * 根据字典类型获取字典项列表
   */
  retrieve(dictType: string, options?: RequestOptions): APIPromise<DictionaryRetrieveResponse> {
    return this._client.get(path`/api/admin/system/dictionary/${dictType}`, options);
  }

  /**
   * 获取所有可用的字典类型
   */
  listTypes(options?: RequestOptions): APIPromise<AutocompleteAPI.ResultListString> {
    return this._client.get('/api/admin/system/dictionary/types', options);
  }
}

/**
 * 统一响应包装类
 */
export interface DictionaryRetrieveResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 数据字典响应
   */
  data?: DictionaryRetrieveResponse.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace DictionaryRetrieveResponse {
  /**
   * 数据字典响应
   */
  export interface Data {
    /**
     * 字典类型
     */
    dictType?: string;

    /**
     * 字典项列表
     */
    items?: Array<Data.Item>;
  }

  export namespace Data {
    /**
     * 字典项
     */
    export interface Item {
      /**
       * 字典项编码
       */
      dictCode?: string;

      /**
       * 字典项名称
       */
      dictName?: string;

      /**
       * 字典项值
       */
      dictValue?: string;

      /**
       * 排序号
       */
      sortOrder?: number;
    }
  }
}

export declare namespace Dictionary {
  export { type DictionaryRetrieveResponse as DictionaryRetrieveResponse };
}
