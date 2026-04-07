// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AIAssistantAPI from '../../v1/enterprise/ai-assistant/ai-assistant';
import * as MeAPI from '../../v1/seeker/account/me';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 系统配置、数据字典、公告等接口
 */
export class Config extends APIResource {
  /**
   * 根据配置键获取系统配置值
   */
  retrieve(key: string, options?: RequestOptions): APIPromise<AIAssistantAPI.ResultString> {
    return this._client.get(path`/api/admin/system/config/${key}`, options);
  }

  /**
   * 获取所有系统配置项
   */
  listAll(options?: RequestOptions): APIPromise<MeAPI.ResultMapStringString> {
    return this._client.get('/api/admin/system/config/all', options);
  }

  /**
   * 根据分组名称获取配置列表
   */
  listByGroup(groupName: string, options?: RequestOptions): APIPromise<ConfigListByGroupResponse> {
    return this._client.get(path`/api/admin/system/config/group/${groupName}`, options);
  }
}

/**
 * 统一响应包装类
 */
export interface ConfigListByGroupResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: Array<ConfigListByGroupResponse.Data>;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace ConfigListByGroupResponse {
  /**
   * 系统配置响应
   */
  export interface Data {
    /**
     * 配置 ID
     */
    id?: number;

    /**
     * 配置键
     */
    configKey?: string;

    /**
     * 配置值
     */
    configValue?: string;

    /**
     * 创建时间
     */
    createTime?: string;

    /**
     * 配置描述
     */
    description?: string;

    /**
     * 是否可编辑:0 否 1 是
     */
    editable?: number;

    /**
     * 配置分组
     */
    groupName?: string;

    /**
     * 排序号
     */
    sortOrder?: number;
  }
}

export declare namespace Config {
  export { type ConfigListByGroupResponse as ConfigListByGroupResponse };
}
