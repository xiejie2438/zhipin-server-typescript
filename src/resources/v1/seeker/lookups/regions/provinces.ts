// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as BannersAPI from '../../../../admin/config/banners';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Provinces extends APIResource {
  /**
   * 获取省份列表
   *
   * @example
   * ```ts
   * const resultListBanners =
   *   await client.v1.seeker.lookups.regions.provinces.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<BannersAPI.ResultListBanners> {
    return this._client.get('/api/v1/seeker/lookups/regions/provinces', options);
  }

  /**
   * 获取城市列表
   *
   * @example
   * ```ts
   * const resultListBanners =
   *   await client.v1.seeker.lookups.regions.provinces.retrieveCities(
   *     'provinceCode',
   *   );
   * ```
   */
  retrieveCities(provinceCode: string, options?: RequestOptions): APIPromise<BannersAPI.ResultListBanners> {
    return this._client.get(path`/api/v1/seeker/lookups/regions/provinces/${provinceCode}/cities`, options);
  }
}
