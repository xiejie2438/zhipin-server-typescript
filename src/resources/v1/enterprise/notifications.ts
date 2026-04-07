// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SeekerNotificationsAPI from '../seeker/notifications';
import * as WorkExperienceAPI from '../seeker/profile/work-experience';
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
   *   await client.v1.enterprise.notifications.list();
   * ```
   */
  list(
    query: NotificationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeekerNotificationsAPI.ResultPageResultNotification> {
    return this._client.get('/api/v1/enterprise/notifications', { query, ...options });
  }

  /**
   * 删除通知
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.notifications.delete(0);
   * ```
   */
  delete(notificationID: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/enterprise/notifications/${notificationID}`, options);
  }

  /**
   * 标记所有通知已读
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.notifications.markAllRead();
   * ```
   */
  markAllRead(options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post('/api/v1/enterprise/notifications/read-all', options);
  }

  /**
   * 标记通知已读
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.notifications.markRead(0);
   * ```
   */
  markRead(notificationID: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/v1/enterprise/notifications/${notificationID}/read`, options);
  }

  /**
   * 获取通知统计数据
   *
   * @example
   * ```ts
   * const resultNotificationStats =
   *   await client.v1.enterprise.notifications.statistics();
   * ```
   */
  statistics(options?: RequestOptions): APIPromise<SeekerNotificationsAPI.ResultNotificationStats> {
    return this._client.get('/api/v1/enterprise/notifications/stats', options);
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
  export { type NotificationListParams as NotificationListParams };
}
