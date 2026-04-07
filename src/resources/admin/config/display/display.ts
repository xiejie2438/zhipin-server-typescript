// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BannersAPI from './banners';
import { BannerCreateParams, BannerUpdate, BannerUploadParams, Banners } from './banners';
import * as AssistantSettingsAPI from '../../../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * 字典管理、省市配置、违禁词、公告、Banner等配置接口
 */
export class Display extends APIResource {
  banners: BannersAPI.Banners = new BannersAPI.Banners(this._client);

  /**
   * 获取用户端展示配置
   */
  list(options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get('/api/admin/config/display', options);
  }

  /**
   * 更新功能入口配置
   */
  updateFeatures(
    params: DisplayUpdateFeaturesParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    const { body } = params;
    return this._client.put('/api/admin/config/display/features', { body: body, ...options });
  }

  /**
   * 更新热门推荐配置
   */
  updateHotPositions(
    params: DisplayUpdateHotPositionsParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    const { body } = params;
    return this._client.put('/api/admin/config/display/hot-positions', { body: body, ...options });
  }
}

export interface DisplayUpdateFeaturesParams {
  body: { [key: string]: unknown };
}

export interface DisplayUpdateHotPositionsParams {
  body: { [key: string]: unknown };
}

Display.Banners = Banners;

export declare namespace Display {
  export {
    type DisplayUpdateFeaturesParams as DisplayUpdateFeaturesParams,
    type DisplayUpdateHotPositionsParams as DisplayUpdateHotPositionsParams,
  };

  export {
    Banners as Banners,
    type BannerUpdate as BannerUpdate,
    type BannerCreateParams as BannerCreateParams,
    type BannerUploadParams as BannerUploadParams,
  };
}
