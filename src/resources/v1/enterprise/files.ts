// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SeekerFilesAPI from '../seeker/files';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';

export class Files extends APIResource {
  /**
   * 上传普通文件
   *
   * @example
   * ```ts
   * const resultUpload =
   *   await client.v1.enterprise.files.uploadFile({
   *     file: fs.createReadStream('path/to/file'),
   *   });
   * ```
   */
  uploadFile(body: FileUploadFileParams, options?: RequestOptions): APIPromise<SeekerFilesAPI.ResultUpload> {
    return this._client.post('/api/v1/enterprise/files/file', { body, ...options });
  }

  /**
   * 上传图片文件，支持 JPG、PNG、GIF、WebP
   *
   * @example
   * ```ts
   * const resultUpload =
   *   await client.v1.enterprise.files.uploadImage({
   *     file: fs.createReadStream('path/to/file'),
   *   });
   * ```
   */
  uploadImage(
    params: FileUploadImageParams,
    options?: RequestOptions,
  ): APIPromise<SeekerFilesAPI.ResultUpload> {
    const { type, ...body } = params;
    return this._client.post('/api/v1/enterprise/files/image', { query: { type }, body, ...options });
  }
}

export interface FileUploadFileParams {
  /**
   * 文件
   */
  file: Uploadable;
}

export interface FileUploadImageParams {
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
    type FileUploadFileParams as FileUploadFileParams,
    type FileUploadImageParams as FileUploadImageParams,
  };
}
