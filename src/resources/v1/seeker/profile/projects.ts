// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WorkExperienceAPI from './work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Projects extends APIResource {
  /**
   * 添加新的项目经历
   *
   * @example
   * ```ts
   * const resultProjectExperience =
   *   await client.v1.seeker.profile.projects.create({
   *     projectName: 'projectName',
   *     role: 'role',
   *     startDate: '7321-69',
   *   });
   * ```
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ResultProjectExperience> {
    return this._client.post('/api/v1/seeker/profile/projects', { body, ...options });
  }

  /**
   * 更新指定项目经历
   *
   * @example
   * ```ts
   * const resultProjectExperience =
   *   await client.v1.seeker.profile.projects.update(0, {
   *     projectName: 'projectName',
   *     role: 'role',
   *     startDate: '7321-69',
   *   });
   * ```
   */
  update(
    id: number,
    body: ProjectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResultProjectExperience> {
    return this._client.put(path`/api/v1/seeker/profile/projects/${id}`, { body, ...options });
  }

  /**
   * 获取当前求职者的所有项目经历
   *
   * @example
   * ```ts
   * const projects =
   *   await client.v1.seeker.profile.projects.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ProjectListResponse> {
    return this._client.get('/api/v1/seeker/profile/projects', options);
  }

  /**
   * 删除指定项目经历
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.profile.projects.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/seeker/profile/projects/${id}`, options);
  }
}

/**
 * 项目经历请求
 */
export interface ProjectExperienceRequest {
  /**
   * 项目名称
   */
  projectName: string;

  /**
   * 担任角色
   */
  role: string;

  /**
   * 开始日期
   */
  startDate: string;

  /**
   * 项目描述
   */
  description?: string;

  /**
   * 结束日期
   */
  endDate?: string;
}

/**
 * 项目经历响应
 */
export interface ProjectExperienceResponse {
  /**
   * ID
   */
  id?: number;

  /**
   * 创建时间
   */
  createdAt?: string;

  /**
   * 项目描述
   */
  description?: string;

  /**
   * 结束日期
   */
  endDate?: string;

  /**
   * 项目名称
   */
  projectName?: string;

  /**
   * 担任角色
   */
  role?: string;

  /**
   * 开始日期
   */
  startDate?: string;
}

/**
 * 统一响应包装类
 */
export interface ResultProjectExperience {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 项目经历响应
   */
  data?: ProjectExperienceResponse;

  /**
   * 响应消息
   */
  message?: string;
}

/**
 * 统一响应包装类
 */
export interface ProjectListResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: Array<ProjectExperienceResponse>;

  /**
   * 响应消息
   */
  message?: string;
}

export interface ProjectCreateParams {
  /**
   * 项目名称
   */
  projectName: string;

  /**
   * 担任角色
   */
  role: string;

  /**
   * 开始日期
   */
  startDate: string;

  /**
   * 项目描述
   */
  description?: string;

  /**
   * 结束日期
   */
  endDate?: string;
}

export interface ProjectUpdateParams {
  /**
   * 项目名称
   */
  projectName: string;

  /**
   * 担任角色
   */
  role: string;

  /**
   * 开始日期
   */
  startDate: string;

  /**
   * 项目描述
   */
  description?: string;

  /**
   * 结束日期
   */
  endDate?: string;
}

export declare namespace Projects {
  export {
    type ProjectExperienceRequest as ProjectExperienceRequest,
    type ProjectExperienceResponse as ProjectExperienceResponse,
    type ResultProjectExperience as ResultProjectExperience,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
  };
}
