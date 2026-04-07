// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessagesAPI from '../../v1/seeker/ai-assistant/messages';
import * as AssistantSettingsAPI from '../../v1/seeker/preferences/assistant-settings';
import * as WorkExperienceAPI from '../../v1/seeker/profile/work-experience';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 字典管理、省市配置、违禁词、公告、Banner等配置接口
 */
export class BannedWords extends APIResource {
  /**
   * 删除指定违禁词
   */
  delete(id: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.delete(path`/api/admin/config/banned-words/${id}`, options);
  }

  /**
   * 批量添加违禁词
   */
  bannedWords(
    body: BannedWordBannedWordsParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/admin/config/banned-words', { body, ...options });
  }

  /**
   * 分页获取违禁词列表
   */
  retrieveBannedWords(
    query: BannedWordRetrieveBannedWordsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.ResultPageResultMapStringObject> {
    return this._client.get('/api/admin/config/banned-words', { query, ...options });
  }
}

export interface BannedWordBannedWordsParams {
  /**
   * 违禁词列表
   */
  words: Array<string>;
}

export interface BannedWordRetrieveBannedWordsParams {
  /**
   * 搜索关键词
   */
  keyword?: string;

  /**
   * 页码，默认 1
   */
  page?: number;

  /**
   * 每页条数，默认 20
   */
  pageSize?: number;
}

export declare namespace BannedWords {
  export {
    type BannedWordBannedWordsParams as BannedWordBannedWordsParams,
    type BannedWordRetrieveBannedWordsParams as BannedWordRetrieveBannedWordsParams,
  };
}
