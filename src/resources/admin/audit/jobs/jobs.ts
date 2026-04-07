// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BatchAPI from './batch';
import { AuditBatch, Batch, BatchApproveParams, BatchRejectParams } from './batch';
import * as MessagesAPI from '../../../v1/seeker/ai-assistant/messages';
import * as AssistantSettingsAPI from '../../../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * 企业资质审核、职位信息审核、异常简历审核等接口
 */
export class Jobs extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * 获取指定职位的审核详情
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get(path`/api/admin/audit/jobs/${id}`, options);
  }

  /**
   * 分页获取待审核/已审核的职位列表
   */
  list(
    query: JobListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.ResultPageResultMapStringObject> {
    return this._client.get('/api/admin/audit/jobs', { query, ...options });
  }

  /**
   * 通过指定职位的审核
   */
  approve(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/admin/audit/jobs/${id}/approve`, options);
  }

  /**
   * 驳回指定职位的审核
   */
  reject(
    id: number,
    body: JobRejectParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/admin/audit/jobs/${id}/reject`, { body, ...options });
  }
}

export interface JobListParams {
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

export interface JobRejectParams {
  /**
   * 驳回原因
   */
  reason: string;
}

Jobs.Batch = Batch;

export declare namespace Jobs {
  export { type JobListParams as JobListParams, type JobRejectParams as JobRejectParams };

  export {
    Batch as Batch,
    type AuditBatch as AuditBatch,
    type BatchApproveParams as BatchApproveParams,
    type BatchRejectParams as BatchRejectParams,
  };
}
