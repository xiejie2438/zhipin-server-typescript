// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AutocompleteAPI from './autocomplete';
import {
  Autocomplete,
  AutocompleteRetrieveCompaniesParams,
  AutocompleteRetrieveMajorsParams,
  AutocompleteRetrievePositionsParams,
  AutocompleteRetrieveSchoolsParams,
  ResultListString,
} from './autocomplete';
import * as RegionsAPI from './regions/regions';
import { Regions } from './regions/regions';

export class Lookups extends APIResource {
  regions: RegionsAPI.Regions = new RegionsAPI.Regions(this._client);
  autocomplete: AutocompleteAPI.Autocomplete = new AutocompleteAPI.Autocomplete(this._client);
}

Lookups.Regions = Regions;
Lookups.Autocomplete = Autocomplete;

export declare namespace Lookups {
  export { Regions as Regions };

  export {
    Autocomplete as Autocomplete,
    type ResultListString as ResultListString,
    type AutocompleteRetrieveCompaniesParams as AutocompleteRetrieveCompaniesParams,
    type AutocompleteRetrieveMajorsParams as AutocompleteRetrieveMajorsParams,
    type AutocompleteRetrievePositionsParams as AutocompleteRetrievePositionsParams,
    type AutocompleteRetrieveSchoolsParams as AutocompleteRetrieveSchoolsParams,
  };
}
