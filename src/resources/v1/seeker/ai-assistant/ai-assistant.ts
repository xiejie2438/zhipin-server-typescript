// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MessagesAPI from './messages';
import {
  MessageCreateParams,
  MessageListParams,
  Messages,
  PageResultMapStringObject,
  ResultPageResultMapStringObject,
} from './messages';
import * as AssistantSettingsAPI from '../preferences/assistant-settings';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * 求职者AI助理相关接口
 */
export class AIAssistant extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * 分析职位与简历的匹配度，给出优化建议
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.seeker.aiAssistant.jdOptimize({
   *     jobId: 0,
   *   });
   * ```
   */
  jdOptimize(
    body: AIAssistantJdOptimizeParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/v1/seeker/ai-assistant/jd-optimize', { body, ...options });
  }

  /**
   * 获取求职漏斗、转化率、建议等数据分析
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.seeker.aiAssistant.retrieveAnalytics();
   * ```
   */
  retrieveAnalytics(options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get('/api/v1/seeker/ai-assistant/analytics', options);
  }

  /**
   * 分析投递职位的风险等级
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.seeker.aiAssistant.riskAnalysis({
   *     jobId: 0,
   *   });
   * ```
   */
  riskAnalysis(
    body: AIAssistantRiskAnalysisParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/v1/seeker/ai-assistant/risk-analysis', { body, ...options });
  }
}

export interface AIAssistantJdOptimizeParams {
  /**
   * 职位 ID
   */
  jobId: number;
}

export interface AIAssistantRiskAnalysisParams {
  /**
   * 职位 ID
   */
  jobId: number;
}

AIAssistant.Messages = Messages;

export declare namespace AIAssistant {
  export {
    type AIAssistantJdOptimizeParams as AIAssistantJdOptimizeParams,
    type AIAssistantRiskAnalysisParams as AIAssistantRiskAnalysisParams,
  };

  export {
    Messages as Messages,
    type PageResultMapStringObject as PageResultMapStringObject,
    type ResultPageResultMapStringObject as ResultPageResultMapStringObject,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };
}
