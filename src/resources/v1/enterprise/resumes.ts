// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ResumesAPI from './resumes';
import * as SchedulesAPI from './schedules';
import * as ApplicationsAPI from '../seeker/applications';
import * as AssistantSettingsAPI from '../seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../seeker/profile/work-experience';
import * as MessagesAPI from '../seeker/message/conversations/messages';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 简历筛选、管理相关接口
 */
export class Resumes extends APIResource {
  /**
   * 获取指定简历的详细信息和处理时间线
   *
   * @example
   * ```ts
   * const resume = await client.v1.enterprise.resumes.retrieve(
   *   0,
   * );
   * ```
   */
  retrieve(resumeID: number, options?: RequestOptions): APIPromise<ResumeRetrieveResponse> {
    return this._client.get(path`/api/v1/enterprise/resumes/${resumeID}`, options);
  }

  /**
   * 分页获取简历列表，支持多种筛选条件
   *
   * @example
   * ```ts
   * const resumes = await client.v1.enterprise.resumes.list({
   *   request: {},
   * });
   * ```
   */
  list(query: ResumeListParams, options?: RequestOptions): APIPromise<ResumeListResponse> {
    return this._client.get('/api/v1/enterprise/resumes', { query, ...options });
  }

  /**
   * 标记简历为不合适状态，可填写原因
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.resumes.reject(0);
   * ```
   */
  reject(
    resumeID: number,
    body: ResumeRejectParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.put(path`/api/v1/enterprise/resumes/${resumeID}/reject`, { body, ...options });
  }

  /**
   * 获取简历筛选漏斗和转化率统计数据
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.enterprise.resumes.statistics();
   * ```
   */
  statistics(
    query: ResumeStatisticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get('/api/v1/enterprise/resumes/statistics', { query, ...options });
  }

  /**
   * 更新简历的处理状态，如从已投递到初筛
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.enterprise.resumes.updateStatus(0, {
   *     status: 'screening',
   *   });
   * ```
   */
  updateStatus(
    resumeID: number,
    body: ResumeUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<ResumeUpdateStatusResponse> {
    return this._client.put(path`/api/v1/enterprise/resumes/${resumeID}/status`, { body, ...options });
  }
}

/**
 * 简历列表项响应
 */
export interface ResumeList {
  /**
   * 简历 ID
   */
  id?: string;

  /**
   * 投递时间
   */
  appliedAt?: string;

  /**
   * 一面时间
   */
  firstInterviewAt?: string;

  /**
   * 职位 ID
   */
  positionId?: string;

  /**
   * 职位名称
   */
  positionName?: string;

  /**
   * 初筛时间
   */
  screenedAt?: string;

  /**
   * 状态
   */
  status?: string;

  /**
   * 人才信息
   */
  talent?: SchedulesAPI.TalentInfo;

  /**
   * 人才 ID
   */
  talentId?: string;

  /**
   * 更新时间
   */
  updatedAt?: string;
}

/**
 * 统一响应包装类
 */
export interface ResumeRetrieveResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 简历详情响应
   */
  data?: ResumeRetrieveResponse.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace ResumeRetrieveResponse {
  /**
   * 简历详情响应
   */
  export interface Data {
    /**
     * 简历 ID
     */
    id?: string;

    /**
     * 投递时间
     */
    appliedAt?: string;

    /**
     * 面试记录
     */
    interviews?: Array<Data.Interview>;

    /**
     * 职位 ID
     */
    positionId?: string;

    /**
     * 职位名称
     */
    positionName?: string;

    /**
     * 状态
     */
    status?: string;

    /**
     * 人才信息
     */
    talent?: SchedulesAPI.TalentInfo;

    /**
     * 人才 ID
     */
    talentId?: string;

    /**
     * 状态时间线
     */
    timeline?: Array<ApplicationsAPI.TimelineItem>;

    /**
     * 更新时间
     */
    updatedAt?: string;
  }

  export namespace Data {
    /**
     * 面试记录项
     */
    export interface Interview {
      /**
       * 日程 ID
       */
      id?: string;

      /**
       * 反馈
       */
      feedback?: string;

      /**
       * 面试官
       */
      interviewers?: Array<string>;

      /**
       * 地点
       */
      location?: string;

      /**
       * 结果
       */
      result?: string;

      /**
       * 轮次
       */
      round?: string;

      /**
       * 时间
       */
      time?: string;
    }
  }
}

/**
 * 统一响应包装类
 */
export interface ResumeListResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 简历列表分页响应
   */
  data?: ResumeListResponse.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace ResumeListResponse {
  /**
   * 简历列表分页响应
   */
  export interface Data {
    /**
     * 简历列表
     */
    list?: Array<ResumesAPI.ResumeList>;

    /**
     * 分页信息
     */
    pagination?: MessagesAPI.Pagination;

    /**
     * 简历统计响应
     */
    statistics?: Data.Statistics;
  }

  export namespace Data {
    /**
     * 简历统计响应
     */
    export interface Statistics {
      /**
       * 已入职
       */
      hired?: number;

      /**
       * 面试中
       */
      interviewing?: number;

      /**
       * 谈薪中
       */
      offering?: number;

      /**
       * 待处理
       */
      pending?: number;

      /**
       * 已淘汰
       */
      rejected?: number;

      /**
       * 初筛中
       */
      screening?: number;

      /**
       * 总数
       */
      total?: number;
    }
  }
}

/**
 * 统一响应包装类
 */
export interface ResumeUpdateStatusResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 简历列表项响应
   */
  data?: ResumeList;

  /**
   * 响应消息
   */
  message?: string;
}

export interface ResumeListParams {
  /**
   * 简历搜索请求
   */
  request: ResumeListParams.Request;
}

export namespace ResumeListParams {
  /**
   * 简历搜索请求
   */
  export interface Request {
    /**
     * 投递结束时间
     */
    applyTimeEnd?: string;

    /**
     * 投递起始时间
     */
    applyTimeStart?: string;

    /**
     * 学历筛选
     */
    education?: Array<string>;

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
     * 职位 ID
     */
    positionId?: number;

    /**
     * 状态筛选: applied/screening/first_interview/...
     */
    status?: string;

    /**
     * 工作年限筛选
     */
    workYears?: Array<string>;
  }
}

export interface ResumeRejectParams {
  /**
   * 不合适原因
   */
  reason?: string;

  /**
   * 详细备注
   */
  remark?: string;
}

export interface ResumeStatisticsParams {
  /**
   * 结束日期
   */
  endDate?: string;

  /**
   * 职位 ID
   */
  positionId?: number;

  /**
   * 起始日期
   */
  startDate?: string;
}

export interface ResumeUpdateStatusParams {
  /**
   * 新状态
   */
  status: string;

  /**
   * 备注
   */
  remark?: string;
}

export declare namespace Resumes {
  export {
    type ResumeList as ResumeList,
    type ResumeRetrieveResponse as ResumeRetrieveResponse,
    type ResumeListResponse as ResumeListResponse,
    type ResumeUpdateStatusResponse as ResumeUpdateStatusResponse,
    type ResumeListParams as ResumeListParams,
    type ResumeRejectParams as ResumeRejectParams,
    type ResumeStatisticsParams as ResumeStatisticsParams,
    type ResumeUpdateStatusParams as ResumeUpdateStatusParams,
  };
}
