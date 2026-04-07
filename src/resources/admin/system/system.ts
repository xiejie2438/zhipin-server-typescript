// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConfigAPI from './config';
import { Config, ConfigListByGroupResponse } from './config';
import * as DictionaryAPI from './dictionary';
import { Dictionary, DictionaryRetrieveResponse } from './dictionary';
import * as NoticeAPI from './notice';
import {
  Notice,
  NoticeListParams,
  NoticeRetrieveResponse,
  ResultListSystemNotices,
  SystemNotice,
} from './notice';

export class System extends APIResource {
  notice: NoticeAPI.Notice = new NoticeAPI.Notice(this._client);
  dictionary: DictionaryAPI.Dictionary = new DictionaryAPI.Dictionary(this._client);
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
}

System.Notice = Notice;
System.Dictionary = Dictionary;
System.Config = Config;

export declare namespace System {
  export {
    Notice as Notice,
    type ResultListSystemNotices as ResultListSystemNotices,
    type SystemNotice as SystemNotice,
    type NoticeRetrieveResponse as NoticeRetrieveResponse,
    type NoticeListParams as NoticeListParams,
  };

  export { Dictionary as Dictionary, type DictionaryRetrieveResponse as DictionaryRetrieveResponse };

  export { Config as Config, type ConfigListByGroupResponse as ConfigListByGroupResponse };
}
