// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BannersAPI from './config/banners';
import * as AssistantSettingsAPI from '../v1/seeker/preferences/assistant-settings';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * 平台核心数据统计、趋势分析等接口
 */
export class Statistics extends APIResource {
  /**
   * 获取用户/企业/职位/简历等趋势数据，用于图表展示
   */
  listTrends(
    query: StatisticListTrendsParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get('/api/admin/statistics/trends', { query, ...options });
  }

  /**
   * 获取行业/城市/学历/薪资等分布统计
   */
  retrieveDistribution(
    query: StatisticRetrieveDistributionParams,
    options?: RequestOptions,
  ): APIPromise<BannersAPI.ResultListBanners> {
    return this._client.get('/api/admin/statistics/distribution', { query, ...options });
  }

  /**
   * 获取平台整体招聘漏斗数据
   */
  retrieveFunnel(
    query: StatisticRetrieveFunnelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get('/api/admin/statistics/funnel', { query, ...options });
  }

  /**
   * 获取平台核心数据统计：用户、企业、职位、简历等
   */
  retrieveOverview(
    query: StatisticRetrieveOverviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get('/api/admin/statistics/overview', { query, ...options });
  }

  /**
   * 获取平台实时数据：在线用户数、当前活跃等
   */
  retrieveRealtime(options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get('/api/admin/statistics/realtime', options);
  }
}

export interface StatisticListTrendsParams {
  /**
   * 数据类型: user/enterprise/job/resume
   */
  type: string;

  /**
   * 结束日期
   */
  endDate?: string;

  /**
   * 时间范围: week/month/quarter/year
   */
  range?: string;

  /**
   * 开始日期
   */
  startDate?: string;
}

export interface StatisticRetrieveDistributionParams {
  /**
   * 分布类型: industry/city/education/salary
   */
  type: string;
}

export interface StatisticRetrieveFunnelParams {
  /**
   * 时间范围: week/month/quarter
   */
  range?: string;
}

export interface StatisticRetrieveOverviewParams {
  /**
   * 结束日期(YYYY-MM-DD)，range=custom 时必填
   */
  endDate?: string;

  /**
   * 时间范围: today/yesterday/week/month/custom
   */
  range?: string;

  /**
   * 开始日期(YYYY-MM-DD)，range=custom 时必填
   */
  startDate?: string;
}

export declare namespace Statistics {
  export {
    type StatisticListTrendsParams as StatisticListTrendsParams,
    type StatisticRetrieveDistributionParams as StatisticRetrieveDistributionParams,
    type StatisticRetrieveFunnelParams as StatisticRetrieveFunnelParams,
    type StatisticRetrieveOverviewParams as StatisticRetrieveOverviewParams,
  };
}
