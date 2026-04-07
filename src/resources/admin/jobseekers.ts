// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from '../v1/seeker/ai-assistant/messages';
import * as AssistantSettingsAPI from '../v1/seeker/preferences/assistant-settings';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Jobseekers extends APIResource {
  /**
   * 获取求职者详情
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get(path`/api/admin/jobseekers/${id}`, options);
  }

  /**
   * 获取求职者列表
   */
  list(
    query: JobseekerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.ResultPageResultMapStringObject> {
    return this._client.get('/api/admin/jobseekers', { query, ...options });
  }
}

export interface JobseekerListParams {
  education?: string;

  job_status?: string;

  keyword?: string;

  page?: number;

  page_size?: number;

  work_status?: string;
}

export declare namespace Jobseekers {
  export { type JobseekerListParams as JobseekerListParams };
}
