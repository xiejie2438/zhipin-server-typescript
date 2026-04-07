// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnterpriseAPI from './enterprise/enterprise';
import { Enterprise, EnterpriseSubmitFeedbackParams } from './enterprise/enterprise';
import * as SeekerAPI from './seeker/seeker';
import { Seeker } from './seeker/seeker';

export class V1 extends APIResource {
  seeker: SeekerAPI.Seeker = new SeekerAPI.Seeker(this._client);
  enterprise: EnterpriseAPI.Enterprise = new EnterpriseAPI.Enterprise(this._client);
}

V1.Seeker = Seeker;
V1.Enterprise = Enterprise;

export declare namespace V1 {
  export { Seeker as Seeker };

  export { Enterprise as Enterprise, type EnterpriseSubmitFeedbackParams as EnterpriseSubmitFeedbackParams };
}
