// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FavoriteAPI from './favorite';
import { Favorite } from './favorite';
import * as AssistantSettingsAPI from '../../seeker/preferences/assistant-settings';
import * as MessagesAPI from '../../seeker/message/conversations/messages';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * 人才搜索、收藏、邀请等相关接口
 */
export class Talents extends APIResource {
  favorite: FavoriteAPI.Favorite = new FavoriteAPI.Favorite(this._client);

  /**
   * 获取指定人才的详细信息
   *
   * @example
   * ```ts
   * const talent = await client.v1.enterprise.talents.retrieve(
   *   0,
   * );
   * ```
   */
  retrieve(talentID: number, options?: RequestOptions): APIPromise<TalentRetrieveResponse> {
    return this._client.get(path`/api/v1/enterprise/talents/${talentID}`, options);
  }

  /**
   * 分页搜索人才列表，支持关键词、城市、学历、薪资等筛选
   *
   * @example
   * ```ts
   * const resultPageTalentList =
   *   await client.v1.enterprise.talents.list({ request: {} });
   * ```
   */
  list(query: TalentListParams, options?: RequestOptions): APIPromise<ResultPageTalentList> {
    return this._client.get('/api/v1/enterprise/talents', { query, ...options });
  }

  /**
   * 向指定人才发送职位邀请
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.enterprise.talents.invite(0, {
   *     positionId: 1,
   *   });
   * ```
   */
  invite(
    talentID: number,
    body: TalentInviteParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post(path`/api/v1/enterprise/talents/${talentID}/invite`, { body, ...options });
  }

  /**
   * 分页获取当前用户收藏的人才列表
   *
   * @example
   * ```ts
   * const resultPageTalentList =
   *   await client.v1.enterprise.talents.listFavorites();
   * ```
   */
  listFavorites(
    query: TalentListFavoritesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResultPageTalentList> {
    return this._client.get('/api/v1/enterprise/talents/favorites', { query, ...options });
  }
}

/**
 * 统一响应包装类
 */
export interface ResultPageTalentList {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 分页响应包装类
   */
  data?: ResultPageTalentList.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace ResultPageTalentList {
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
     * 人才列表项响应
     */
    export interface List {
      /**
       * 人才 ID
       */
      id?: string;

      /**
       * 头像 URL
       */
      avatar?: string;

      /**
       * 当前公司
       */
      currentCompany?: string;

      /**
       * 当前职位
       */
      currentPosition?: string;

      /**
       * 学历
       */
      education?: string;

      /**
       * 到岗时间
       */
      entryTime?: string;

      /**
       * 期望薪资
       */
      expectedSalary?: string;

      /**
       * 性别: 0 未知 1 男 2 女
       */
      gender?: number;

      /**
       * 是否已收藏
       */
      isFavorite?: boolean;

      /**
       * 求职状态
       */
      jobStatus?: string;

      /**
       * 最后活跃时间
       */
      lastActiveAt?: string;

      /**
       * 匹配分数
       */
      matchScore?: number;

      /**
       * 姓名
       */
      name?: string;

      /**
       * 技能标签
       */
      skills?: Array<string>;

      /**
       * 期望城市
       */
      targetCity?: string;

      /**
       * 期望职位
       */
      targetPosition?: string;

      /**
       * 工作年限
       */
      workYears?: string;
    }
  }
}

/**
 * 统一响应包装类
 */
export interface TalentRetrieveResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 人才详情响应
   */
  data?: TalentRetrieveResponse.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace TalentRetrieveResponse {
  /**
   * 人才详情响应
   */
  export interface Data {
    /**
     * 人才 ID
     */
    id?: string;

    /**
     * 投递状态
     */
    applicationStatus?: string;

    /**
     * 头像 URL
     */
    avatar?: string;

    /**
     * 证书
     */
    certificates?: Array<string>;

    /**
     * 学历
     */
    education?: string;

    /**
     * 教育经历
     */
    educationHistory?: Array<Data.EducationHistory>;

    /**
     * 到岗时间
     */
    entryTime?: string;

    /**
     * 期望薪资
     */
    expectedSalary?: string;

    /**
     * 性别: 0 未知 1 男 2 女
     */
    gender?: number;

    /**
     * 是否已投递
     */
    hasApplied?: boolean;

    /**
     * 是否已收藏
     */
    isFavorite?: boolean;

    /**
     * 求职期望
     */
    jobExpectation?: Data.JobExpectation;

    /**
     * 求职状态
     */
    jobStatus?: string;

    /**
     * 姓名
     */
    name?: string;

    /**
     * 项目经历
     */
    projectExperience?: Array<Data.ProjectExperience>;

    /**
     * 技能标签
     */
    skills?: Array<string>;

    /**
     * 期望城市
     */
    targetCity?: string;

    /**
     * 期望职位
     */
    targetPosition?: string;

    /**
     * 工作经历
     */
    workExperience?: Array<Data.WorkExperience>;

    /**
     * 工作年限
     */
    workYears?: string;
  }

  export namespace Data {
    /**
     * 教育经历
     */
    export interface EducationHistory {
      /**
       * 学位
       */
      degree?: string;

      /**
       * 结束日期
       */
      endDate?: string;

      /**
       * 专业
       */
      major?: string;

      /**
       * 学校
       */
      school?: string;

      /**
       * 开始日期
       */
      startDate?: string;
    }

    /**
     * 求职期望
     */
    export interface JobExpectation {
      /**
       * 期望城市列表
       */
      cities?: Array<string>;

      /**
       * 工作类型
       */
      jobType?: string;

      /**
       * 期望职位列表
       */
      positions?: Array<string>;

      /**
       * 期望薪资范围
       */
      salaryRange?: string;
    }

    /**
     * 项目经历
     */
    export interface ProjectExperience {
      /**
       * 描述
       */
      description?: string;

      /**
       * 结束日期
       */
      endDate?: string;

      /**
       * 项目名称
       */
      name?: string;

      /**
       * 角色
       */
      role?: string;

      /**
       * 开始日期
       */
      startDate?: string;
    }

    /**
     * 工作经历
     */
    export interface WorkExperience {
      /**
       * 公司
       */
      company?: string;

      /**
       * 描述
       */
      description?: string;

      /**
       * 结束日期
       */
      endDate?: string;

      /**
       * 职位
       */
      position?: string;

      /**
       * 开始日期
       */
      startDate?: string;
    }
  }
}

export interface TalentListParams {
  /**
   * 人才搜索请求
   */
  request: TalentListParams.Request;
}

export namespace TalentListParams {
  /**
   * 人才搜索请求
   */
  export interface Request {
    /**
     * 城市筛选
     */
    city?: string;

    /**
     * 学历筛选
     */
    education?: string;

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
     * 职位 ID 筛选
     */
    positionId?: number;

    /**
     * 最高薪资(K)
     */
    salaryMax?: number;

    /**
     * 最低薪资(K)
     */
    salaryMin?: number;

    /**
     * 排序字段：activeTime/matchScore
     */
    sortBy?: string;

    /**
     * 排序方向：asc/desc
     */
    sortOrder?: string;

    /**
     * 工作年限筛选
     */
    workYears?: string;
  }
}

export interface TalentInviteParams {
  /**
   * 职位 ID
   */
  positionId: number;

  /**
   * 邀请消息
   */
  message?: string;
}

export interface TalentListFavoritesParams {
  /**
   * 页码，默认 1
   */
  page?: number;

  /**
   * 每页数量，默认 20
   */
  pageSize?: number;
}

Talents.Favorite = Favorite;

export declare namespace Talents {
  export {
    type ResultPageTalentList as ResultPageTalentList,
    type TalentRetrieveResponse as TalentRetrieveResponse,
    type TalentListParams as TalentListParams,
    type TalentInviteParams as TalentInviteParams,
    type TalentListFavoritesParams as TalentListFavoritesParams,
  };

  export { Favorite as Favorite };
}
