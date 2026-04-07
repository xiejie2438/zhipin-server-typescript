// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MeAPI from './me';
import {
  Me,
  MeAvatarParams,
  MeCreateParams,
  MePatchAllParams,
  MeUpdatePasswordParams,
  ResultMapStringString,
  ResultUserInfo,
  UpdatePasswordRequest,
  UpdateUserRequest,
  UserInfoResponse,
} from './me';

export class Account extends APIResource {
  me: MeAPI.Me = new MeAPI.Me(this._client);
}

Account.Me = Me;

export declare namespace Account {
  export {
    Me as Me,
    type ResultMapStringString as ResultMapStringString,
    type ResultUserInfo as ResultUserInfo,
    type UpdatePasswordRequest as UpdatePasswordRequest,
    type UpdateUserRequest as UpdateUserRequest,
    type UserInfoResponse as UserInfoResponse,
    type MeCreateParams as MeCreateParams,
    type MeAvatarParams as MeAvatarParams,
    type MePatchAllParams as MePatchAllParams,
    type MeUpdatePasswordParams as MeUpdatePasswordParams,
  };
}
