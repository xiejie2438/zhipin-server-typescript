// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TokenAPI from '../../seeker/auth/token';
import * as AssistantSettingsAPI from '../../seeker/preferences/assistant-settings';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class SMS extends APIResource {
  /**
   * 兼容 /sms/login 路径
   *
   * @example
   * ```ts
   * const resultLogin =
   *   await client.v1.enterprise.auth.sms.login({
   *     password: 'password123',
   *     phone: '13800138000',
   *   });
   * ```
   */
  login(body: SMSLoginParams, options?: RequestOptions): APIPromise<TokenAPI.ResultLogin> {
    return this._client.post('/api/v1/enterprise/auth/sms/login', { body, ...options });
  }

  /**
   * 发送短信验证码到指定手机号
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.enterprise.auth.sms.send({
   *     phone: '13800138000',
   *     type: 'login,register,reset_password',
   *   });
   * ```
   */
  send(
    body: SMSSendParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/v1/enterprise/auth/sms/send', { body, ...options });
  }
}

export interface SMSLoginParams {
  /**
   * 密码（短信登录时传验证码）
   */
  password: string;

  /**
   * 手机号
   */
  phone: string;
}

export interface SMSSendParams {
  /**
   * 手机号
   */
  phone: string;

  /**
   * 验证码类型
   */
  type: 'login,register,reset_password';
}

export declare namespace SMS {
  export { type SMSLoginParams as SMSLoginParams, type SMSSendParams as SMSSendParams };
}
