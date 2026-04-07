// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BatchAPI from './batch';
import { Batch, BatchApproveParams } from './batch';
import * as MessagesAPI from '../../../v1/seeker/ai-assistant/messages';
import * as AssistantSettingsAPI from '../../../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * 企业资质审核、职位信息审核、异常简历审核等接口
 */
export class Enterprises extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * 获取指定企业的审核详情
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get(path`/api/admin/audit/enterprises/${id}`, options);
  }

  /**
   * 分页获取待审核/已审核的企业列表
   */
  list(
    query: EnterpriseListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.ResultPageResultMapStringObject> {
    return this._client.get('/api/admin/audit/enterprises', { query, ...options });
  }

  /**
   * 通过指定企业的资质审核
   */
  approve(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/admin/audit/enterprises/${id}/approve`, options);
  }

  /**
   * 驳回指定企业的资质审核
   */
  reject(
    id: number,
    body: EnterpriseRejectParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/admin/audit/enterprises/${id}/reject`, { body, ...options });
  }
}

export interface EnterpriseListParams {
  /**
   * 搜索关键词
   */
  keyword?: string;

  /**
   * 页码，默认 1
   */
  page?: number;

  /**
   * 每页条数，默认 10
   */
  pageSize?: number;

  /**
   * 状态: pending/approved/rejected/all
   */
  status?: string;
}

export interface EnterpriseRejectParams {
  /**
   * 驳回原因
   */
  reason: string;
}

Enterprises.Batch = Batch;

export declare namespace Enterprises {
  export {
    type EnterpriseListParams as EnterpriseListParams,
    type EnterpriseRejectParams as EnterpriseRejectParams,
  };

  export { Batch as Batch, type BatchApproveParams as BatchApproveParams };
}
