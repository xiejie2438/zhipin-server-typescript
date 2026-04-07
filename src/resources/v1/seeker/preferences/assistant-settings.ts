// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class AssistantSettings extends APIResource {
  /**
   * 获取助手设置
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.seeker.preferences.assistantSettings.retrieveAssistantSettings();
   * ```
   */
  retrieveAssistantSettings(options?: RequestOptions): APIPromise<ResultMapStringObject> {
    return this._client.get('/api/v1/seeker/preferences/assistant-settings', options);
  }

  /**
   * 更新助手设置
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.seeker.preferences.assistantSettings.updateAssistantSettings(
   *     { body: { foo: {} } },
   *   );
   * ```
   */
  updateAssistantSettings(
    params: AssistantSettingUpdateAssistantSettingsParams,
    options?: RequestOptions,
  ): APIPromise<ResultMapStringObject> {
    const { body } = params;
    return this._client.put('/api/v1/seeker/preferences/assistant-settings', { body: body, ...options });
  }
}

/**
 * 统一响应包装类
 */
export interface ResultMapStringObject {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: { [key: string]: unknown };

  /**
   * 响应消息
   */
  message?: string;
}

export interface AssistantSettingUpdateAssistantSettingsParams {
  body: { [key: string]: unknown };
}

export declare namespace AssistantSettings {
  export {
    type ResultMapStringObject as ResultMapStringObject,
    type AssistantSettingUpdateAssistantSettingsParams as AssistantSettingUpdateAssistantSettingsParams,
  };
}
