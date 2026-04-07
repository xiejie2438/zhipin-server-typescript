// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MeAPI from '../../v1/seeker/account/me';
import * as WorkExperienceAPI from '../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';

/**
 * 字典管理、省市配置、违禁词、公告、Banner等配置接口
 */
export class Banners extends APIResource {
  /**
   * 更新 Banner 配置
   */
  create(body: BannerCreateParams, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.put('/api/admin/config/banners', { body, ...options });
  }

  /**
   * 获取 Banner 配置列表
   */
  list(options?: RequestOptions): APIPromise<ResultListBanners> {
    return this._client.get('/api/admin/config/banners', options);
  }

  /**
   * 上传 Banner 图片
   */
  upload(body: BannerUploadParams, options?: RequestOptions): APIPromise<MeAPI.ResultMapStringString> {
    return this._client.post('/api/admin/config/banners/upload', { body, ...options });
  }
}

/**
 * 统一响应包装类
 */
export interface ResultListBanners {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: Array<{ [key: string]: unknown }>;

  /**
   * 响应消息
   */
  message?: string;
}

export interface BannerCreateParams {
  /**
   * banner 列表
   */
  banners: Array<{ [key: string]: unknown }>;
}

export interface BannerUploadParams {
  /**
   * 图片文件
   */
  file: Uploadable;
}

export declare namespace Banners {
  export {
    type ResultListBanners as ResultListBanners,
    type BannerCreateParams as BannerCreateParams,
    type BannerUploadParams as BannerUploadParams,
  };
}
