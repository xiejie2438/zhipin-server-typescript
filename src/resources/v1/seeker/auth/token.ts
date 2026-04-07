// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SchedulesAPI from '../../enterprise/schedules';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Token extends APIResource {
  /**
   * 使用刷新令牌获取新的访问令牌
   *
   * @example
   * ```ts
   * const resultLogin =
   *   await client.v1.seeker.auth.token.refresh({
   *     refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
   *   });
   * ```
   */
  refresh(body: TokenRefreshParams, options?: RequestOptions): APIPromise<ResultLogin> {
    return this._client.post('/api/v1/seeker/auth/token/refresh', { body, ...options });
  }
}

/**
 * 登录响应
 */
export interface LoginResponse {
  /**
   * 访问令牌
   */
  accessToken?: string;

  /**
   * 访问令牌过期时间(秒)
   */
  expiresIn?: number;

  /**
   * 刷新令牌
   */
  refreshToken?: string;

  /**
   * 用户信息
   */
  user?: SchedulesAPI.UserInfo;
}

/**
 * 刷新 Token 请求参数
 */
export interface RefreshTokenRequest {
  /**
   * 刷新令牌
   */
  refreshToken: string;
}

/**
 * 统一响应包装类
 */
export interface ResultLogin {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 登录响应
   */
  data?: LoginResponse;

  /**
   * 响应消息
   */
  message?: string;
}

export interface TokenRefreshParams {
  /**
   * 刷新令牌
   */
  refreshToken: string;
}

export declare namespace Token {
  export {
    type LoginResponse as LoginResponse,
    type RefreshTokenRequest as RefreshTokenRequest,
    type ResultLogin as ResultLogin,
    type TokenRefreshParams as TokenRefreshParams,
  };
}
