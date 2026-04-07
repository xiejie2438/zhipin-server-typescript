// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ProvincesAPI from './provinces';
import { Provinces } from './provinces';

export class Regions extends APIResource {
  provinces: ProvincesAPI.Provinces = new ProvincesAPI.Provinces(this._client);
}

Regions.Provinces = Provinces;

export declare namespace Regions {
  export { Provinces as Provinces };
}
