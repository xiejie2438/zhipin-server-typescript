// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class WorkExperience extends APIResource {
  /**
   * 更新指定工作经历
   *
   * @example
   * ```ts
   * const resultWorkExperience =
   *   await client.v1.seeker.profile.workExperience.update(0, {
   *     company: 'company',
   *     position: 'position',
   *     startDate: '7321-69',
   *   });
   * ```
   */
  update(
    id: number,
    body: WorkExperienceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResultWorkExperience> {
    return this._client.put(path`/api/v1/seeker/profile/work-experience/${id}`, { body, ...options });
  }

  /**
   * 删除指定工作经历
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.profile.workExperience.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<ResultVoid> {
    return this._client.delete(path`/api/v1/seeker/profile/work-experience/${id}`, options);
  }

  /**
   * 获取当前求职者的所有工作经历
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.seeker.profile.workExperience.retrieveWorkExperience();
   * ```
   */
  retrieveWorkExperience(options?: RequestOptions): APIPromise<WorkExperienceRetrieveWorkExperienceResponse> {
    return this._client.get('/api/v1/seeker/profile/work-experience', options);
  }

  /**
   * 添加新的工作经历
   *
   * @example
   * ```ts
   * const resultWorkExperience =
   *   await client.v1.seeker.profile.workExperience.workExperience(
   *     {
   *       company: 'company',
   *       position: 'position',
   *       startDate: '7321-69',
   *     },
   *   );
   * ```
   */
  workExperience(
    body: WorkExperienceWorkExperienceParams,
    options?: RequestOptions,
  ): APIPromise<ResultWorkExperience> {
    return this._client.post('/api/v1/seeker/profile/work-experience', { body, ...options });
  }
}

/**
 * 统一响应包装类
 */
export interface ResultVoid {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: unknown;

  /**
   * 响应消息
   */
  message?: string;
}

/**
 * 统一响应包装类
 */
export interface ResultWorkExperience {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 工作经历响应
   */
  data?: WorkExperienceResponse;

  /**
   * 响应消息
   */
  message?: string;
}

/**
 * 工作经历请求
 */
export interface WorkExperienceRequest {
  /**
   * 公司名称
   */
  company: string;

  /**
   * 职位
   */
  position: string;

  /**
   * 开始日期
   */
  startDate: string;

  /**
   * 工作描述
   */
  description?: string;

  /**
   * 结束日期
   */
  endDate?: string;
}

/**
 * 工作经历响应
 */
export interface WorkExperienceResponse {
  /**
   * ID
   */
  id?: number;

  /**
   * 公司名称
   */
  company?: string;

  /**
   * 创建时间
   */
  createdAt?: string;

  /**
   * 工作描述
   */
  description?: string;

  /**
   * 结束日期
   */
  endDate?: string;

  /**
   * 职位
   */
  position?: string;

  /**
   * 开始日期
   */
  startDate?: string;
}

/**
 * 统一响应包装类
 */
export interface WorkExperienceRetrieveWorkExperienceResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: Array<WorkExperienceResponse>;

  /**
   * 响应消息
   */
  message?: string;
}

export interface WorkExperienceUpdateParams {
  /**
   * 公司名称
   */
  company: string;

  /**
   * 职位
   */
  position: string;

  /**
   * 开始日期
   */
  startDate: string;

  /**
   * 工作描述
   */
  description?: string;

  /**
   * 结束日期
   */
  endDate?: string;
}

export interface WorkExperienceWorkExperienceParams {
  /**
   * 公司名称
   */
  company: string;

  /**
   * 职位
   */
  position: string;

  /**
   * 开始日期
   */
  startDate: string;

  /**
   * 工作描述
   */
  description?: string;

  /**
   * 结束日期
   */
  endDate?: string;
}

export declare namespace WorkExperience {
  export {
    type ResultVoid as ResultVoid,
    type ResultWorkExperience as ResultWorkExperience,
    type WorkExperienceRequest as WorkExperienceRequest,
    type WorkExperienceResponse as WorkExperienceResponse,
    type WorkExperienceRetrieveWorkExperienceResponse as WorkExperienceRetrieveWorkExperienceResponse,
    type WorkExperienceUpdateParams as WorkExperienceUpdateParams,
    type WorkExperienceWorkExperienceParams as WorkExperienceWorkExperienceParams,
  };
}
