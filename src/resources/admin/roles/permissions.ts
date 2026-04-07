// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssistantSettingsAPI from '../../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 管理员账号管理、角色权限管理接口
 */
export class Permissions extends APIResource {
  /**
   * 获取指定角色权限详情
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get(path`/api/admin/roles/${id}/permissions`, options);
  }

  /**
   * 更新角色的权限分配
   */
  update(
    id: number,
    body: PermissionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.put(path`/api/admin/roles/${id}/permissions`, { body, ...options });
  }
}

export interface PermissionUpdateParams {
  /**
   * 权限编码列表
   */
  permissions: Array<string>;
}

export declare namespace Permissions {
  export { type PermissionUpdateParams as PermissionUpdateParams };
}
