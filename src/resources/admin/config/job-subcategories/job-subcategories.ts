// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TypesAPI from './types';
import { TypeCreateParams, Types } from './types';
import * as WorkExperienceAPI from '../../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * 字典管理、省市配置、违禁词、公告、Banner等配置接口
 */
export class JobSubcategories extends APIResource {
  types: TypesAPI.Types = new TypesAPI.Types(this._client);

  /**
   * 修改职位小类
   */
  update(
    id: number,
    params: JobSubcategoryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    const { body } = params;
    return this._client.put(path`/api/admin/config/job-subcategories/${id}`, { body: body, ...options });
  }

  /**
   * 删除职位小类
   */
  delete(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/admin/config/job-subcategories/${id}`, options);
  }
}

export interface JobSubcategoryUpdateParams {
  body: { [key: string]: unknown };
}

JobSubcategories.Types = Types;

export declare namespace JobSubcategories {
  export { type JobSubcategoryUpdateParams as JobSubcategoryUpdateParams };

  export { Types as Types, type TypeCreateParams as TypeCreateParams };
}
