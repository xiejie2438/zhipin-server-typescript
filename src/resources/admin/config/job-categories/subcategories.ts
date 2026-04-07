// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BannersAPI from '../banners';
import * as AssistantSettingsAPI from '../../../v1/seeker/preferences/assistant-settings';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * 字典管理、省市配置、违禁词、公告、Banner等配置接口
 */
export class Subcategories extends APIResource {
  /**
   * 新增职位小类
   */
  create(
    categoryID: number,
    params: SubcategoryCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    const { body } = params;
    return this._client.post(path`/api/admin/config/job-categories/${categoryID}/subcategories`, {
      body: body,
      ...options,
    });
  }

  /**
   * 获取职位小类列表
   */
  list(categoryID: number, options?: RequestOptions): APIPromise<BannersAPI.ResultListBanners> {
    return this._client.get(path`/api/admin/config/job-categories/${categoryID}/subcategories`, options);
  }
}

export interface SubcategoryCreateParams {
  body: { [key: string]: unknown };
}

export declare namespace Subcategories {
  export { type SubcategoryCreateParams as SubcategoryCreateParams };
}
