// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssistantSettingsAPI from '../../../v1/seeker/preferences/assistant-settings';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * 企业资质审核、职位信息审核、异常简历审核等接口
 */
export class Batch extends APIResource {
  /**
   * 批量通过企业资质审核
   */
  approve(
    body: BatchApproveParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/admin/audit/enterprises/batch/approve', { body, ...options });
  }
}

export interface BatchApproveParams {
  /**
   * ID 列表
   */
  ids: Array<number>;
}

export declare namespace Batch {
  export { type BatchApproveParams as BatchApproveParams };
}
