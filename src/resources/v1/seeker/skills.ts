// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Skills extends APIResource {
  /**
   * 根据职位名称获取推荐技能标签
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.seeker.skills.retrieveSuggestions({
   *     position: 'position',
   *   });
   * ```
   */
  retrieveSuggestions(
    query: SkillRetrieveSuggestionsParams,
    options?: RequestOptions,
  ): APIPromise<SkillRetrieveSuggestionsResponse> {
    return this._client.get('/api/v1/seeker/skills/suggestions', { query, ...options });
  }
}

/**
 * 统一响应包装类
 */
export interface SkillRetrieveSuggestionsResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 技能推荐响应
   */
  data?: SkillRetrieveSuggestionsResponse.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace SkillRetrieveSuggestionsResponse {
  /**
   * 技能推荐响应
   */
  export interface Data {
    /**
     * 职位名称
     */
    position?: string;

    /**
     * 推荐技能列表
     */
    skills?: Array<string>;
  }
}

export interface SkillRetrieveSuggestionsParams {
  /**
   * 职位名称
   */
  position: string;
}

export declare namespace Skills {
  export {
    type SkillRetrieveSuggestionsResponse as SkillRetrieveSuggestionsResponse,
    type SkillRetrieveSuggestionsParams as SkillRetrieveSuggestionsParams,
  };
}
