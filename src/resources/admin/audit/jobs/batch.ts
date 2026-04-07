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
   * 批量通过职位审核
   */
  approve(
    body: BatchApproveParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/admin/audit/jobs/batch/approve', { body, ...options });
  }

  /**
   * 批量驳回职位审核
   */
  reject(
    body: BatchRejectParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/admin/audit/jobs/batch/reject', { body, ...options });
  }
}

/**
 * 批量审核请求
 */
export interface AuditBatch {
  /**
   * ID 列表
   */
  ids: Array<number>;
}

export interface BatchApproveParams {
  /**
   * ID 列表
   */
  ids: Array<number>;
}

export interface BatchRejectParams {
  /**
   * ID 列表
   */
  ids: Array<number>;

  /**
   * 驳回原因
   */
  reason: string;
}

export declare namespace Batch {
  export {
    type AuditBatch as AuditBatch,
    type BatchApproveParams as BatchApproveParams,
    type BatchRejectParams as BatchRejectParams,
  };
}
