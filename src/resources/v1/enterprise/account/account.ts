// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MeAPI from './me';
import { Me, MeUpdateParams, MeUpdatePasswordParams, MeUpdatePatchParams, MeUploadAvatarParams } from './me';

export class Account extends APIResource {
  me: MeAPI.Me = new MeAPI.Me(this._client);
}

Account.Me = Me;

export declare namespace Account {
  export {
    Me as Me,
    type MeUpdateParams as MeUpdateParams,
    type MeUpdatePasswordParams as MeUpdatePasswordParams,
    type MeUpdatePatchParams as MeUpdatePatchParams,
    type MeUploadAvatarParams as MeUploadAvatarParams,
  };
}
