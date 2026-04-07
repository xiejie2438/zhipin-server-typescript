// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BannersAPI from '../../../admin/config/banners';
import * as AssistantSettingsAPI from './assistant-settings';
import * as WorkExperienceAPI from '../profile/work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class CommonPhrases extends APIResource {
  /**
   * 删除常用语
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.seeker.preferences.commonPhrases.delete(
   *     'phraseId',
   *   );
   * ```
   */
  delete(phraseID: string, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/v1/seeker/preferences/common-phrases/${phraseID}`, options);
  }

  /**
   * 创建常用语
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.seeker.preferences.commonPhrases.commonPhrases(
   *     { body: { foo: 'string' } },
   *   );
   * ```
   */
  commonPhrases(
    params: CommonPhraseCommonPhrasesParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    const { body } = params;
    return this._client.post('/api/v1/seeker/preferences/common-phrases', { body: body, ...options });
  }

  /**
   * 获取常用语列表
   *
   * @example
   * ```ts
   * const resultListBanners =
   *   await client.v1.seeker.preferences.commonPhrases.retrieveCommonPhrases();
   * ```
   */
  retrieveCommonPhrases(options?: RequestOptions): APIPromise<BannersAPI.ResultListBanners> {
    return this._client.get('/api/v1/seeker/preferences/common-phrases', options);
  }
}

export interface CommonPhraseCommonPhrasesParams {
  body: { [key: string]: string };
}

export declare namespace CommonPhrases {
  export { type CommonPhraseCommonPhrasesParams as CommonPhraseCommonPhrasesParams };
}
