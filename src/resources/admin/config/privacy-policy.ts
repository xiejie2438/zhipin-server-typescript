// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssistantSettingsAPI from '../../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * 字典管理、省市配置、违禁词、公告、Banner等配置接口
 */
export class PrivacyPolicy extends APIResource {
  /**
   * 获取隐私政策内容
   */
  retrievePrivacyPolicy(options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get('/api/admin/config/privacy-policy', options);
  }

  /**
   * 更新隐私政策内容
   */
  updatePrivacyPolicy(
    body: PrivacyPolicyUpdatePrivacyPolicyParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.put('/api/admin/config/privacy-policy', { body, ...options });
  }
}

export interface PrivacyPolicyUpdatePrivacyPolicyParams {
  /**
   * 隐私政策内容
   */
  content: string;
}

export declare namespace PrivacyPolicy {
  export { type PrivacyPolicyUpdatePrivacyPolicyParams as PrivacyPolicyUpdatePrivacyPolicyParams };
}
