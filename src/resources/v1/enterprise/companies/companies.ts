// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CurrentAPI from './current';
import {
  Current,
  CurrentUpdateParams,
  CurrentUploadBusinessLicenseParams,
  CurrentUploadLogoParams,
  ResultCompanyInfo,
} from './current';
import * as AssistantSettingsAPI from '../../seeker/preferences/assistant-settings';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Companies extends APIResource {
  current: CurrentAPI.Current = new CurrentAPI.Current(this._client);

  /**
   * 申请将企业管理员权限转移给另一位成员，需要当前管理员权限
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.enterprise.companies.requestAdminTransfer(
   *     { newAdminId: 2 },
   *   );
   * ```
   */
  requestAdminTransfer(
    body: CompanyRequestAdminTransferParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/v1/enterprise/companies/admin-transfer-request', { body, ...options });
  }

  /**
   * 申请变更企业信息（如公司更名），需要管理员权限
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.enterprise.companies.requestChange({
   *     businessLicense: 'https://example.com/new-license.jpg',
   *     newCompanyName: '新公司名称',
   *   });
   * ```
   */
  requestChange(
    body: CompanyRequestChangeParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/v1/enterprise/companies/change-request', { body, ...options });
  }
}

export interface CompanyRequestAdminTransferParams {
  /**
   * 新管理员用户 ID
   */
  newAdminId: number;

  /**
   * 变更原因
   */
  reason?: string;
}

export interface CompanyRequestChangeParams {
  /**
   * 营业执照图片 URL
   */
  businessLicense: string;

  /**
   * 新公司名称
   */
  newCompanyName: string;

  /**
   * 变更原因
   */
  reason?: string;
}

Companies.Current = Current;

export declare namespace Companies {
  export {
    type CompanyRequestAdminTransferParams as CompanyRequestAdminTransferParams,
    type CompanyRequestChangeParams as CompanyRequestChangeParams,
  };

  export {
    Current as Current,
    type ResultCompanyInfo as ResultCompanyInfo,
    type CurrentUpdateParams as CurrentUpdateParams,
    type CurrentUploadBusinessLicenseParams as CurrentUploadBusinessLicenseParams,
    type CurrentUploadLogoParams as CurrentUploadLogoParams,
  };
}
