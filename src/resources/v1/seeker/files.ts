// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';

export class Files extends APIResource {
  /**
   * 上传普通文件
   *
   * @example
   * ```ts
   * const resultUpload = await client.v1.seeker.files.file({
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  file(body: FileFileParams, options?: RequestOptions): APIPromise<ResultUpload> {
    return this._client.post('/api/v1/seeker/files/file', { body, ...options });
  }

  /**
   * 上传图片文件，支持 JPG、PNG、GIF、WebP
   *
   * @example
   * ```ts
   * const resultUpload = await client.v1.seeker.files.image({
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  image(params: FileImageParams, options?: RequestOptions): APIPromise<ResultUpload> {
    const { type, ...body } = params;
    return this._client.post('/api/v1/seeker/files/image', { query: { type }, body, ...options });
  }
}

/**
 * 统一响应包装类
 */
export interface ResultUpload {
  /**
   * 响应码: 200 成功 其他为错误码
   */
  code?: number;

  /**
   * 上传响应
   */
  data?: ResultUpload.Data;

  /**
   * 响应消息
   */
  message?: string;
}

export namespace ResultUpload {
  /**
   * 上传响应
   */
  export interface Data {
    /**
     * 文件 Key
     */
    fileKey?: string;

    /**
     * 文件名
     */
    filename?: string;

    /**
     * MIME 类型
     */
    mimeType?: string;

    /**
     * 文件大小(字节)
     */
    size?: number;

    /**
     * 存储提供方: local/oss
     */
    storageProvider?: string;

    /**
     * 文件 URL
     */
    url?: string;
  }
}

export interface FileFileParams {
  /**
   * 文件
   */
  file: Uploadable;
}

export interface FileImageParams {
  /**
   * Body param: 图片文件
   */
  file: Uploadable;

  /**
   * Query param: 类型: avatar/logo/license/screenshot
   */
  type?: string;
}

export declare namespace Files {
  export {
    type ResultUpload as ResultUpload,
    type FileFileParams as FileFileParams,
    type FileImageParams as FileImageParams,
  };
}
