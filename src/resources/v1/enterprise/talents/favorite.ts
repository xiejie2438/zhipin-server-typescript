// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WorkExperienceAPI from '../../seeker/profile/work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * 人才搜索、收藏、邀请等相关接口
 */
export class Favorite extends APIResource {
  /**
   * 收藏指定人才到人才库
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.talents.favorite.add(0);
   * ```
   */
  add(talentID: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/v1/enterprise/talents/${talentID}/favorite`, options);
  }

  /**
   * 取消对指定人才的收藏
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.talents.favorite.remove(0);
   * ```
   */
  remove(talentID: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/enterprise/talents/${talentID}/favorite`, options);
  }
}
