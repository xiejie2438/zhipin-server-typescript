// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MeAPI from '../../../v1/seeker/account/me';
import * as WorkExperienceAPI from '../../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * 字典管理、省市配置、违禁词、公告、Banner等配置接口
 */
export class Banners extends APIResource {
  /**
   * 更新 Banner 配置（display）
   */
  create(body: BannerCreateParams, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.put('/api/admin/config/display/banners', { body, ...options });
  }

  /**
   * 上传 Banner 图片（display）
   */
  upload(body: BannerUploadParams, options?: RequestOptions): APIPromise<MeAPI.ResultMapStringString> {
    return this._client.post('/api/admin/config/display/banners/upload', { body, ...options });
  }
}

/**
 * Banner 配置请求
 */
export interface BannerUpdate {
  /**
   * banner 列表
   */
  banners: Array<{ [key: string]: unknown }>;
}

export interface BannerCreateParams {
  /**
   * banner 列表
   */
  banners: Array<{ [key: string]: unknown }>;
}

export interface BannerUploadParams {
  file: Uploadable;
}

export declare namespace Banners {
  export {
    type BannerUpdate as BannerUpdate,
    type BannerCreateParams as BannerCreateParams,
    type BannerUploadParams as BannerUploadParams,
  };
}
