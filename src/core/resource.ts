// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ZhipinServer } from '../client';

export abstract class APIResource {
  protected _client: ZhipinServer;

  constructor(client: ZhipinServer) {
    this._client = client;
  }
}
