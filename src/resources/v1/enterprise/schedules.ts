// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssistantSettingsAPI from '../seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../seeker/profile/work-experience';
import * as MessagesAPI from '../seeker/message/conversations/messages';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Schedules extends APIResource {
  /**
   * 创建新的面试日程或会议日程
   *
   * @example
   * ```ts
   * const resultScheduleDetail =
   *   await client.v1.enterprise.schedules.create({
   *     endTime: '2019-12-27T18:11:19.117Z',
   *     startTime: '2019-12-27T18:11:19.117Z',
   *     type: 'interview',
   *   });
   * ```
   */
  create(body: ScheduleCreateParams, options?: RequestOptions): APIPromise<ResultScheduleDetail> {
    return this._client.post('/api/v1/enterprise/schedules', { body, ...options });
  }

  /**
   * 获取指定日程的详细信息
   *
   * @example
   * ```ts
   * const resultScheduleDetail =
   *   await client.v1.enterprise.schedules.retrieve(0);
   * ```
   */
  retrieve(scheduleID: number, options?: RequestOptions): APIPromise<ResultScheduleDetail> {
    return this._client.get(path`/api/v1/enterprise/schedules/${scheduleID}`, options);
  }

  /**
   * 更新日程时间、地点、面试官等信息（改期）
   *
   * @example
   * ```ts
   * const resultScheduleDetail =
   *   await client.v1.enterprise.schedules.update(0);
   * ```
   */
  update(
    scheduleID: number,
    body: ScheduleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResultScheduleDetail> {
    return this._client.put(path`/api/v1/enterprise/schedules/${scheduleID}`, { body, ...options });
  }

  /**
   * 分页获取日程列表，支持日期范围和状态筛选
   *
   * @example
   * ```ts
   * const resultPageScheduleList =
   *   await client.v1.enterprise.schedules.list();
   * ```
   */
  list(
    query: ScheduleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResultPageScheduleList> {
    return this._client.get('/api/v1/enterprise/schedules', { query, ...options });
  }

  /**
   * 取消指定的日程安排
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.schedules.delete(0, {
   *     reason: 'reason',
   *   });
   * ```
   */
  delete(
    scheduleID: number,
    body: ScheduleDeleteParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/enterprise/schedules/${scheduleID}`, { body, ...options });
  }

  /**
   * 兼容文档的 PATCH /schedules/{id}/cancel
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.enterprise.schedules.cancel(0, {
   *     reason: 'reason',
   *   });
   * ```
   */
  cancel(
    scheduleID: number,
    body: ScheduleCancelParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.patch(path`/api/v1/enterprise/schedules/${scheduleID}/cancel`, { body, ...options });
  }

  /**
   * 求职者确认参加指定日程
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.enterprise.schedules.confirm(0);
   * ```
   */
  confirm(
    scheduleID: number,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.patch(path`/api/v1/enterprise/schedules/${scheduleID}/confirm`, options);
  }

  /**
   * 面试官提交面试反馈和评价
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.enterprise.schedules.submitFeedback(0, {
   *     content: '技术基础扎实，沟通能力良好',
   *     result: 'pass',
   *   });
   * ```
   */
  submitFeedback(
    scheduleID: number,
    body: ScheduleSubmitFeedbackParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post(path`/api/v1/enterprise/schedules/${scheduleID}/feedbacks`, {
      body,
      ...options,
    });
  }
}

/**
 * 反馈信息
 */
export interface FeedbackInfo {
  id?: string;

  content?: string;

  createdAt?: string;

  result?: string;

  userId?: string;

  userName?: string;
}

/**
 * 面试官信息
 */
export interface InterviewerInfo {
  id?: string;

  avatar?: string;

  hasFeedback?: boolean;

  isMain?: boolean;

  name?: string;
}

/**
 * 职位信息
 */
export interface PositionInfo {
  id?: string;

  name?: string;
}

/**
 * 统一响应包装类
 */
export interface ResultPageScheduleList {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 分页响应包装类
   */
  data?: ResultPageScheduleList.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace ResultPageScheduleList {
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
     * 求职端日程列表响应
     */
    export interface List {
      /**
       * 日程 ID
       */
      id?: string;

      /**
       * 企业名称
       */
      companyName?: string;

      /**
       * 职位名称
       */
      jobTitle?: string;

      /**
       * 轮次
       */
      round?: string;

      /**
       * 开始时间
       */
      scheduledAt?: string;

      /**
       * 状态
       */
      status?: string;

      /**
       * 类型
       */
      type?: string;
    }
  }
}

/**
 * 统一响应包装类
 */
export interface ResultScheduleDetail {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 日程详情响应
   */
  data?: ScheduleDetailResponse;

  /**
   * 响应消息
   */
  message?: string;
}

/**
 * 取消原因
 */
export interface ScheduleCancel {
  /**
   * 取消原因
   */
  reason: string;
}

/**
 * 日程详情响应
 */
export interface ScheduleDetailResponse {
  /**
   * 日程 ID
   */
  id?: string;

  /**
   * 创建时间
   */
  createdAt?: string;

  /**
   * 用户信息
   */
  createdBy?: UserInfo;

  /**
   * 面试须知
   */
  description?: string;

  /**
   * 结束时间
   */
  endTime?: string;

  /**
   * 反馈列表
   */
  feedbacks?: Array<FeedbackInfo>;

  /**
   * 面试官列表
   */
  interviewers?: Array<InterviewerInfo>;

  /**
   * 面试地点
   */
  location?: string;

  /**
   * 线上会议链接
   */
  meetingLink?: string;

  /**
   * 会议室
   */
  meetingRoom?: string;

  /**
   * 职位信息
   */
  position?: PositionInfo;

  /**
   * 简历 ID
   */
  resumeId?: string;

  /**
   * 面试轮次
   */
  round?: string;

  /**
   * 开始时间
   */
  startTime?: string;

  /**
   * 状态
   */
  status?: string;

  /**
   * 人才信息
   */
  talent?: TalentInfo;

  /**
   * 标题
   */
  title?: string;

  /**
   * 类型
   */
  type?: string;
}

/**
 * 人才信息
 */
export interface TalentInfo {
  id?: string;

  avatar?: string;

  name?: string;

  targetPosition?: string;
}

/**
 * 用户信息
 */
export interface UserInfo {
  id?: string;

  name?: string;
}

export interface ScheduleCreateParams {
  /**
   * 结束时间
   */
  endTime: string;

  /**
   * 开始时间
   */
  startTime: string;

  /**
   * 类型: interview 面试/meeting 会议/other 其他
   */
  type: string;

  /**
   * 日程描述/面试须知
   */
  description?: string;

  /**
   * 面试官 ID 列表
   */
  interviewerIds?: Array<number>;

  /**
   * 面试地点
   */
  location?: string;

  /**
   * 线上会议链接
   */
  meetingLink?: string;

  /**
   * 通知消息
   */
  message?: string;

  /**
   * 是否通知候选人
   */
  notifyCandidate?: boolean;

  /**
   * 简历 ID
   */
  resumeId?: number;

  /**
   * 面试轮次: screening 初筛/first 一面/second 二面/third 三面/hr HR 面/final 终面
   */
  round?: string;
}

export interface ScheduleUpdateParams {
  /**
   * 结束时间
   */
  endTime?: string;

  /**
   * 面试官 ID 列表
   */
  interviewerIds?: Array<number>;

  /**
   * 面试地点
   */
  location?: string;

  /**
   * 是否通知候选人
   */
  notifyCandidate?: boolean;

  /**
   * 改期原因
   */
  reason?: string;

  /**
   * 开始时间
   */
  startTime?: string;
}

export interface ScheduleListParams {
  /**
   * 结束日期(YYYY-MM-DD)
   */
  endDate?: string;

  /**
   * 页码
   */
  page?: number;

  /**
   * 每页数量
   */
  pageSize?: number;

  /**
   * 起始日期(YYYY-MM-DD)
   */
  startDate?: string;

  /**
   * 状态: pending/confirmed/completed/cancelled
   */
  status?: string;

  /**
   * 类型: interview/meeting
   */
  type?: string;
}

export interface ScheduleDeleteParams {
  /**
   * 取消原因
   */
  reason: string;
}

export interface ScheduleCancelParams {
  /**
   * 取消原因
   */
  reason: string;
}

export interface ScheduleSubmitFeedbackParams {
  /**
   * 反馈内容
   */
  content: string;

  /**
   * 面试结论: pass 通过/fail 不通过/pending 待定
   */
  result: string;

  /**
   * 建议: hire 录用/next_round 下一轮/reject 淘汰/hold 观望
   */
  recommendation?: string;

  /**
   * 维度评分
   */
  scores?: { [key: string]: number };

  /**
   * 优势/亮点
   */
  strengths?: string;

  /**
   * 不足/待提升
   */
  weaknesses?: string;
}

export declare namespace Schedules {
  export {
    type FeedbackInfo as FeedbackInfo,
    type InterviewerInfo as InterviewerInfo,
    type PositionInfo as PositionInfo,
    type ResultPageScheduleList as ResultPageScheduleList,
    type ResultScheduleDetail as ResultScheduleDetail,
    type ScheduleCancel as ScheduleCancel,
    type ScheduleDetailResponse as ScheduleDetailResponse,
    type TalentInfo as TalentInfo,
    type UserInfo as UserInfo,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
    type ScheduleCancelParams as ScheduleCancelParams,
    type ScheduleSubmitFeedbackParams as ScheduleSubmitFeedbackParams,
  };
}
