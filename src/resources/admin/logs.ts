// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from '../v1/seeker/ai-assistant/messages';
import * as AssistantSettingsAPI from '../v1/seeker/preferences/assistant-settings';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 系统操作日志查询、导出等接口
 */
export class Logs extends APIResource {
  /**
   * 获取指定日志的详细信息
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.get(path`/api/admin/logs/${id}`, options);
  }

  /**
   * 分页获取系统操作日志
   */
  list(
    query: LogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.ResultPageResultMapStringObject> {
    return this._client.get('/api/admin/logs', { query, ...options });
  }

  /**
   * 导出日志数据为 CSV 或 Excel
   */
  export(query: LogExportParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/admin/logs/export', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LogListParams {
  /**
   * 日期(YYYY-MM-DD)
   */
  date?: string;

  /**
   * 搜索关键词(用户名/手机号/IP)
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

  /**
   * 来源: admin/user/system
   */
  source?: string;

  /**
   * 日志类型: operation/error/system
   */
  type?: string;
}

export interface LogExportParams {
  /**
   * 结束日期
   */
  endDate?: string;

  /**
   * 导出格式: csv/xlsx
   */
  format?: string;

  /**
   * 来源
   */
  source?: string;

  /**
   * 开始日期
   */
  startDate?: string;

  /**
   * 日志类型
   */
  type?: string;
}

export declare namespace Logs {
  export { type LogListParams as LogListParams, type LogExportParams as LogExportParams };
}
