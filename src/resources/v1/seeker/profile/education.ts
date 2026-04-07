// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WorkExperienceAPI from './work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Education extends APIResource {
  /**
   * 添加新的教育经历
   *
   * @example
   * ```ts
   * const resultEducation =
   *   await client.v1.seeker.profile.education.create({
   *     degree: 'degree',
   *     major: 'major',
   *     school: 'school',
   *     startDate: '7321-69',
   *   });
   * ```
   */
  create(body: EducationCreateParams, options?: RequestOptions): APIPromise<ResultEducation> {
    return this._client.post('/api/v1/seeker/profile/education', { body, ...options });
  }

  /**
   * 更新指定教育经历
   *
   * @example
   * ```ts
   * const resultEducation =
   *   await client.v1.seeker.profile.education.update(0, {
   *     degree: 'degree',
   *     major: 'major',
   *     school: 'school',
   *     startDate: '7321-69',
   *   });
   * ```
   */
  update(id: number, body: EducationUpdateParams, options?: RequestOptions): APIPromise<ResultEducation> {
    return this._client.put(path`/api/v1/seeker/profile/education/${id}`, { body, ...options });
  }

  /**
   * 获取当前求职者的所有教育经历
   *
   * @example
   * ```ts
   * const educations =
   *   await client.v1.seeker.profile.education.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<EducationListResponse> {
    return this._client.get('/api/v1/seeker/profile/education', options);
  }

  /**
   * 删除指定教育经历
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.profile.education.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/seeker/profile/education/${id}`, options);
  }
}

/**
 * 教育经历请求
 */
export interface EducationRequest {
  /**
   * 学历
   */
  degree: string;

  /**
   * 专业
   */
  major: string;

  /**
   * 学校名称
   */
  school: string;

  /**
   * 开始日期
   */
  startDate: string;

  /**
   * 结束日期
   */
  endDate?: string;

  /**
   * 学习类型
   */
  studyType?: string;
}

/**
 * 教育经历响应
 */
export interface EducationResponse {
  /**
   * ID
   */
  id?: number;

  /**
   * 创建时间
   */
  createdAt?: string;

  /**
   * 学历
   */
  degree?: string;

  /**
   * 结束日期
   */
  endDate?: string;

  /**
   * 专业
   */
  major?: string;

  /**
   * 学校名称
   */
  school?: string;

  /**
   * 开始日期
   */
  startDate?: string;

  /**
   * 学习类型
   */
  studyType?: string;
}

/**
 * 统一响应包装类
 */
export interface ResultEducation {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 教育经历响应
   */
  data?: EducationResponse;

  /**
   * 响应消息
   */
  message?: string;
}

/**
 * 统一响应包装类
 */
export interface EducationListResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: Array<EducationResponse>;

  /**
   * 响应消息
   */
  message?: string;
}

export interface EducationCreateParams {
  /**
   * 学历
   */
  degree: string;

  /**
   * 专业
   */
  major: string;

  /**
   * 学校名称
   */
  school: string;

  /**
   * 开始日期
   */
  startDate: string;

  /**
   * 结束日期
   */
  endDate?: string;

  /**
   * 学习类型
   */
  studyType?: string;
}

export interface EducationUpdateParams {
  /**
   * 学历
   */
  degree: string;

  /**
   * 专业
   */
  major: string;

  /**
   * 学校名称
   */
  school: string;

  /**
   * 开始日期
   */
  startDate: string;

  /**
   * 结束日期
   */
  endDate?: string;

  /**
   * 学习类型
   */
  studyType?: string;
}

export declare namespace Education {
  export {
    type EducationRequest as EducationRequest,
    type EducationResponse as EducationResponse,
    type ResultEducation as ResultEducation,
    type EducationListResponse as EducationListResponse,
    type EducationCreateParams as EducationCreateParams,
    type EducationUpdateParams as EducationUpdateParams,
  };
}
