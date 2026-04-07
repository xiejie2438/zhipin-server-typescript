// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MeAPI from '../../seeker/account/me';
import * as AssistantSettingsAPI from '../../seeker/preferences/assistant-settings';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { RequestOptions } from '../../../../internal/request-options';

export class Current extends APIResource {
  /**
   * 获取当前登录用户所属企业的详细信息
   *
   * @example
   * ```ts
   * const resultCompanyInfo =
   *   await client.v1.enterprise.companies.current.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<ResultCompanyInfo> {
    return this._client.get('/api/v1/enterprise/companies/current', options);
  }

  /**
   * 更新当前企业的基本信息，需要管理员权限
   *
   * @example
   * ```ts
   * const resultCompanyInfo =
   *   await client.v1.enterprise.companies.current.update();
   * ```
   */
  update(body: CurrentUpdateParams, options?: RequestOptions): APIPromise<ResultCompanyInfo> {
    return this._client.put('/api/v1/enterprise/companies/current', { body, ...options });
  }

  /**
   * 上传企业营业执照图片
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.enterprise.companies.current.uploadBusinessLicense(
   *     { file: fs.createReadStream('path/to/file') },
   *   );
   * ```
   */
  uploadBusinessLicense(
    body: CurrentUploadBusinessLicenseParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/v1/enterprise/companies/current/business-license', { body, ...options });
  }

  /**
   * 上传企业 LOGO 图片，限制 2MB，仅支持图片格式
   *
   * @example
   * ```ts
   * const resultMapStringString =
   *   await client.v1.enterprise.companies.current.uploadLogo({
   *     file: fs.createReadStream('path/to/file'),
   *   });
   * ```
   */
  uploadLogo(
    body: CurrentUploadLogoParams,
    options?: RequestOptions,
  ): APIPromise<MeAPI.ResultMapStringString> {
    return this._client.post('/api/v1/enterprise/companies/current/logo', { body, ...options });
  }
}

/**
 * 企业信息响应
 */
export interface CompanyInfoResponse {
  /**
   * 企业 ID
   */
  id?: string;

  /**
   * 详细地址
   */
  address?: string;

  /**
   * 管理员 ID
   */
  adminId?: string;

  /**
   * 管理员姓名
   */
  adminName?: string;

  /**
   * 营业执照图片 URL
   */
  businessLicense?: string;

  /**
   * 城市
   */
  city?: string;

  /**
   * 创建时间
   */
  createdAt?: string;

  /**
   * 企业文化
   */
  culture?: string;

  /**
   * 企业简介
   */
  description?: string;

  /**
   * 区县
   */
  district?: string;

  /**
   * 所属行业
   */
  industry?: string;

  /**
   * 是否已认证
   */
  isVerified?: boolean;

  /**
   * 纬度
   */
  latitude?: string;

  /**
   * 企业 LOGO
   */
  logo?: string;

  /**
   * 经度
   */
  longitude?: string;

  /**
   * 企业全称
   */
  name?: string;

  /**
   * 企业性质
   */
  nature?: string;

  /**
   * 省份
   */
  province?: string;

  /**
   * 企业简称
   */
  shortName?: string;

  /**
   * 企业规模
   */
  size?: string;

  /**
   * 统一社会信用代码
   */
  unifiedCreditCode?: string;

  /**
   * 认证通过时间
   */
  verifiedAt?: string;

  /**
   * 认证失败原因
   */
  verifyRejectReason?: string;

  /**
   * 认证状态:0 待认证 1 已认证 2 认证失败
   */
  verifyStatus?: number;

  /**
   * 企业福利
   */
  welfare?: string;
}

/**
 * 统一响应包装类
 */
export interface ResultCompanyInfo {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 企业信息响应
   */
  data?: CompanyInfoResponse;

  /**
   * 响应消息
   */
  message?: string;
}

export interface CurrentUpdateParams {
  /**
   * 详细地址
   */
  address?: string;

  /**
   * 城市
   */
  city?: string;

  /**
   * 企业文化
   */
  culture?: string;

  /**
   * 企业简介
   */
  description?: string;

  /**
   * 区县
   */
  district?: string;

  /**
   * 所属行业
   */
  industry?: string;

  /**
   * 企业 LOGO URL
   */
  logo?: string;

  /**
   * 企业性质
   */
  nature?: string;

  /**
   * 省份
   */
  province?: string;

  /**
   * 企业简称
   */
  shortName?: string;

  /**
   * 企业规模
   */
  size?: string;

  /**
   * 企业福利(JSON 数组)
   */
  welfare?: string;
}

export interface CurrentUploadBusinessLicenseParams {
  /**
   * 营业执照图片文件
   */
  file: Uploadable;
}

export interface CurrentUploadLogoParams {
  /**
   * LOGO 图片文件
   */
  file: Uploadable;
}

export declare namespace Current {
  export {
    type CompanyInfoResponse as CompanyInfoResponse,
    type ResultCompanyInfo as ResultCompanyInfo,
    type CurrentUpdateParams as CurrentUpdateParams,
    type CurrentUploadBusinessLicenseParams as CurrentUploadBusinessLicenseParams,
    type CurrentUploadLogoParams as CurrentUploadLogoParams,
  };
}
