// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PositionsAPI from './positions';
import * as WorkExperienceAPI from '../seeker/profile/work-experience';
import * as MessagesAPI from '../seeker/message/conversations/messages';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 职位发布、管理相关接口
 */
export class Positions extends APIResource {
  /**
   * 创建新职位，需要管理员或 HR 权限
   *
   * @example
   * ```ts
   * const resultPositionDetail =
   *   await client.v1.enterprise.positions.create({
   *     city: '北京',
   *     name: '高级Java工程师',
   *     salaryMax: 35,
   *     salaryMin: 25,
   *   });
   * ```
   */
  create(body: PositionCreateParams, options?: RequestOptions): APIPromise<ResultPositionDetail> {
    return this._client.post('/api/v1/enterprise/positions', { body, ...options });
  }

  /**
   * 获取指定职位的详细信息
   *
   * @example
   * ```ts
   * const resultPositionDetail =
   *   await client.v1.enterprise.positions.retrieve(0);
   * ```
   */
  retrieve(positionID: number, options?: RequestOptions): APIPromise<ResultPositionDetail> {
    return this._client.get(path`/api/v1/enterprise/positions/${positionID}`, options);
  }

  /**
   * 更新指定职位的信息，需要管理员或 HR 权限
   *
   * @example
   * ```ts
   * const resultPositionDetail =
   *   await client.v1.enterprise.positions.update(0, {
   *     city: '北京',
   *     name: '高级Java工程师',
   *     salaryMax: 35,
   *     salaryMin: 25,
   *   });
   * ```
   */
  update(
    positionID: number,
    body: PositionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResultPositionDetail> {
    return this._client.put(path`/api/v1/enterprise/positions/${positionID}`, { body, ...options });
  }

  /**
   * 分页获取企业职位列表，支持状态和关键词筛选
   *
   * @example
   * ```ts
   * const positions = await client.v1.enterprise.positions.list(
   *   { request: {} },
   * );
   * ```
   */
  list(query: PositionListParams, options?: RequestOptions): APIPromise<PositionListResponse> {
    return this._client.get('/api/v1/enterprise/positions', { query, ...options });
  }

  /**
   * 删除指定职位，需要管理员或 HR 权限
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.positions.delete(0);
   * ```
   */
  delete(positionID: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/enterprise/positions/${positionID}`, options);
  }

  /**
   * 开启或关闭职位
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.positions.updateStatus(0, {
   *     status: 'closed',
   *   });
   * ```
   */
  updateStatus(
    positionID: number,
    body: PositionUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.put(path`/api/v1/enterprise/positions/${positionID}/status`, { body, ...options });
  }
}

/**
 * 创建人信息
 */
export interface Creator {
  /**
   * 用户 ID
   */
  id?: string;

  /**
   * 姓名
   */
  name?: string;
}

/**
 * 创建职位请求参数
 */
export interface PositionCreate {
  /**
   * 工作城市
   */
  city: string;

  /**
   * 职位名称
   */
  name: string;

  /**
   * 最高薪资(K)
   */
  salaryMax: number;

  /**
   * 最低薪资(K)
   */
  salaryMin: number;

  /**
   * 详细工作地址
   */
  address?: string;

  /**
   * 职位福利
   */
  benefits?: Array<string>;

  /**
   * 职位类别
   */
  category?: string;

  /**
   * 职位描述
   */
  description?: string;

  /**
   * 工作区县
   */
  district?: string;

  /**
   * 学历要求
   */
  education?: string;

  /**
   * 经验要求
   */
  experience?: string;

  /**
   * 招聘人数
   */
  headcount?: number;

  /**
   * 职位亮点
   */
  highlights?: Array<string>;

  /**
   * 面试流程
   */
  interviewProcess?: Array<string>;

  /**
   * 工作类型
   */
  jobType?: string;

  /**
   * 任职要求
   */
  requirements?: string;

  /**
   * 薪资月数
   */
  salaryMonth?: number;

  /**
   * 技能要求
   */
  skills?: Array<string>;

  /**
   * 职位子类别
   */
  subCategory?: string;

  /**
   * 是否急聘
   */
  urgency?: boolean;
}

/**
 * 职位详情响应
 */
export interface PositionDetailResponse {
  /**
   * 职位 ID
   */
  id?: string;

  /**
   * 详细工作地址
   */
  address?: string;

  /**
   * 职位福利
   */
  benefits?: Array<string>;

  /**
   * 职位类别
   */
  category?: string;

  /**
   * 工作城市
   */
  city?: string;

  /**
   * 关闭原因
   */
  closeReason?: string;

  /**
   * 创建时间
   */
  createdAt?: string;

  /**
   * 创建人信息
   */
  createdBy?: Creator;

  /**
   * 职位描述
   */
  description?: string;

  /**
   * 工作区县
   */
  district?: string;

  /**
   * 学历要求
   */
  education?: string;

  /**
   * 经验要求
   */
  experience?: string;

  /**
   * 招聘人数
   */
  headcount?: number;

  /**
   * 职位亮点
   */
  highlights?: Array<string>;

  /**
   * 面试流程
   */
  interviewProcess?: Array<string>;

  /**
   * 职位名称
   */
  name?: string;

  /**
   * 任职要求
   */
  requirements?: string;

  /**
   * 最高薪资(K)
   */
  salaryMax?: number;

  /**
   * 最低薪资(K)
   */
  salaryMin?: number;

  /**
   * 薪资范围
   */
  salaryRange?: string;

  /**
   * 技能要求
   */
  skills?: Array<string>;

  /**
   * 职位统计信息
   */
  statistics?: Statistics;

  /**
   * 状态: active/closed
   */
  status?: string;

  /**
   * 职位子类别
   */
  subCategory?: string;

  /**
   * 更新时间
   */
  updatedAt?: string;

  /**
   * 是否急聘
   */
  urgency?: boolean;
}

/**
 * 统一响应包装类
 */
export interface ResultPositionDetail {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 职位详情响应
   */
  data?: PositionDetailResponse;

  /**
   * 响应消息
   */
  message?: string;
}

/**
 * 职位统计信息
 */
export interface Statistics {
  /**
   * 投递量
   */
  applications?: number;

  /**
   * 入职数
   */
  hired?: number;

  /**
   * 面试数
   */
  interviews?: number;

  /**
   * 浏览量
   */
  views?: number;
}

/**
 * 统一响应包装类
 */
export interface PositionListResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 分页响应包装类
   */
  data?: PositionListResponse.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace PositionListResponse {
  /**
   * 分页响应包装类
   */
  export interface Data {
    /**
     * 数据列表
     */
    list?: Array<Data.List>;

    /**
     * 分页信息
     */
    pagination?: MessagesAPI.Pagination;
  }

  export namespace Data {
    /**
     * 职位列表项响应
     */
    export interface List {
      /**
       * 职位 ID
       */
      id?: string;

      /**
       * 职位类别
       */
      category?: string;

      /**
       * 工作城市
       */
      city?: string;

      /**
       * 创建时间
       */
      createdAt?: string;

      /**
       * 学历要求
       */
      education?: string;

      /**
       * 经验要求
       */
      experience?: string;

      /**
       * 职位名称
       */
      name?: string;

      /**
       * 薪资范围
       */
      salaryRange?: string;

      /**
       * 职位统计信息
       */
      statistics?: PositionsAPI.Statistics;

      /**
       * 状态: active/closed
       */
      status?: string;

      /**
       * 更新时间
       */
      updatedAt?: string;
    }
  }
}

export interface PositionCreateParams {
  /**
   * 工作城市
   */
  city: string;

  /**
   * 职位名称
   */
  name: string;

  /**
   * 最高薪资(K)
   */
  salaryMax: number;

  /**
   * 最低薪资(K)
   */
  salaryMin: number;

  /**
   * 详细工作地址
   */
  address?: string;

  /**
   * 职位福利
   */
  benefits?: Array<string>;

  /**
   * 职位类别
   */
  category?: string;

  /**
   * 职位描述
   */
  description?: string;

  /**
   * 工作区县
   */
  district?: string;

  /**
   * 学历要求
   */
  education?: string;

  /**
   * 经验要求
   */
  experience?: string;

  /**
   * 招聘人数
   */
  headcount?: number;

  /**
   * 职位亮点
   */
  highlights?: Array<string>;

  /**
   * 面试流程
   */
  interviewProcess?: Array<string>;

  /**
   * 工作类型
   */
  jobType?: string;

  /**
   * 任职要求
   */
  requirements?: string;

  /**
   * 薪资月数
   */
  salaryMonth?: number;

  /**
   * 技能要求
   */
  skills?: Array<string>;

  /**
   * 职位子类别
   */
  subCategory?: string;

  /**
   * 是否急聘
   */
  urgency?: boolean;
}

export interface PositionUpdateParams {
  /**
   * 工作城市
   */
  city: string;

  /**
   * 职位名称
   */
  name: string;

  /**
   * 最高薪资(K)
   */
  salaryMax: number;

  /**
   * 最低薪资(K)
   */
  salaryMin: number;

  /**
   * 详细工作地址
   */
  address?: string;

  /**
   * 职位福利
   */
  benefits?: Array<string>;

  /**
   * 职位类别
   */
  category?: string;

  /**
   * 职位描述
   */
  description?: string;

  /**
   * 工作区县
   */
  district?: string;

  /**
   * 学历要求
   */
  education?: string;

  /**
   * 经验要求
   */
  experience?: string;

  /**
   * 招聘人数
   */
  headcount?: number;

  /**
   * 职位亮点
   */
  highlights?: Array<string>;

  /**
   * 面试流程
   */
  interviewProcess?: Array<string>;

  /**
   * 工作类型
   */
  jobType?: string;

  /**
   * 任职要求
   */
  requirements?: string;

  /**
   * 薪资月数
   */
  salaryMonth?: number;

  /**
   * 技能要求
   */
  skills?: Array<string>;

  /**
   * 职位子类别
   */
  subCategory?: string;

  /**
   * 是否急聘
   */
  urgency?: boolean;
}

export interface PositionListParams {
  /**
   * 职位搜索请求
   */
  request: PositionListParams.Request;
}

export namespace PositionListParams {
  /**
   * 职位搜索请求
   */
  export interface Request {
    /**
     * 搜索关键词
     */
    keyword?: string;

    offset?: number;

    /**
     * 页码，默认 1
     */
    page?: number;

    /**
     * 每页数量，默认 20
     */
    pageSize?: number;

    /**
     * 状态筛选: active/closed
     */
    status?: string;
  }
}

export interface PositionUpdateStatusParams {
  /**
   * 状态: active/closed
   */
  status: string;

  /**
   * 关闭原因
   */
  reason?: string;
}

export declare namespace Positions {
  export {
    type Creator as Creator,
    type PositionCreate as PositionCreate,
    type PositionDetailResponse as PositionDetailResponse,
    type ResultPositionDetail as ResultPositionDetail,
    type Statistics as Statistics,
    type PositionListResponse as PositionListResponse,
    type PositionCreateParams as PositionCreateParams,
    type PositionUpdateParams as PositionUpdateParams,
    type PositionListParams as PositionListParams,
    type PositionUpdateStatusParams as PositionUpdateStatusParams,
  };
}
