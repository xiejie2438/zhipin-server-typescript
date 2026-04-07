// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TokenAPI from '../../seeker/auth/token';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Login extends APIResource {
  /**
   * 使用手机号和短信验证码进行登录
   *
   * @example
   * ```ts
   * const resultLogin =
   *   await client.v1.enterprise.auth.login.sms({
   *     password: 'password123',
   *     phone: '13800138000',
   *   });
   * ```
   */
  sms(body: LoginSMSParams, options?: RequestOptions): APIPromise<TokenAPI.ResultLogin> {
    return this._client.post('/api/v1/enterprise/auth/login/sms', { body, ...options });
  }
}

export interface LoginSMSParams {
  /**
   * 密码（短信登录时传验证码）
   */
  password: string;

  /**
   * 手机号
   */
  phone: string;
}

export declare namespace Login {
  export { type LoginSMSParams as LoginSMSParams };
}
