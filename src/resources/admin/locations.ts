// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * 地址搜索、附近地点查询
 */
export class Locations extends APIResource {
  /**
   * 根据经纬度获取附近地点
   */
  listNearby(query: LocationListNearbyParams, options?: RequestOptions): APIPromise<ResultListLocations> {
    return this._client.get('/api/admin/locations/nearby', { query, ...options });
  }

  /**
   * 根据关键词搜索地址
   */
  search(query: LocationSearchParams, options?: RequestOptions): APIPromise<ResultListLocations> {
    return this._client.get('/api/admin/locations/search', { query, ...options });
  }
}

/**
 * 地址响应
 */
export interface LocationResponse {
  /**
   * 地点 ID
   */
  id?: string;

  /**
   * 完整地址
   */
  address?: string;

  /**
   * 城市
   */
  city?: string;

  /**
   * 距离(米)
   */
  distance?: number;

  /**
   * 区县
   */
  district?: string;

  /**
   * 纬度
   */
  latitude?: number;

  /**
   * 经度
   */
  longitude?: number;

  /**
   * 地点名称
   */
  name?: string;
}

/**
 * 统一响应包装类
 */
export interface ResultListLocations {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 响应数据
   */
  data?: Array<LocationResponse>;

  /**
   * 响应消息
   */
  message?: string;
}

export interface LocationListNearbyParams {
  /**
   * 纬度
   */
  latitude: number;

  /**
   * 经度
   */
  longitude: number;

  /**
   * 半径(米)
   */
  radius?: number;
}

export interface LocationSearchParams {
  /**
   * 搜索关键词
   */
  keyword: string;

  /**
   * 限定城市
   */
  city?: string;
}

export declare namespace Locations {
  export {
    type LocationResponse as LocationResponse,
    type ResultListLocations as ResultListLocations,
    type LocationListNearbyParams as LocationListNearbyParams,
    type LocationSearchParams as LocationSearchParams,
  };
}
