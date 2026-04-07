// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssistantSettingsAPI from '../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../v1/seeker/profile/work-experience';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  /**
   * 管理后台登录
   */
  login(
    params: AuthLoginParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    const { body } = params;
    return this._client.post('/api/admin/auth/login', { body: body, ...options });
  }

  /**
   * 管理后台退出
   */
  logout(options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post('/api/admin/auth/logout', options);
  }

  /**
   * 获取当前管理用户信息
   */
  retrieveProfile(options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get('/api/admin/auth/profile', options);
  }

  /**
   * 管理后台修改密码
   */
  updatePassword(
    params: AuthUpdatePasswordParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    const { body } = params;
    return this._client.put('/api/admin/auth/password', { body: body, ...options });
  }
}

export interface AuthLoginParams {
  body: { [key: string]: unknown };
}

export interface AuthUpdatePasswordParams {
  body: { [key: string]: unknown };
}

export declare namespace Auth {
  export {
    type AuthLoginParams as AuthLoginParams,
    type AuthUpdatePasswordParams as AuthUpdatePasswordParams,
  };
}
