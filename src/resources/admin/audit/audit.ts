// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ResumesAPI from './resumes';
import { ResumeListParams, ResumeRejectParams, Resumes } from './resumes';
import * as EnterprisesAPI from './enterprises/enterprises';
import { EnterpriseListParams, EnterpriseRejectParams, Enterprises } from './enterprises/enterprises';
import * as JobsAPI from './jobs/jobs';
import { JobListParams, JobRejectParams, Jobs } from './jobs/jobs';

export class Audit extends APIResource {
  resumes: ResumesAPI.Resumes = new ResumesAPI.Resumes(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  enterprises: EnterprisesAPI.Enterprises = new EnterprisesAPI.Enterprises(this._client);
}

Audit.Resumes = Resumes;
Audit.Jobs = Jobs;
Audit.Enterprises = Enterprises;

export declare namespace Audit {
  export {
    Resumes as Resumes,
    type ResumeListParams as ResumeListParams,
    type ResumeRejectParams as ResumeRejectParams,
  };

  export { Jobs as Jobs, type JobListParams as JobListParams, type JobRejectParams as JobRejectParams };

  export {
    Enterprises as Enterprises,
    type EnterpriseListParams as EnterpriseListParams,
    type EnterpriseRejectParams as EnterpriseRejectParams,
  };
}
