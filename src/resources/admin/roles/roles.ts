// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BannersAPI from '../config/banners';
import * as PermissionsAPI from './permissions';
import { PermissionUpdateParams, Permissions } from './permissions';
import * as AssistantSettingsAPI from '../../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 管理员账号管理、角色权限管理接口
 */
export class Roles extends APIResource {
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);

  /**
   * 创建新角色
   */
  create(
    body: RoleCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/admin/roles', { body, ...options });
  }

  /**
   * 获取角色详情及权限
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get(path`/api/admin/roles/${id}`, options);
  }

  /**
   * 修改角色信息
   */
  update(
    id: number,
    body: RoleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.put(path`/api/admin/roles/${id}`, { body, ...options });
  }

  /**
   * 获取所有角色列表
   */
  list(
    query: RoleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BannersAPI.ResultListBanners> {
    return this._client.get('/api/admin/roles', { query, ...options });
  }

  /**
   * 删除角色（存在关联用户时不可删除）
   */
  delete(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/admin/roles/${id}`, options);
  }
}

/**
 * 角色请求
 */
export interface Role {
  /**
   * 角色名称
   */
  name: string;

  /**
   * 角色描述
   */
  description?: string;
}

export interface RoleCreateParams {
  /**
   * 角色名称
   */
  name: string;

  /**
   * 角色描述
   */
  description?: string;
}

export interface RoleUpdateParams {
  /**
   * 角色名称
   */
  name: string;

  /**
   * 角色描述
   */
  description?: string;
}

export interface RoleListParams {
  /**
   * 搜索关键词
   */
  keyword?: string;

  /**
   * 状态: enabled/disabled/all
   */
  status?: string;
}

Roles.Permissions = Permissions;

export declare namespace Roles {
  export {
    type Role as Role,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
  };

  export { Permissions as Permissions, type PermissionUpdateParams as PermissionUpdateParams };
}
