// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessagesAPI from '../../v1/seeker/ai-assistant/messages';
import * as AssistantSettingsAPI from '../../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ChangeRequests extends APIResource {
  /**
   * 获取指定申请详情
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get(path`/api/admin/enterprises/change-requests/${id}`, options);
  }

  /**
   * 分页获取企业信息变更申请
   */
  list(
    query: ChangeRequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.ResultPageResultMapStringObject> {
    return this._client.get('/api/admin/enterprises/change-requests', { query, ...options });
  }

  /**
   * 审批通过后会更新企业信息
   */
  approve(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/admin/enterprises/change-requests/${id}/approve`, options);
  }

  /**
   * 审批驳回企业信息变更申请
   */
  reject(
    id: number,
    body: ChangeRequestRejectParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/admin/enterprises/change-requests/${id}/reject`, { body, ...options });
  }
}

/**
 * 驳回请求
 */
export interface AuditReject {
  /**
   * 驳回原因
   */
  reason: string;
}

export interface ChangeRequestListParams {
  /**
   * 关键词: 企业名称
   */
  keyword?: string;

  page?: number;

  pageSize?: number;

  /**
   * 状态: pending/approved/rejected/all
   */
  status?: string;
}

export interface ChangeRequestRejectParams {
  /**
   * 驳回原因
   */
  reason: string;
}

export declare namespace ChangeRequests {
  export {
    type AuditReject as AuditReject,
    type ChangeRequestListParams as ChangeRequestListParams,
    type ChangeRequestRejectParams as ChangeRequestRejectParams,
  };
}
