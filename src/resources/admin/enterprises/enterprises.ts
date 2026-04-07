// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AdminTransferRequestsAPI from './admin-transfer-requests';
import {
  AdminTransferRequestListParams,
  AdminTransferRequestRejectParams,
  AdminTransferRequests,
} from './admin-transfer-requests';
import * as ChangeRequestsAPI from './change-requests';
import {
  AuditReject,
  ChangeRequestListParams,
  ChangeRequestRejectParams,
  ChangeRequests,
} from './change-requests';
import * as MessagesAPI from '../../v1/seeker/ai-assistant/messages';
import * as AssistantSettingsAPI from '../../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Enterprises extends APIResource {
  changeRequests: ChangeRequestsAPI.ChangeRequests = new ChangeRequestsAPI.ChangeRequests(this._client);
  adminTransferRequests: AdminTransferRequestsAPI.AdminTransferRequests =
    new AdminTransferRequestsAPI.AdminTransferRequests(this._client);

  /**
   * 获取指定企业的详细信息
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get(path`/api/admin/enterprises/${id}`, options);
  }

  /**
   * 分页获取平台所有企业列表
   */
  list(
    query: EnterpriseListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.ResultPageResultMapStringObject> {
    return this._client.get('/api/admin/enterprises', { query, ...options });
  }

  /**
   * 禁用指定企业
   */
  disable(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/admin/enterprises/${id}/disable`, options);
  }

  /**
   * 启用指定企业
   */
  enable(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/admin/enterprises/${id}/enable`, options);
  }
}

export interface EnterpriseListParams {
  /**
   * 行业筛选
   */
  industry?: string;

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
   * 规模筛选
   */
  scale?: string;

  /**
   * 状态筛选
   */
  status?: string;
}

Enterprises.ChangeRequests = ChangeRequests;
Enterprises.AdminTransferRequests = AdminTransferRequests;

export declare namespace Enterprises {
  export { type EnterpriseListParams as EnterpriseListParams };

  export {
    ChangeRequests as ChangeRequests,
    type AuditReject as AuditReject,
    type ChangeRequestListParams as ChangeRequestListParams,
    type ChangeRequestRejectParams as ChangeRequestRejectParams,
  };

  export {
    AdminTransferRequests as AdminTransferRequests,
    type AdminTransferRequestListParams as AdminTransferRequestListParams,
    type AdminTransferRequestRejectParams as AdminTransferRequestRejectParams,
  };
}
