// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as LoginAPI from './login';
import { Login, LoginCreateParams, LoginSMSParams } from './login';
import * as SMSAPI from './sms';
import { LoginRequest, SMS, SMSCodeRequest, SMSLoginParams, SMSSendParams } from './sms';
import * as TokenAPI from './token';
import { RefreshTokenRequest, ResultLogin, Token, TokenRefreshParams } from './token';
import * as WorkExperienceAPI from '../profile/work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Auth extends APIResource {
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  sms: SMSAPI.SMS = new SMSAPI.SMS(this._client);
  login: LoginAPI.Login = new LoginAPI.Login(this._client);

  /**
   * 用户退出登录
   *
   * @example
   * ```ts
   * const resultVoid = await client.v1.seeker.auth.logout();
   * ```
   */
  logout(options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post('/api/v1/seeker/auth/logout', options);
  }

  /**
   * 兼容 /refresh 路径
   *
   * @example
   * ```ts
   * const resultLogin = await client.v1.seeker.auth.refresh({
   *   refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
   * });
   * ```
   */
  refresh(body: AuthRefreshParams, options?: RequestOptions): APIPromise<TokenAPI.ResultLogin> {
    return this._client.post('/api/v1/seeker/auth/refresh', { body, ...options });
  }

  /**
   * 新用户注册
   *
   * @example
   * ```ts
   * const resultLogin = await client.v1.seeker.auth.register({
   *   code: '1234',
   *   name: '张三',
   *   password: 'password123',
   *   phone: '13800138000',
   * });
   * ```
   */
  register(body: AuthRegisterParams, options?: RequestOptions): APIPromise<TokenAPI.ResultLogin> {
    return this._client.post('/api/v1/seeker/auth/register', { body, ...options });
  }
}

/**
 * 注册请求参数
 */
export interface RegisterRequest {
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
    type RegisterRequest as RegisterRequest,
    type AuthRefreshParams as AuthRefreshParams,
    type AuthRegisterParams as AuthRegisterParams,
  };

  export {
    Token as Token,
    type RefreshTokenRequest as RefreshTokenRequest,
    type ResultLogin as ResultLogin,
    type TokenRefreshParams as TokenRefreshParams,
  };

  export {
    SMS as SMS,
    type LoginRequest as LoginRequest,
    type SMSCodeRequest as SMSCodeRequest,
    type SMSLoginParams as SMSLoginParams,
    type SMSSendParams as SMSSendParams,
  };

  export {
    Login as Login,
    type LoginCreateParams as LoginCreateParams,
    type LoginSMSParams as LoginSMSParams,
  };
}
