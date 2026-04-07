// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccountMeAPI from '../../seeker/account/me';
import * as WorkExperienceAPI from '../../seeker/profile/work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { RequestOptions } from '../../../../internal/request-options';

export class Me extends APIResource {
  /**
   * 获取当前登录用户的详细信息
   *
   * @example
   * ```ts
   * const resultUserInfo =
   *   await client.v1.enterprise.account.me.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<AccountMeAPI.ResultUserInfo> {
    return this._client.get('/api/v1/enterprise/account/me', options);
  }

  /**
   * 更新当前登录用户的信息
   *
   * @example
   * ```ts
   * const resultUserInfo =
   *   await client.v1.enterprise.account.me.update({
   *     name: '张三',
   *   });
   * ```
   */
  update(body: MeUpdateParams, options?: RequestOptions): APIPromise<AccountMeAPI.ResultUserInfo> {
    return this._client.put('/api/v1/enterprise/account/me', { body, ...options });
  }

  /**
   * 修改当前登录用户的密码
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.account.me.updatePassword({
   *     newPassword: 'new123',
   *     oldPassword: 'old123',
   *   });
   * ```
   */
  updatePassword(
    body: MeUpdatePasswordParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.put('/api/v1/enterprise/account/me/password', { body, ...options });
  }

  /**
   * 兼容 PATCH 方法
   *
   * @example
   * ```ts
   * const resultUserInfo =
   *   await client.v1.enterprise.account.me.updatePatch({
   *     name: '张三',
   *   });
   * ```
   */
  updatePatch(body: MeUpdatePatchParams, options?: RequestOptions): APIPromise<AccountMeAPI.ResultUserInfo> {
    return this._client.patch('/api/v1/enterprise/account/me', { body, ...options });
  }

  /**
   * 上传用户头像并写回用户资料
   *
   * @example
   * ```ts
   * const resultMapStringString =
   *   await client.v1.enterprise.account.me.uploadAvatar({
   *     file: fs.createReadStream('path/to/file'),
   *   });
   * ```
   */
  uploadAvatar(
    body: MeUploadAvatarParams,
    options?: RequestOptions,
  ): APIPromise<AccountMeAPI.ResultMapStringString> {
    return this._client.post('/api/v1/enterprise/account/me/avatar', { body, ...options });
  }
}

export interface MeUpdateParams {
  /**
   * 姓名
   */
  name: string;

  /**
   * 头像 URL
   */
  avatar?: string;

  /**
   * 职位头衔
   */
  title?: string;
}

export interface MeUpdatePasswordParams {
  /**
   * 新密码
   */
  newPassword: string;

  /**
   * 原密码
   */
  oldPassword: string;
}

export interface MeUpdatePatchParams {
  /**
   * 姓名
   */
  name: string;

  /**
   * 头像 URL
   */
  avatar?: string;

  /**
   * 职位头衔
   */
  title?: string;
}

export interface MeUploadAvatarParams {
  /**
   * 头像文件
   */
  file: Uploadable;
}

export declare namespace Me {
  export {
    type MeUpdateParams as MeUpdateParams,
    type MeUpdatePasswordParams as MeUpdatePasswordParams,
    type MeUpdatePatchParams as MeUpdatePatchParams,
    type MeUploadAvatarParams as MeUploadAvatarParams,
  };
}
