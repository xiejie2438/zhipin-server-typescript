// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BannersAPI from '../../../admin/config/banners';
import * as AssistantSettingsAPI from './assistant-settings';
import * as WorkExperienceAPI from '../profile/work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BlockedCompanies extends APIResource {
  /**
   * 移除屏蔽企业
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.preferences.blockedCompanies.delete(
   *     'blockId',
   *   );
   * ```
   */
  delete(blockID: string, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/seeker/preferences/blocked-companies/${blockID}`, options);
  }

  /**
   * 添加屏蔽企业
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.seeker.preferences.blockedCompanies.blockedCompanies(
   *     { body: { foo: 'string' } },
   *   );
   * ```
   */
  blockedCompanies(
    params: BlockedCompanyBlockedCompaniesParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    const { body } = params;
    return this._client.post('/api/v1/seeker/preferences/blocked-companies', { body: body, ...options });
  }

  /**
   * 获取屏蔽企业列表
   *
   * @example
   * ```ts
   * const resultListBanners =
   *   await client.v1.seeker.preferences.blockedCompanies.retrieveBlockedCompanies();
   * ```
   */
  retrieveBlockedCompanies(options?: RequestOptions): APIPromise<BannersAPI.ResultListBanners> {
    return this._client.get('/api/v1/seeker/preferences/blocked-companies', options);
  }
}

export interface BlockedCompanyBlockedCompaniesParams {
  body: { [key: string]: string };
}

export declare namespace BlockedCompanies {
  export { type BlockedCompanyBlockedCompaniesParams as BlockedCompanyBlockedCompaniesParams };
}
