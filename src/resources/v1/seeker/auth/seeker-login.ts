// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TokenAPI from './token';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class SeekerLogin extends APIResource {
  /**
   * 使用手机号和密码进行登录
   *
   * @example
   * ```ts
   * const resultLogin =
   *   await client.v1.seeker.auth.seekerLogin.create({
   *     password: 'password123',
   *     phone: '13800138000',
   *   });
   * ```
   */
  create(body: SeekerLoginCreateParams, options?: RequestOptions): APIPromise<TokenAPI.ResultLogin> {
    return this._client.post('/api/v1/seeker/auth/login', { body, ...options });
  }

  /**
   * 使用手机号和短信验证码进行登录
   *
   * @example
   * ```ts
   * const resultLogin =
   *   await client.v1.seeker.auth.seekerLogin.sms({
   *     password: 'password123',
   *     phone: '13800138000',
   *   });
   * ```
   */
  sms(body: SeekerLoginSMSParams, options?: RequestOptions): APIPromise<TokenAPI.ResultLogin> {
    return this._client.post('/api/v1/seeker/auth/login/sms', { body, ...options });
  }
}

export interface SeekerLoginCreateParams {
  /**
   * 密码（短信登录时传验证码）
   */
  password: string;

  /**
   * 手机号
   */
  phone: string;
}

export interface SeekerLoginSMSParams {
  /**
   * 密码（短信登录时传验证码）
   */
  password: string;

  /**
   * 手机号
   */
  phone: string;
}

export declare namespace SeekerLogin {
  export {
    type SeekerLoginCreateParams as SeekerLoginCreateParams,
    type SeekerLoginSMSParams as SeekerLoginSMSParams,
  };
}
