// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WorkExperienceAPI from './profile/work-experience';
import * as MessagesAPI from './message/conversations/messages';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Notifications extends APIResource {
  /**
   * 分页获取当前用户的通知列表
   *
   * @example
   * ```ts
   * const resultPageResultNotification =
   *   await client.v1.seeker.notifications.list();
   * ```
   */
  list(
    query: NotificationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResultPageResultNotification> {
    return this._client.get('/api/v1/seeker/notifications', { query, ...options });
  }

  /**
   * 删除通知
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.notifications.delete(0);
   * ```
   */
  delete(notificationID: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/seeker/notifications/${notificationID}`, options);
  }

  /**
   * 标记通知已读
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.notifications.read(0);
   * ```
   */
  read(notificationID: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/v1/seeker/notifications/${notificationID}/read`, options);
  }

  /**
   * 标记所有通知已读
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.notifications.readAll();
   * ```
   */
  readAll(options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post('/api/v1/seeker/notifications/read-all', options);
  }

  /**
   * 获取通知统计数据
   *
   * @example
   * ```ts
   * const resultNotificationStats =
   *   await client.v1.seeker.notifications.retrieveStats();
   * ```
   */
  retrieveStats(options?: RequestOptions): APIPromise<ResultNotificationStats> {
    return this._client.get('/api/v1/seeker/notifications/stats', options);
  }
}

/**
 * 统一响应包装类
 */
export interface ResultNotificationStats {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 通知统计响应
   */
  data?: ResultNotificationStats.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace ResultNotificationStats {
  /**
   * 通知统计响应
   */
  export interface Data {
    /**
     * 面试提醒数
     */
    interviewRemind?: number;

    /**
     * 新简历通知数
     */
    resumeNew?: number;

    /**
     * 系统通知数
     */
    systemNotice?: number;

    /**
     * 总通知数
     */
    total?: number;

    /**
     * 未读通知数
     */
    unread?: number;
  }
}

/**
 * 统一响应包装类
 */
export interface ResultPageResultNotification {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 分页响应包装类
   */
  data?: ResultPageResultNotification.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace ResultPageResultNotification {
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
     * 通知响应
     */
    export interface List {
      /**
       * 通知 ID
       */
      id?: string;

      /**
       * 跳转链接
       */
      actionUrl?: string;

      /**
       * 分类: normal 普通/important 重要/urgent 紧急
       */
      category?: string;

      /**
       * 内容
       */
      content?: string;

      /**
       * 创建时间
       */
      createdAt?: string;

      /**
       * 扩展数据(JSON 格式)
       */
      extraData?: string;

      /**
       * 是否已读: 0 未读 1 已读
       */
      isRead?: number;

      /**
       * 阅读时间
       */
      readAt?: string;

      /**
       * 通知关联信息
       */
      related?: List.Related;

      /**
       * 标题
       */
      title?: string;

      /**
       * 通知类型: resume_new 新简历/interview_remind 面试提醒/system_notice 系统通知
       */
      type?: string;
    }

    export namespace List {
      /**
       * 通知关联信息
       */
      export interface Related {
        /**
         * 职位 ID
         */
        positionId?: string;

        /**
         * 职位名称
         */
        positionName?: string;

        /**
         * 简历 ID
         */
        resumeId?: string;

        /**
         * 日程 ID
         */
        scheduleId?: string;

        /**
         * 人才姓名
         */
        talentName?: string;
      }
    }
  }
}

export interface NotificationListParams {
  /**
   * 页码
   */
  page?: number;

  /**
   * 每页数量
   */
  pageSize?: number;
}

export declare namespace Notifications {
  export {
    type ResultNotificationStats as ResultNotificationStats,
    type ResultPageResultNotification as ResultPageResultNotification,
    type NotificationListParams as NotificationListParams,
  };
}
