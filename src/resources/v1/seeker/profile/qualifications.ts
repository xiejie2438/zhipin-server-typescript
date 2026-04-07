// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WorkExperienceAPI from './work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Qualifications extends APIResource {
  /**
   * 添加新的资格证书
   *
   * @example
   * ```ts
   * const qualification =
   *   await client.v1.seeker.profile.qualifications.create({
   *     name: 'name',
   *   });
   * ```
   */
  create(body: QualificationCreateParams, options?: RequestOptions): APIPromise<QualificationCreateResponse> {
    return this._client.post('/api/v1/seeker/profile/qualifications', { body, ...options });
  }

  /**
   * 获取当前求职者的所有资格证书
   *
   * @example
   * ```ts
   * const qualifications =
   *   await client.v1.seeker.profile.qualifications.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<QualificationListResponse> {
    return this._client.get('/api/v1/seeker/profile/qualifications', options);
  }

  /**
   * 删除指定资格证书
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.profile.qualifications.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/seeker/profile/qualifications/${id}`, options);
  }
}

/**
 * 资格证书响应
 */
export interface QualificationResponse {
  /**
   * ID
   */
  id?: number;

  /**
   * 创建时间
   */
  createdAt?: string;

  /**
   * 获得时间
   */
  issueDate?: string;

  /**
   * 证书名称
   */
  name?: string;
}

/**
 * 统一响应包装类
 */
export interface QualificationCreateResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 资格证书响应
   */
  data?: QualificationResponse;

  /**
   * 响应消息
   */
  message?: string;
}

/**
 * 统一响应包装类
 */
export interface QualificationListResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: Array<QualificationResponse>;

  /**
   * 响应消息
   */
  message?: string;
}

export interface QualificationCreateParams {
  /**
   * 证书名称
   */
  name: string;

  /**
   * 获得时间
   */
  issueDate?: string;
}

export declare namespace Qualifications {
  export {
    type QualificationResponse as QualificationResponse,
    type QualificationCreateResponse as QualificationCreateResponse,
    type QualificationListResponse as QualificationListResponse,
    type QualificationCreateParams as QualificationCreateParams,
  };
}
