// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WorkExperienceAPI from '../../seeker/profile/work-experience';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * AI助理对话、数据分析、设置等相关接口
 */
export class Setting extends APIResource {
  /**
   * 获取当前企业的 AI 助理配置
   *
   * @example
   * ```ts
   * const setting =
   *   await client.v1.enterprise.aiAssistant.setting.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<SettingRetrieveResponse> {
    return this._client.get('/api/v1/enterprise/ai-assistant/setting', options);
  }

  /**
   * 更新 AI 助理配置（需要管理员权限）
   *
   * @example
   * ```ts
   * const resultVoid =
   *   await client.v1.enterprise.aiAssistant.setting.update();
   * ```
   */
  update(body: SettingUpdateParams, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.put('/api/v1/enterprise/ai-assistant/setting', { body, ...options });
  }
}

/**
 * 统一响应包装类
 */
export interface SettingRetrieveResponse {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * AI 设置响应
   */
  data?: SettingRetrieveResponse.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace SettingRetrieveResponse {
  /**
   * AI 设置响应
   */
  export interface Data {
    /**
     * 机器人 ID
     */
    botId?: string;

    /**
     * 每日调用次数限制
     */
    dailyLimit?: number;

    /**
     * 启用的功能
     */
    features?: Array<string>;

    /**
     * 是否启用 AI 助理
     */
    isEnabled?: boolean;

    /**
     * 最大 token 数
     */
    maxTokens?: number;

    /**
     * 模型名称
     */
    model?: string;

    /**
     * AI 服务提供商
     */
    provider?: string;

    /**
     * 系统提示词
     */
    systemPrompt?: string;

    /**
     * 温度参数
     */
    temperature?: number;

    /**
     * 今日已使用次数
     */
    todayUsage?: number;

    /**
     * 欢迎语
     */
    welcomeMessage?: string;
  }
}

export interface SettingUpdateParams {
  /**
   * API 密钥
   */
  apiKey?: string;

  /**
   * 机器人 ID
   */
  botId?: string;

  /**
   * 每日调用次数限制
   */
  dailyLimit?: number;

  /**
   * 启用的功能
   */
  features?: Array<string>;

  /**
   * 是否启用 AI 助理
   */
  isEnabled?: boolean;

  /**
   * 最大 token 数
   */
  maxTokens?: number;

  /**
   * 模型名称
   */
  model?: string;

  /**
   * AI 服务提供商: coze/dify/openai
   */
  provider?: string;

  /**
   * 系统提示词
   */
  systemPrompt?: string;

  /**
   * 温度参数
   */
  temperature?: number;

  /**
   * 欢迎语
   */
  welcomeMessage?: string;
}

export declare namespace Setting {
  export {
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
