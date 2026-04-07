// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Autocomplete extends APIResource {
  /**
   * 搜索公司
   *
   * @example
   * ```ts
   * const resultListString =
   *   await client.v1.seeker.lookups.autocomplete.retrieveCompanies(
   *     { keyword: 'keyword' },
   *   );
   * ```
   */
  retrieveCompanies(
    query: AutocompleteRetrieveCompaniesParams,
    options?: RequestOptions,
  ): APIPromise<ResultListString> {
    return this._client.get('/api/v1/seeker/lookups/autocomplete/companies', { query, ...options });
  }

  /**
   * 搜索专业
   *
   * @example
   * ```ts
   * const resultListString =
   *   await client.v1.seeker.lookups.autocomplete.retrieveMajors(
   *     { keyword: 'keyword' },
   *   );
   * ```
   */
  retrieveMajors(
    query: AutocompleteRetrieveMajorsParams,
    options?: RequestOptions,
  ): APIPromise<ResultListString> {
    return this._client.get('/api/v1/seeker/lookups/autocomplete/majors', { query, ...options });
  }

  /**
   * 搜索职位
   *
   * @example
   * ```ts
   * const resultListString =
   *   await client.v1.seeker.lookups.autocomplete.retrievePositions(
   *     { keyword: 'keyword' },
   *   );
   * ```
   */
  retrievePositions(
    query: AutocompleteRetrievePositionsParams,
    options?: RequestOptions,
  ): APIPromise<ResultListString> {
    return this._client.get('/api/v1/seeker/lookups/autocomplete/positions', { query, ...options });
  }

  /**
   * 搜索学校
   *
   * @example
   * ```ts
   * const resultListString =
   *   await client.v1.seeker.lookups.autocomplete.retrieveSchools(
   *     { keyword: 'keyword' },
   *   );
   * ```
   */
  retrieveSchools(
    query: AutocompleteRetrieveSchoolsParams,
    options?: RequestOptions,
  ): APIPromise<ResultListString> {
    return this._client.get('/api/v1/seeker/lookups/autocomplete/schools', { query, ...options });
  }
}

/**
 * 统一响应包装类
 */
export interface ResultListString {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: Array<string>;

  /**
   * 响应消息
   */
  message?: string;
}

export interface AutocompleteRetrieveCompaniesParams {
  /**
   * 关键词
   */
  keyword: string;

  limit?: number;
}

export interface AutocompleteRetrieveMajorsParams {
  /**
   * 关键词
   */
  keyword: string;

  limit?: number;
}

export interface AutocompleteRetrievePositionsParams {
  /**
   * 关键词
   */
  keyword: string;

  limit?: number;
}

export interface AutocompleteRetrieveSchoolsParams {
  /**
   * 关键词
   */
  keyword: string;

  limit?: number;
}

export declare namespace Autocomplete {
  export {
    type ResultListString as ResultListString,
    type AutocompleteRetrieveCompaniesParams as AutocompleteRetrieveCompaniesParams,
    type AutocompleteRetrieveMajorsParams as AutocompleteRetrieveMajorsParams,
    type AutocompleteRetrievePositionsParams as AutocompleteRetrievePositionsParams,
    type AutocompleteRetrieveSchoolsParams as AutocompleteRetrieveSchoolsParams,
  };
}
