// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SchedulesAPI from '../enterprise/schedules';
import * as AssistantSettingsAPI from './preferences/assistant-settings';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 求职者面试日程管理相关接口
 */
export class Schedules extends APIResource {
  /**
   * 获取指定面试日程的详细信息
   *
   * @example
   * ```ts
   * const resultScheduleDetail =
   *   await client.v1.seeker.schedules.retrieve(0);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<SchedulesAPI.ResultScheduleDetail> {
    return this._client.get(path`/api/v1/seeker/schedules/${id}`, options);
  }

  /**
   * 分页获取当前求职者的面试日程
   *
   * @example
   * ```ts
   * const resultPageScheduleList =
   *   await client.v1.seeker.schedules.list();
   * ```
   */
  list(
    query: ScheduleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SchedulesAPI.ResultPageScheduleList> {
    return this._client.get('/api/v1/seeker/schedules', { query, ...options });
  }

  /**
   * 求职者主动取消面试
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.seeker.schedules.updateCancel(0, {
   *     reason: 'reason',
   *   });
   * ```
   */
  updateCancel(
    id: number,
    body: ScheduleUpdateCancelParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.patch(path`/api/v1/seeker/schedules/${id}/cancel`, { body, ...options });
  }

  /**
   * 确认参加指定的面试日程
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.seeker.schedules.updateConfirm(0);
   * ```
   */
  updateConfirm(
    id: number,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.patch(path`/api/v1/seeker/schedules/${id}/confirm`, options);
  }
}

export interface ScheduleListParams {
  /**
   * 结束日期(YYYY-MM-DD)
   */
  endDate?: string;

  /**
   * 页码，默认 1
   */
  page?: number;

  /**
   * 每页数量，默认 20
   */
  pageSize?: number;

  /**
   * 开始日期(YYYY-MM-DD)
   */
  startDate?: string;

  /**
   * 状态筛选：pending/confirmed/completed/cancelled
   */
  status?: string;
}

export interface ScheduleUpdateCancelParams {
  /**
   * 取消原因
   */
  reason: string;
}

export declare namespace Schedules {
  export {
    type ScheduleListParams as ScheduleListParams,
    type ScheduleUpdateCancelParams as ScheduleUpdateCancelParams,
  };
}
