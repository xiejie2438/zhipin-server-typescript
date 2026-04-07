// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BannersAPI from '../../../admin/config/banners';
import * as MessagesAPI from './messages';
import { Message, MessageListParams, MessageSendParams, MessageSendResponse, Messages } from './messages';
import * as SettingAPI from './setting';
import { Setting, SettingRetrieveResponse, SettingUpdateParams } from './setting';
import * as AssistantSettingsAPI from '../../seeker/preferences/assistant-settings';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * AI助理对话、数据分析、设置等相关接口
 */
export class AIAssistant extends APIResource {
  setting: SettingAPI.Setting = new SettingAPI.Setting(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * 使用 AI 分析简历内容并生成评估报告
   *
   * @example
   * ```ts
   * const resultString =
   *   await client.v1.enterprise.aiAssistant.analyzeResume(0);
   * ```
   */
  analyzeResume(resumeID: number, options?: RequestOptions): APIPromise<ResultString> {
    return this._client.get(path`/api/v1/enterprise/ai-assistant/analyze-resume/${resumeID}`, options);
  }

  /**
   * 获取招聘数据漏斗、统计和建议
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.enterprise.aiAssistant.dashboard();
   * ```
   */
  dashboard(options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get('/api/v1/enterprise/ai-assistant/dashboard', options);
  }

  /**
   * 根据职位和简历生成个性化面试题目
   *
   * @example
   * ```ts
   * const resultString =
   *   await client.v1.enterprise.aiAssistant.generateQuestions({
   *     positionId: 0,
   *     resumeId: 0,
   *   });
   * ```
   */
  generateQuestions(
    query: AIAssistantGenerateQuestionsParams,
    options?: RequestOptions,
  ): APIPromise<ResultString> {
    return this._client.get('/api/v1/enterprise/ai-assistant/generate-questions', { query, ...options });
  }

  /**
   * 获取 AI 推荐的精选职位
   *
   * @example
   * ```ts
   * const resultListBanners =
   *   await client.v1.enterprise.aiAssistant.positionRecommendations();
   * ```
   */
  positionRecommendations(options?: RequestOptions): APIPromise<BannersAPI.ResultListBanners> {
    return this._client.get('/api/v1/enterprise/ai-assistant/position-recommendations', options);
  }

  /**
   * 获取指定职位的简历优化建议
   *
   * @example
   * ```ts
   * const resultListBanners =
   *   await client.v1.enterprise.aiAssistant.resumeOptimization(
   *     { positionId: 1 },
   *   );
   * ```
   */
  resumeOptimization(
    body: AIAssistantResumeOptimizationParams,
    options?: RequestOptions,
  ): APIPromise<BannersAPI.ResultListBanners> {
    return this._client.post('/api/v1/enterprise/ai-assistant/resume-optimization', { body, ...options });
  }

  /**
   * AI 根据对话上下文生成推荐回复
   *
   * @example
   * ```ts
   * const resultString =
   *   await client.v1.enterprise.aiAssistant.suggestReply({
   *     conversationId: 0,
   *   });
   * ```
   */
  suggestReply(query: AIAssistantSuggestReplyParams, options?: RequestOptions): APIPromise<ResultString> {
    return this._client.get('/api/v1/enterprise/ai-assistant/suggest-reply', { query, ...options });
  }
}

/**
 * 统一响应包装类
 */
export interface ResultString {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: string;

  /**
   * 响应消息
   */
  message?: string;
}

export interface AIAssistantGenerateQuestionsParams {
  /**
   * 职位 ID
   */
  positionId: number;

  /**
   * 简历 ID
   */
  resumeId: number;
}

export interface AIAssistantResumeOptimizationParams {
  /**
   * 职位 ID
   */
  positionId: number;
}

export interface AIAssistantSuggestReplyParams {
  /**
   * 会话 ID
   */
  conversationId: number;

  /**
   * 上下文信息
   */
  context?: string;
}

AIAssistant.Setting = Setting;
AIAssistant.Messages = Messages;

export declare namespace AIAssistant {
  export {
    type ResultString as ResultString,
    type AIAssistantGenerateQuestionsParams as AIAssistantGenerateQuestionsParams,
    type AIAssistantResumeOptimizationParams as AIAssistantResumeOptimizationParams,
    type AIAssistantSuggestReplyParams as AIAssistantSuggestReplyParams,
  };

  export {
    Setting as Setting,
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };

  export {
    Messages as Messages,
    type Message as Message,
    type MessageSendResponse as MessageSendResponse,
    type MessageListParams as MessageListParams,
    type MessageSendParams as MessageSendParams,
  };
}
