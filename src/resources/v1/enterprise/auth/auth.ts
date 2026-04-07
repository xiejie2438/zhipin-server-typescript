// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as LoginAPI from './login';
import { Login, LoginSMSParams } from './login';
import * as SMSAPI from './sms';
import { SMS, SMSLoginParams, SMSSendParams } from './sms';
import * as TokenAPI from './token';
import { Token, TokenRefreshParams } from './token';
import * as AuthTokenAPI from '../../seeker/auth/token';
import * as WorkExperienceAPI from '../../seeker/profile/work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Auth extends APIResource {
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  sms: SMSAPI.SMS = new SMSAPI.SMS(this._client);
  login: LoginAPI.Login = new LoginAPI.Login(this._client);

  /**
   * 使用手机号和密码进行登录
   *
   * @example
   * ```ts
   * const resultLogin =
   *   await client.v1.enterprise.auth.enterpriseLogin({
   *     password: 'password123',
   *     phone: '13800138000',
   *   });
   * ```
   */
  enterpriseLogin(
    body: AuthEnterpriseLoginParams,
    options?: RequestOptions,
  ): APIPromise<AuthTokenAPI.ResultLogin> {
    return this._client.post('/api/v1/enterprise/auth/login', { body, ...options });
  }

  /**
   * 用户退出登录
   *
   * @example
   * ```ts
   * const resultVoid = await client.v1.enterprise.auth.logout();
   * ```
   */
  logout(options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post('/api/v1/enterprise/auth/logout', options);
  }

  /**
   * 兼容 /refresh 路径
   *
   * @example
   * ```ts
   * const resultLogin = await client.v1.enterprise.auth.refresh(
   *   {
   *     refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
   *   },
   * );
   * ```
   */
  refresh(body: AuthRefreshParams, options?: RequestOptions): APIPromise<AuthTokenAPI.ResultLogin> {
    return this._client.post('/api/v1/enterprise/auth/refresh', { body, ...options });
  }

  /**
   * 新用户注册
   *
   * @example
   * ```ts
   * const resultLogin =
   *   await client.v1.enterprise.auth.register({
   *     code: '1234',
   *     name: '张三',
   *     password: 'password123',
   *     phone: '13800138000',
   *   });
   * ```
   */
  register(body: AuthRegisterParams, options?: RequestOptions): APIPromise<AuthTokenAPI.ResultLogin> {
    return this._client.post('/api/v1/enterprise/auth/register', { body, ...options });
  }
}

export interface AuthEnterpriseLoginParams {
  /**
   * 密码（短信登录时传验证码）
   */
  password: string;

  /**
   * 手机号
   */
  phone: string;
}

export interface AuthRefreshParams {
  /**
   * 刷新令牌
   */
  refreshToken: string;
}

export interface AuthRegisterParams {
  /**
   * 短信验证码
   */
  code: string;

  /**
   * 姓名
   */
  name: string;

  /**
   * 密码
   */
  password: string;

  /**
   * 手机号
   */
  phone: string;
}

Auth.Token = Token;
Auth.SMS = SMS;
Auth.Login = Login;

export declare namespace Auth {
  export {
    type AuthEnterpriseLoginParams as AuthEnterpriseLoginParams,
    type AuthRefreshParams as AuthRefreshParams,
    type AuthRegisterParams as AuthRegisterParams,
  };

  export { Token as Token, type TokenRefreshParams as TokenRefreshParams };

  export { SMS as SMS, type SMSLoginParams as SMSLoginParams, type SMSSendParams as SMSSendParams };

  export { Login as Login, type LoginSMSParams as LoginSMSParams };
}
