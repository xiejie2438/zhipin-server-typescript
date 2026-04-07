// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from '../v1/seeker/ai-assistant/messages';
import * as AssistantSettingsAPI from '../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../v1/seeker/profile/work-experience';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Notifications extends APIResource {
  /**
   * 获取通知列表
   */
  list(
    query: NotificationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.ResultPageResultMapStringObject> {
    return this._client.get('/api/admin/notifications', { query, ...options });
  }

  /**
   * 全部标记已读
   */
  markAllAsRead(options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/admin/notifications/read-all', options);
  }

  /**
   * 标记通知已读
   */
  markAsRead(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/admin/notifications/${id}/read`, options);
  }
}

export interface NotificationListParams {
  page?: number;

  page_size?: number;

  status?: string;
}

export declare namespace Notifications {
  export { type NotificationListParams as NotificationListParams };
}
