// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MeAPI from '../v1/seeker/account/me';
import * as MessagesAPI from '../v1/seeker/ai-assistant/messages';
import * as AssistantSettingsAPI from '../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../v1/seeker/profile/work-experience';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 管理员账号管理、角色权限管理接口
 */
export class Users extends APIResource {
  /**
   * 创建新的后台管理员账号
   */
  create(
    body: UserCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/admin/users', { body, ...options });
  }

  /**
   * 获取指定管理员详情
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get(path`/api/admin/users/${id}`, options);
  }

  /**
   * 修改管理员信息
   */
  update(
    id: number,
    body: UserUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.put(path`/api/admin/users/${id}`, { body, ...options });
  }

  /**
   * 分页获取后台管理员列表
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.ResultPageResultMapStringObject> {
    return this._client.get('/api/admin/users', { query, ...options });
  }

  /**
   * 禁用管理员账号
   */
  disable(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/admin/users/${id}/disable`, options);
  }

  /**
   * 启用管理员账号
   */
  enable(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/admin/users/${id}/enable`, options);
  }

  /**
   * 获取指定用户的操作日志
   */
  getLogs(
    id: number,
    query: UserGetLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.ResultPageResultMapStringObject> {
    return this._client.get(path`/api/admin/users/${id}/logs`, { query, ...options });
  }

  /**
   * 重置管理员密码
   */
  resetPassword(id: number, options?: RequestOptions): APIPromise<MeAPI.ResultMapStringString> {
    return this._client.post(path`/api/admin/users/${id}/reset-password`, options);
  }
}

/**
 * 用户请求
 */
export interface AdminUser {
  /**
   * 手机号
   */
  phone: string;

  /**
   * 角色 ID
   */
  roleId: number;

  /**
   * 用户名
   */
  username: string;

  /**
   * 密码（新增必填，修改可选）
   */
  password?: string;
}

export interface UserCreateParams {
  /**
   * 手机号
   */
  phone: string;

  /**
   * 角色 ID
   */
  roleId: number;

  /**
   * 用户名
   */
  username: string;

  /**
   * 密码（新增必填，修改可选）
   */
  password?: string;
}

export interface UserUpdateParams {
  /**
   * 手机号
   */
  phone: string;

  /**
   * 角色 ID
   */
  roleId: number;

  /**
   * 用户名
   */
  username: string;

  /**
   * 密码（新增必填，修改可选）
   */
  password?: string;
}

export interface UserListParams {
  /**
   * 搜索关键词(用户名/手机号)
   */
  keyword?: string;

  /**
   * 页码，默认 1
   */
  page?: number;

  /**
   * 每页条数，默认 10
   */
  pageSize?: number;

  /**
   * 角色 ID
   */
  roleId?: number;

  /**
   * 状态: enabled/disabled/all
   */
  status?: string;
}

export interface UserGetLogsParams {
  /**
   * 结束日期
   */
  endDate?: string;

  /**
   * 页码
   */
  page?: number;

  /**
   * 每页条数
   */
  page_size?: number;

  /**
   * 开始日期
   */
  startDate?: string;
}

export declare namespace Users {
  export {
    type AdminUser as AdminUser,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserGetLogsParams as UserGetLogsParams,
  };
}
