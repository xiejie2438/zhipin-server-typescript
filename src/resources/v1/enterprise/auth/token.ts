// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AuthTokenAPI from '../../seeker/auth/token';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Token extends APIResource {
  /**
   * 使用刷新令牌获取新的访问令牌
   *
   * @example
   * ```ts
   * const resultLogin =
   *   await client.v1.enterprise.auth.token.refresh({
   *     refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
   *   });
   * ```
   */
  refresh(body: TokenRefreshParams, options?: RequestOptions): APIPromise<AuthTokenAPI.ResultLogin> {
    return this._client.post('/api/v1/enterprise/auth/token/refresh', { body, ...options });
  }
}

export interface TokenRefreshParams {
  /**
   * 刷新令牌
   */
  refreshToken: string;
}

export declare namespace Token {
  export { type TokenRefreshParams as TokenRefreshParams };
}
