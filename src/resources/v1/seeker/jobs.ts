// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from './jobs';
import * as MessagesAPI from './message/conversations/messages';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * 获取指定职位的详细信息，包含公司信息和招聘者信息
   *
   * @example
   * ```ts
   * const job = await client.v1.seeker.jobs.retrieve(0);
   * ```
   */
  retrieve(jobID: number, options?: RequestOptions): APIPromise<JobRetrieveResponse> {
    return this._client.get(path`/api/v1/seeker/jobs/${jobID}`, options);
  }

  /**
   * 分页搜索职位，支持关键词、城市、薪资等筛选
   *
   * @example
   * ```ts
   * const jobListResponse = await client.v1.seeker.jobs.list({
   *   request: {},
   * });
   * ```
   */
  list(query: JobListParams, options?: RequestOptions): APIPromise<JobListResponse> {
    return this._client.get('/api/v1/seeker/jobs', { query, ...options });
  }

  /**
   * 获取所有职位分类，包含一级和二级分类
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.seeker.jobs.retrieveCategories();
   * ```
   */
  retrieveCategories(options?: RequestOptions): APIPromise<JobRetrieveCategoriesResponse> {
    return this._client.get('/api/v1/seeker/jobs/categories', options);
  }

  /**
   * 获取热门职位列表
   *
   * @example
   * ```ts
   * const resultListJobList =
   *   await client.v1.seeker.jobs.retrieveHot();
   * ```
   */
  retrieveHot(
    query: JobRetrieveHotParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResultListJobList> {
    return this._client.get('/api/v1/seeker/jobs/hot', { query, ...options });
  }

  /**
   * 获取最新发布的职位列表
   *
   * @example
   * ```ts
   * const resultListJobList =
   *   await client.v1.seeker.jobs.retrieveLatest();
   * ```
   */
  retrieveLatest(
    query: JobRetrieveLatestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResultListJobList> {
    return this._client.get('/api/v1/seeker/jobs/latest', { query, ...options });
  }

  /**
   * 根据求职者意向和简历推荐匹配的职位
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.seeker.jobs.retrieveRecommended();
   * ```
   */
  retrieveRecommended(
    query: JobRetrieveRecommendedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JobRetrieveRecommendedResponse> {
    return this._client.get('/api/v1/seeker/jobs/recommended', { query, ...options });
  }
}

/**
 * 职位列表-企业信息
 */
export interface CompanyInfo {
  /**
   * 企业 ID
   */
  id?: string;

  /**
   * 企业 Logo
   */
  logo?: string;

  /**
   * 企业名称
   */
  name?: string;

  /**
   * 企业规模
   */
  size?: string;

  /**
   * 企业类型
   */
  type?: string;
}

/**
 * 职位列表响应
 */
export interface JobListResponse {
  /**
   * 职位 ID
   */
  id?: string;

  /**
   * 城市
   */
  city?: string;

  /**
   * 职位列表-企业信息
   */
  company?: CompanyInfo;

  /**
   * 区县
   */
  district?: string;

  /**
   * 学历要求
   */
  education?: string;

  /**
   * 经验要求
   */
  experience?: string;

  /**
   * 发布时间
   */
  publishedAt?: string;

  /**
   * 薪资
   */
  salary?: string;

  /**
   * 标签
   */
  tags?: Array<string>;

  /**
   * 职位名称
   */
  title?: string;
}

/**
 * 统一响应包装类
 */
export interface ResultListJobList {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: Array<JobListResponse>;

  /**
   * 响应消息
   */
  message?: string;
}

/**
 * 统一响应包装类
 */
export interface JobRetrieveResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 职位详情响应
   */
  data?: JobRetrieveResponse.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace JobRetrieveResponse {
  /**
   * 职位详情响应
   */
  export interface Data {
    /**
     * 职位 ID
     */
    id?: string;

    /**
     * 详细地址
     */
    address?: string;

    /**
     * 职位福利
     */
    benefits?: Array<string>;

    /**
     * 城市
     */
    city?: string;

    /**
     * 职位列表-企业信息
     */
    company?: JobsAPI.CompanyInfo;

    /**
     * 职位描述
     */
    description?: string;

    /**
     * 区县
     */
    district?: string;

    /**
     * 学历要求
     */
    education?: string;

    /**
     * 经验要求
     */
    experience?: string;

    /**
     * 是否已投递
     */
    hasApplied?: boolean;

    /**
     * 招聘人数
     */
    headcount?: number;

    /**
     * 工作类型
     */
    jobType?: string;

    /**
     * 发布时间
     */
    publishedAt?: string;

    /**
     * 任职要求
     */
    requirements?: Array<string>;

    /**
     * 薪资
     */
    salary?: string;

    /**
     * 技能标签
     */
    tags?: Array<string>;

    /**
     * 职位名称
     */
    title?: string;
  }
}

/**
 * 统一响应包装类
 */
export interface JobListResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 分页响应包装类
   */
  data?: JobListResponse.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace JobListResponse {
  /**
   * 分页响应包装类
   */
  export interface Data {
    /**
     * 数据列表
     */
    list?: Array<JobsAPI.JobListResponse>;

    /**
     * 分页信息
     */
    pagination?: MessagesAPI.Pagination;
  }
}

/**
 * 统一响应包装类
 */
export interface JobRetrieveCategoriesResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: Array<JobRetrieveCategoriesResponse.Data>;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace JobRetrieveCategoriesResponse {
  /**
   * 职位分类响应
   */
  export interface Data {
    /**
     * 分类 ID
     */
    id?: string;

    /**
     * 图标
     */
    icon?: string;

    /**
     * 分类名称
     */
    name?: string;

    /**
     * 子分类
     */
    subcategories?: Array<Data.Subcategory>;
  }

  export namespace Data {
    /**
     * 职位子分类
     */
    export interface Subcategory {
      /**
       * 子分类 ID
       */
      id?: string;

      /**
       * 子分类名称
       */
      name?: string;

      /**
       * 职位列表
       */
      positions?: Array<string>;
    }
  }
}

/**
 * 统一响应包装类
 */
export interface JobRetrieveRecommendedResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 分页响应包装类
   */
  data?: JobRetrieveRecommendedResponse.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace JobRetrieveRecommendedResponse {
  /**
   * 分页响应包装类
   */
  export interface Data {
    /**
     * 数据列表
     */
    list?: Array<Data.List>;

    /**
     * 分页信息
     */
    pagination?: MessagesAPI.Pagination;
  }

  export namespace Data {
    /**
     * 推荐职位响应
     */
    export interface List {
      /**
       * 职位 ID
       */
      id?: string;

      /**
       * 匹配原因
       */
      matchReasons?: Array<string>;

      /**
       * 匹配分
       */
      matchScore?: number;

      /**
       * 职位名称
       */
      title?: string;
    }
  }
}

export interface JobListParams {
  /**
   * 职位搜索请求
   */
  request: JobListParams.Request;
}

export namespace JobListParams {
  /**
   * 职位搜索请求
   */
  export interface Request {
    /**
     * 职位分类
     */
    category?: string;

    /**
     * 城市
     */
    city?: string;

    /**
     * 学历要求
     */
    education?: string;

    /**
     * 经验要求
     */
    experience?: string;

    /**
     * 工作类型
     */
    jobType?: string;

    /**
     * 搜索关键词（职位名称/公司名称）
     */
    keyword?: string;

    offset?: number;

    /**
     * 页码，默认 1
     */
    page?: number;

    /**
     * 每页数量，默认 20
     */
    pageSize?: number;

    /**
     * 最高薪资(K)
     */
    salaryMax?: number;

    /**
     * 最低薪资(K)
     */
    salaryMin?: number;

    /**
     * 排序字段：latest/salary/match
     */
    sortBy?: string;
  }
}

export interface JobRetrieveHotParams {
  /**
   * 数量限制，默认 10
   */
  limit?: number;
}

export interface JobRetrieveLatestParams {
  /**
   * 数量限制，默认 10
   */
  limit?: number;
}

export interface JobRetrieveRecommendedParams {
  /**
   * 页码，默认 1
   */
  page?: number;

  /**
   * 每页数量，默认 20
   */
  pageSize?: number;
}

export declare namespace Jobs {
  export {
    type CompanyInfo as CompanyInfo,
    type JobListResponse as JobListResponse,
    type ResultListJobList as ResultListJobList,
    type JobRetrieveResponse as JobRetrieveResponse,
    type JobRetrieveCategoriesResponse as JobRetrieveCategoriesResponse,
    type JobRetrieveRecommendedResponse as JobRetrieveRecommendedResponse,
    type JobListParams as JobListParams,
    type JobRetrieveHotParams as JobRetrieveHotParams,
    type JobRetrieveLatestParams as JobRetrieveLatestParams,
    type JobRetrieveRecommendedParams as JobRetrieveRecommendedParams,
  };
}
