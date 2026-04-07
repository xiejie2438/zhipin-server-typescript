// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BannersAPI from '../banners';
import * as SubcategoriesAPI from './subcategories';
import { Subcategories, SubcategoryCreateParams } from './subcategories';
import * as AssistantSettingsAPI from '../../../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * 字典管理、省市配置、违禁词、公告、Banner等配置接口
 */
export class JobCategories extends APIResource {
  subcategories: SubcategoriesAPI.Subcategories = new SubcategoriesAPI.Subcategories(this._client);

  /**
   * 修改职位大类
   */
  update(
    id: number,
    params: JobCategoryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    const { body } = params;
    return this._client.put(path`/api/admin/config/job-categories/${id}`, { body: body, ...options });
  }

  /**
   * 删除职位大类
   */
  delete(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/admin/config/job-categories/${id}`, options);
  }

  /**
   * 新增职位大类
   */
  jobCategories(
    params: JobCategoryJobCategoriesParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    const { body } = params;
    return this._client.post('/api/admin/config/job-categories', { body: body, ...options });
  }

  /**
   * 获取职位大类列表
   */
  retrieveJobCategories(
    query: JobCategoryRetrieveJobCategoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BannersAPI.ResultListBanners> {
    return this._client.get('/api/admin/config/job-categories', { query, ...options });
  }
}

export interface JobCategoryUpdateParams {
  body: { [key: string]: unknown };
}

export interface JobCategoryJobCategoriesParams {
  body: { [key: string]: unknown };
}

export interface JobCategoryRetrieveJobCategoriesParams {
  keyword?: string;
}

JobCategories.Subcategories = Subcategories;

export declare namespace JobCategories {
  export {
    type JobCategoryUpdateParams as JobCategoryUpdateParams,
    type JobCategoryJobCategoriesParams as JobCategoryJobCategoriesParams,
    type JobCategoryRetrieveJobCategoriesParams as JobCategoryRetrieveJobCategoriesParams,
  };

  export { Subcategories as Subcategories, type SubcategoryCreateParams as SubcategoryCreateParams };
}
