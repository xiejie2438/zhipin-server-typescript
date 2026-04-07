// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WorkExperienceAPI from '../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 字典管理、省市配置、违禁词、公告、Banner等配置接口
 */
export class JobTypes extends APIResource {
  /**
   * 修改职位类型
   */
  update(
    id: number,
    params: JobTypeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    const { body } = params;
    return this._client.put(path`/api/admin/config/job-types/${id}`, { body: body, ...options });
  }

  /**
   * 删除职位类型
   */
  delete(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/admin/config/job-types/${id}`, options);
  }
}

export interface JobTypeUpdateParams {
  body: { [key: string]: unknown };
}

export declare namespace JobTypes {
  export { type JobTypeUpdateParams as JobTypeUpdateParams };
}
