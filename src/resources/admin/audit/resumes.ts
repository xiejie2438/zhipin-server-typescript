// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessagesAPI from '../../v1/seeker/ai-assistant/messages';
import * as AssistantSettingsAPI from '../../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 企业资质审核、职位信息审核、异常简历审核等接口
 */
export class Resumes extends APIResource {
  /**
   * 获取指定异常简历的详情
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get(path`/api/admin/audit/resumes/${id}`, options);
  }

  /**
   * 分页获取异常简历列表
   */
  list(
    query: ResumeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.ResultPageResultMapStringObject> {
    return this._client.get('/api/admin/audit/resumes', { query, ...options });
  }

  /**
   * 通过异常简历审核
   */
  approve(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/admin/audit/resumes/${id}/approve`, options);
  }

  /**
   * 驳回异常简历
   */
  reject(
    id: number,
    body: ResumeRejectParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/admin/audit/resumes/${id}/reject`, { body, ...options });
  }
}

export interface ResumeListParams {
  /**
   * 异常类型
   */
  anomalyType?: string;

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
   * 状态: pending/approved/rejected
   */
  status?: string;
}

export interface ResumeRejectParams {
  /**
   * 驳回原因
   */
  reason: string;
}

export declare namespace Resumes {
  export { type ResumeListParams as ResumeListParams, type ResumeRejectParams as ResumeRejectParams };
}
