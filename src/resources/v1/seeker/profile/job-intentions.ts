// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WorkExperienceAPI from './work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class JobIntentions extends APIResource {
  /**
   * 更新指定求职意向
   *
   * @example
   * ```ts
   * const resultJobIntention =
   *   await client.v1.seeker.profile.jobIntentions.update(0, {
   *     city: 'city',
   *     jobStatus: 'jobStatus',
   *     jobType: 'jobType',
   *     salaryMax: 1,
   *     salaryMin: 1,
   *     title: 'title',
   *   });
   * ```
   */
  update(
    id: number,
    body: JobIntentionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResultJobIntention> {
    return this._client.put(path`/api/v1/seeker/profile/job-intentions/${id}`, { body, ...options });
  }

  /**
   * 删除指定求职意向
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.profile.jobIntentions.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/seeker/profile/job-intentions/${id}`, options);
  }

  /**
   * 创建新的求职意向，最多可创建 3 个
   *
   * @example
   * ```ts
   * const resultJobIntention =
   *   await client.v1.seeker.profile.jobIntentions.jobIntentions(
   *     {
   *       city: 'city',
   *       jobStatus: 'jobStatus',
   *       jobType: 'jobType',
   *       salaryMax: 1,
   *       salaryMin: 1,
   *       title: 'title',
   *     },
   *   );
   * ```
   */
  jobIntentions(
    body: JobIntentionJobIntentionsParams,
    options?: RequestOptions,
  ): APIPromise<ResultJobIntention> {
    return this._client.post('/api/v1/seeker/profile/job-intentions', { body, ...options });
  }

  /**
   * 获取当前求职者的所有求职意向（最多 3 个）
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.seeker.profile.jobIntentions.retrieveJobIntentions();
   * ```
   */
  retrieveJobIntentions(options?: RequestOptions): APIPromise<JobIntentionRetrieveJobIntentionsResponse> {
    return this._client.get('/api/v1/seeker/profile/job-intentions', options);
  }
}

/**
 * 求职意向请求
 */
export interface JobIntentionRequest {
  /**
   * 期望城市
   */
  city: string;

  /**
   * 求职状态
   */
  jobStatus: string;

  /**
   * 工作类型
   */
  jobType: string;

  /**
   * 最高薪资(K)
   */
  salaryMax: number;

  /**
   * 最低薪资(K)
   */
  salaryMin: number;

  /**
   * 期望职位
   */
  title: string;

  /**
   * 期望企业规模
   */
  companySizes?: Array<string>;

  /**
   * 期望企业类型
   */
  companyTypes?: Array<string>;

  /**
   * 海外工作意愿
   */
  overseasTypes?: Array<string>;

  /**
   * 技能标签
   */
  skills?: Array<string>;
}

/**
 * 求职意向响应
 */
export interface JobIntentionResponse {
  /**
   * ID
   */
  id?: number;

  /**
   * 期望城市
   */
  city?: string;

  /**
   * 期望企业规模
   */
  companySizes?: Array<string>;

  /**
   * 期望企业类型
   */
  companyTypes?: Array<string>;

  /**
   * 创建时间
   */
  createdAt?: string;

  /**
   * 求职状态
   */
  jobStatus?: string;

  /**
   * 工作类型
   */
  jobType?: string;

  /**
   * 海外工作意愿
   */
  overseasTypes?: Array<string>;

  /**
   * 最高薪资(K)
   */
  salaryMax?: number;

  /**
   * 最低薪资(K)
   */
  salaryMin?: number;

  /**
   * 技能标签
   */
  skills?: Array<string>;

  /**
   * 期望职位
   */
  title?: string;

  /**
   * 更新时间
   */
  updatedAt?: string;
}

/**
 * 统一响应包装类
 */
export interface ResultJobIntention {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 求职意向响应
   */
  data?: JobIntentionResponse;

  /**
   * 响应消息
   */
  message?: string;
}

/**
 * 统一响应包装类
 */
export interface JobIntentionRetrieveJobIntentionsResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: Array<JobIntentionResponse>;

  /**
   * 响应消息
   */
  message?: string;
}

export interface JobIntentionUpdateParams {
  /**
   * 期望城市
   */
  city: string;

  /**
   * 求职状态
   */
  jobStatus: string;

  /**
   * 工作类型
   */
  jobType: string;

  /**
   * 最高薪资(K)
   */
  salaryMax: number;

  /**
   * 最低薪资(K)
   */
  salaryMin: number;

  /**
   * 期望职位
   */
  title: string;

  /**
   * 期望企业规模
   */
  companySizes?: Array<string>;

  /**
   * 期望企业类型
   */
  companyTypes?: Array<string>;

  /**
   * 海外工作意愿
   */
  overseasTypes?: Array<string>;

  /**
   * 技能标签
   */
  skills?: Array<string>;
}

export interface JobIntentionJobIntentionsParams {
  /**
   * 期望城市
   */
  city: string;

  /**
   * 求职状态
   */
  jobStatus: string;

  /**
   * 工作类型
   */
  jobType: string;

  /**
   * 最高薪资(K)
   */
  salaryMax: number;

  /**
   * 最低薪资(K)
   */
  salaryMin: number;

  /**
   * 期望职位
   */
  title: string;

  /**
   * 期望企业规模
   */
  companySizes?: Array<string>;

  /**
   * 期望企业类型
   */
  companyTypes?: Array<string>;

  /**
   * 海外工作意愿
   */
  overseasTypes?: Array<string>;

  /**
   * 技能标签
   */
  skills?: Array<string>;
}

export declare namespace JobIntentions {
  export {
    type JobIntentionRequest as JobIntentionRequest,
    type JobIntentionResponse as JobIntentionResponse,
    type ResultJobIntention as ResultJobIntention,
    type JobIntentionRetrieveJobIntentionsResponse as JobIntentionRetrieveJobIntentionsResponse,
    type JobIntentionUpdateParams as JobIntentionUpdateParams,
    type JobIntentionJobIntentionsParams as JobIntentionJobIntentionsParams,
  };
}
