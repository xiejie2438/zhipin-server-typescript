// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MembersAPI from './members';
import * as PositionsAPI from './positions';
import * as WorkExperienceAPI from '../seeker/profile/work-experience';
import * as MessagesAPI from '../seeker/message/conversations/messages';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 企业成员管理相关接口
 */
export class Members extends APIResource {
  /**
   * 获取指定成员的详细信息
   *
   * @example
   * ```ts
   * const resultMemberDetail =
   *   await client.v1.enterprise.members.retrieve(0);
   * ```
   */
  retrieve(memberID: number, options?: RequestOptions): APIPromise<ResultMemberDetail> {
    return this._client.get(path`/api/v1/enterprise/members/${memberID}`, options);
  }

  /**
   * 更新指定成员的信息，需要管理员权限
   *
   * @example
   * ```ts
   * const resultMemberDetail =
   *   await client.v1.enterprise.members.update(0);
   * ```
   */
  update(
    memberID: number,
    body: MemberUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResultMemberDetail> {
    return this._client.put(path`/api/v1/enterprise/members/${memberID}`, { body, ...options });
  }

  /**
   * 分页获取企业成员列表，支持按状态和角色筛选
   *
   * @example
   * ```ts
   * const members = await client.v1.enterprise.members.list();
   * ```
   */
  list(
    query: MemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MemberListResponse> {
    return this._client.get('/api/v1/enterprise/members', { query, ...options });
  }

  /**
   * 添加新成员到企业，需要管理员权限。如果手机号未注册，会自动创建账号
   *
   * @example
   * ```ts
   * const response = await client.v1.enterprise.members.add({
   *   name: '王五',
   *   phone: '13700137000',
   *   role: 'hr',
   * });
   * ```
   */
  add(body: MemberAddParams, options?: RequestOptions): APIPromise<MemberAddResponse> {
    return this._client.post('/api/v1/enterprise/members', { body, ...options });
  }

  /**
   * 禁用指定成员，需要管理员权限。不能禁用管理员
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.members.disable(0);
   * ```
   */
  disable(
    memberID: number,
    body: MemberDisableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.put(path`/api/v1/enterprise/members/${memberID}/disable`, { body, ...options });
  }

  /**
   * 启用已禁用的成员，需要管理员权限
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.members.enable(0);
   * ```
   */
  enable(memberID: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.put(path`/api/v1/enterprise/members/${memberID}/enable`, options);
  }

  /**
   * 从企业中移除指定成员，需要管理员权限。不能移除管理员
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.members.remove(0);
   * ```
   */
  remove(memberID: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/enterprise/members/${memberID}`, options);
  }
}

/**
 * 成员列表项响应
 */
export interface MemberList {
  /**
   * 成员 ID
   */
  id?: string;

  /**
   * 头像 URL
   */
  avatar?: string;

  /**
   * 创建时间
   */
  createdAt?: string;

  /**
   * 最后活跃时间
   */
  lastActiveAt?: string;

  /**
   * 姓名
   */
  name?: string;

  /**
   * 手机号
   */
  phone?: string;

  /**
   * 角色: admin/hr/interviewer
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

/**
 * 统一响应包装类
 */
export interface ResultMemberDetail {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 成员详情响应
   */
  data?: ResultMemberDetail.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace ResultMemberDetail {
  /**
   * 成员详情响应
   */
  export interface Data {
    /**
     * 成员 ID
     */
    id?: string;

    /**
     * 头像 URL
     */
    avatar?: string;

    /**
     * 创建时间
     */
    createdAt?: string;

    /**
     * 部门
     */
    department?: string;

    /**
     * 最后活跃时间
     */
    lastActiveAt?: string;

    /**
     * 姓名
     */
    name?: string;

    /**
     * 权限列表
     */
    permissions?: Array<string>;

    /**
     * 手机号
     */
    phone?: string;

    /**
     * 角色: admin/hr/interviewer
     */
    role?: string;

    /**
     * 职位统计信息
     */
    statistics?: PositionsAPI.Statistics;

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
 * 统一响应包装类
 */
export interface MemberListResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 成员列表分页响应
   */
  data?: MemberListResponse.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace MemberListResponse {
  /**
   * 成员列表分页响应
   */
  export interface Data {
    /**
     * 成员列表
     */
    list?: Array<MembersAPI.MemberList>;

    /**
     * 分页信息
     */
    pagination?: MessagesAPI.Pagination;

    /**
     * 成员统计信息
     */
    statistics?: Data.Statistics;
  }

  export namespace Data {
    /**
     * 成员统计信息
     */
    export interface Statistics {
      /**
       * 活跃成员数
       */
      active?: number;

      /**
       * 已禁用成员数
       */
      disabled?: number;

      /**
       * 成员总数
       */
      total?: number;
    }
  }
}

/**
 * 统一响应包装类
 */
export interface MemberAddResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 成员列表项响应
   */
  data?: MemberList;

  /**
   * 响应消息
   */
  message?: string;
}

export interface MemberUpdateParams {
  /**
   * 部门
   */
  department?: string;

  /**
   * 权限列表
   */
  permissions?: Array<string>;

  /**
   * 角色: admin/hr/interviewer
   */
  role?: string;

  /**
   * 职位头衔
   */
  title?: string;
}

export interface MemberListParams {
  /**
   * 页码，默认 1
   */
  page?: number;

  /**
   * 每页数量，默认 20
   */
  pageSize?: number;

  /**
   * 角色筛选: admin/hr/interviewer
   */
  role?: string;

  /**
   * 状态筛选: active/disabled
   */
  status?: string;
}

export interface MemberAddParams {
  /**
   * 姓名
   */
  name: string;

  /**
   * 手机号
   */
  phone: string;

  /**
   * 角色: admin/hr/interviewer
   */
  role: string;

  /**
   * 部门
   */
  department?: string;

  /**
   * 权限列表
   */
  permissions?: Array<string>;

  /**
   * 职位头衔
   */
  title?: string;
}

export interface MemberDisableParams {
  /**
   * 禁用原因
   */
  reason?: string;
}

export declare namespace Members {
  export {
    type MemberList as MemberList,
    type ResultMemberDetail as ResultMemberDetail,
    type MemberListResponse as MemberListResponse,
    type MemberAddResponse as MemberAddResponse,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
    type MemberAddParams as MemberAddParams,
    type MemberDisableParams as MemberDisableParams,
  };
}
