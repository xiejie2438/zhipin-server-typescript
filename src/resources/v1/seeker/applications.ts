// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ApplicationsAPI from './applications';
import * as WorkExperienceAPI from './profile/work-experience';
import * as MessagesAPI from './message/conversations/messages';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Applications extends APIResource {
  /**
   * 向指定职位投递简历
   *
   * @example
   * ```ts
   * const application =
   *   await client.v1.seeker.applications.create({ jobId: 0 });
   * ```
   */
  create(body: ApplicationCreateParams, options?: RequestOptions): APIPromise<ApplicationCreateResponse> {
    return this._client.post('/api/v1/seeker/applications', { body, ...options });
  }

  /**
   * 获取指定投递记录的详细信息，包含状态时间线
   *
   * @example
   * ```ts
   * const application =
   *   await client.v1.seeker.applications.retrieve(0);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<ApplicationRetrieveResponse> {
    return this._client.get(path`/api/v1/seeker/applications/${id}`, options);
  }

  /**
   * 分页获取当前求职者的所有投递记录
   *
   * @example
   * ```ts
   * const applicationListResponse =
   *   await client.v1.seeker.applications.list();
   * ```
   */
  list(
    query: ApplicationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ApplicationListResponse> {
    return this._client.get('/api/v1/seeker/applications', { query, ...options });
  }

  /**
   * 撤回指定投递（仅在未处理状态下可撤回）
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.applications.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/seeker/applications/${id}`, options);
  }

  /**
   * 获取投递记录的统计信息
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.seeker.applications.retrieveStatistics();
   * ```
   */
  retrieveStatistics(options?: RequestOptions): APIPromise<ApplicationRetrieveStatisticsResponse> {
    return this._client.get('/api/v1/seeker/applications/statistics', options);
  }

  /**
   * 求职者主动标记职位为不合适
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.applications.updateMarkUnsuitable(
   *     0,
   *     { reason: 'reason' },
   *   );
   * ```
   */
  updateMarkUnsuitable(
    id: number,
    body: ApplicationUpdateMarkUnsuitableParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.patch(path`/api/v1/seeker/applications/${id}/mark-unsuitable`, { body, ...options });
  }
}

/**
 * 投递记录列表响应
 */
export interface ApplicationListResponse {
  /**
   * 投递记录 ID
   */
  id?: string;

  /**
   * 投递时间
   */
  appliedAt?: string;

  /**
   * 企业 ID
   */
  companyId?: string;

  /**
   * 企业 Logo
   */
  companyLogo?: string;

  /**
   * 企业名称
   */
  companyName?: string;

  /**
   * 职位 ID
   */
  jobId?: string;

  /**
   * 职位名称
   */
  jobTitle?: string;

  /**
   * 状态
   */
  status?: string;

  /**
   * 状态文案
   */
  statusText?: string;

  /**
   * 更新时间
   */
  updatedAt?: string;
}

/**
 * 投递详情-状态时间线
 */
export interface TimelineItem {
  /**
   * 描述
   */
  description?: string;

  /**
   * 状态
   */
  status?: string;

  /**
   * 状态文案
   */
  statusText?: string;

  /**
   * 时间
   */
  time?: string;
}

/**
 * 统一响应包装类
 */
export interface ApplicationCreateResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 投递记录列表响应
   */
  data?: ApplicationListResponse;

  /**
   * 响应消息
   */
  message?: string;
}

/**
 * 统一响应包装类
 */
export interface ApplicationRetrieveResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 投递详情响应
   */
  data?: ApplicationRetrieveResponse.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace ApplicationRetrieveResponse {
  /**
   * 投递详情响应
   */
  export interface Data {
    /**
     * 投递记录 ID
     */
    id?: string;

    /**
     * 投递时间
     */
    appliedAt?: string;

    /**
     * 投递详情-职位信息
     */
    job?: Data.Job;

    /**
     * 状态
     */
    status?: string;

    /**
     * 状态文案
     */
    statusText?: string;

    /**
     * 时间线
     */
    timeline?: Array<ApplicationsAPI.TimelineItem>;

    /**
     * 更新时间
     */
    updatedAt?: string;
  }

  export namespace Data {
    /**
     * 投递详情-职位信息
     */
    export interface Job {
      /**
       * 职位 ID
       */
      id?: string;

      /**
       * 城市
       */
      city?: string;

      /**
       * 企业名称
       */
      companyName?: string;

      /**
       * 薪资
       */
      salary?: string;

      /**
       * 职位名称
       */
      title?: string;
    }
  }
}

/**
 * 统一响应包装类
 */
export interface ApplicationListResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 分页响应包装类
   */
  data?: ApplicationListResponse.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace ApplicationListResponse {
  /**
   * 分页响应包装类
   */
  export interface Data {
    /**
     * 数据列表
     */
    list?: Array<ApplicationsAPI.ApplicationListResponse>;

    /**
     * 分页信息
     */
    pagination?: MessagesAPI.Pagination;
  }
}

/**
 * 统一响应包装类
 */
export interface ApplicationRetrieveStatisticsResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 投递统计响应
   */
  data?: ApplicationRetrieveStatisticsResponse.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace ApplicationRetrieveStatisticsResponse {
  /**
   * 投递统计响应
   */
  export interface Data {
    /**
     * 面试中
     */
    interviewing?: number;

    /**
     * Offer
     */
    offer?: number;

    /**
     * 待处理
     */
    pending?: number;

    /**
     * 不合适
     */
    rejected?: number;

    /**
     * 总投递数
     */
    total?: number;
  }
}

export interface ApplicationCreateParams {
  /**
   * 职位 ID
   */
  jobId: number;

  /**
   * 求职信
   */
  coverLetter?: string;

  /**
   * 简历 ID（不传则使用默认简历）
   */
  resumeId?: number;
}

export interface ApplicationListParams {
  /**
   * 页码，默认 1
   */
  page?: number;

  /**
   * 每页数量，默认 20
   */
  pageSize?: number;

  /**
   * 状态筛选：pending/interviewing/offer/rejected
   */
  status?: string;
}

export interface ApplicationUpdateMarkUnsuitableParams {
  /**
   * 不合适原因
   */
  reason: string;
}

export declare namespace Applications {
  export {
    type ApplicationListResponse as ApplicationListResponse,
    type TimelineItem as TimelineItem,
    type ApplicationCreateResponse as ApplicationCreateResponse,
    type ApplicationRetrieveResponse as ApplicationRetrieveResponse,
    type ApplicationRetrieveStatisticsResponse as ApplicationRetrieveStatisticsResponse,
    type ApplicationCreateParams as ApplicationCreateParams,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationUpdateMarkUnsuitableParams as ApplicationUpdateMarkUnsuitableParams,
  };
}
