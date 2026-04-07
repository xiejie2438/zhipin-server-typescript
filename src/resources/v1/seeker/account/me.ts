// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WorkExperienceAPI from '../profile/work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { RequestOptions } from '../../../../internal/request-options';

export class Me extends APIResource {
  /**
   * 更新当前登录用户的信息
   *
   * @example
   * ```ts
   * const resultUserInfo =
   *   await client.v1.seeker.account.me.create({
   *     name: '张三',
   *   });
   * ```
   */
  create(body: MeCreateParams, options?: RequestOptions): APIPromise<ResultUserInfo> {
    return this._client.put('/api/v1/seeker/account/me', { body, ...options });
  }

  /**
   * 获取当前登录用户的详细信息
   *
   * @example
   * ```ts
   * const resultUserInfo =
   *   await client.v1.seeker.account.me.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ResultUserInfo> {
    return this._client.get('/api/v1/seeker/account/me', options);
  }

  /**
   * 上传用户头像并写回用户资料
   *
   * @example
   * ```ts
   * const resultMapStringString =
   *   await client.v1.seeker.account.me.avatar({
   *     file: fs.createReadStream('path/to/file'),
   *   });
   * ```
   */
  avatar(body: MeAvatarParams, options?: RequestOptions): APIPromise<ResultMapStringString> {
    return this._client.post('/api/v1/seeker/account/me/avatar', { body, ...options });
  }

  /**
   * 兼容 PATCH 方法
   *
   * @example
   * ```ts
   * const resultUserInfo =
   *   await client.v1.seeker.account.me.patchAll({
   *     name: '张三',
   *   });
   * ```
   */
  patchAll(body: MePatchAllParams, options?: RequestOptions): APIPromise<ResultUserInfo> {
    return this._client.patch('/api/v1/seeker/account/me', { body, ...options });
  }

  /**
   * 修改当前登录用户的密码
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.account.me.updatePassword({
   *     newPassword: 'new123',
   *     oldPassword: 'old123',
   *   });
   * ```
   */
  updatePassword(
    body: MeUpdatePasswordParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.put('/api/v1/seeker/account/me/password', { body, ...options });
  }
}

/**
 * 统一响应包装类
 */
export interface ResultMapStringString {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: { [key: string]: string };

  /**
   * 响应消息
   */
  message?: string;
}

/**
 * 统一响应包装类
 */
export interface ResultUserInfo {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 用户信息响应
   */
  data?: ResultUserInfo.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace ResultUserInfo {
  /**
   * 用户信息响应
   */
  export interface Data {
    /**
     * 用户 ID
     */
    id?: string;

    /**
     * 头像 URL
     */
    avatar?: string;

    /**
     * 企业 ID
     */
    companyId?: string;

    /**
     * 企业 LOGO
     */
    companyLogo?: string;

    /**
     * 企业名称
     */
    companyName?: string;

    /**
     * 创建时间
     */
    createdAt?: string;

    /**
     * 是否已认证
     */
    isVerified?: boolean;

    /**
     * 姓名
     */
    name?: string;

    /**
     * 手机号
     */
    phone?: string;

    /**
     * 角色: admin/hr/interviewer/talent
     */
    role?: string;

    /**
     * 状态: active/disabled
     */
    status?: string;

    /**
     * 职位头衔
     */
    title?: string;
  }
}

/**
 * 修改密码请求参数
 */
export interface UpdatePasswordRequest {
  /**
   * 新密码
   */
  newPassword: string;

  /**
   * 原密码
   */
  oldPassword: string;
}

/**
 * 更新用户信息请求参数
 */
export interface UpdateUserRequest {
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

export interface MeCreateParams {
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

export interface MeAvatarParams {
  /**
   * 头像文件
   */
  file: Uploadable;
}

export interface MePatchAllParams {
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

export declare namespace Me {
  export {
    type ResultMapStringString as ResultMapStringString,
    type ResultUserInfo as ResultUserInfo,
    type UpdatePasswordRequest as UpdatePasswordRequest,
    type UpdateUserRequest as UpdateUserRequest,
    type MeCreateParams as MeCreateParams,
    type MeAvatarParams as MeAvatarParams,
    type MePatchAllParams as MePatchAllParams,
    type MeUpdatePasswordParams as MeUpdatePasswordParams,
  };
}
