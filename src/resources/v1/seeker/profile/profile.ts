// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as EducationAPI from './education';
import {
  Education,
  EducationCreateParams,
  EducationListResponse,
  EducationRequest,
  EducationResponse,
  EducationUpdateParams,
  ResultEducation,
} from './education';
import * as JobIntentionsAPI from './job-intentions';
import {
  JobIntentionJobIntentionsParams,
  JobIntentionRequest,
  JobIntentionResponse,
  JobIntentionRetrieveJobIntentionsResponse,
  JobIntentionUpdateParams,
  JobIntentions,
  ResultJobIntention,
} from './job-intentions';
import * as ProjectsAPI from './projects';
import {
  ProjectCreateParams,
  ProjectExperienceRequest,
  ProjectExperienceResponse,
  ProjectListResponse,
  ProjectUpdateParams,
  Projects,
  ResultProjectExperience,
} from './projects';
import * as QualificationsAPI from './qualifications';
import {
  QualificationCreateParams,
  QualificationCreateResponse,
  QualificationListResponse,
  QualificationResponse,
  Qualifications,
} from './qualifications';
import * as WorkExperienceAPI from './work-experience';
import {
  ResultVoid,
  ResultWorkExperience,
  WorkExperience,
  WorkExperienceRequest,
  WorkExperienceResponse,
  WorkExperienceRetrieveWorkExperienceResponse,
  WorkExperienceUpdateParams,
  WorkExperienceWorkExperienceParams,
} from './work-experience';

export class Profile extends APIResource {
  workExperience: WorkExperienceAPI.WorkExperience = new WorkExperienceAPI.WorkExperience(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  jobIntentions: JobIntentionsAPI.JobIntentions = new JobIntentionsAPI.JobIntentions(this._client);
  education: EducationAPI.Education = new EducationAPI.Education(this._client);
  qualifications: QualificationsAPI.Qualifications = new QualificationsAPI.Qualifications(this._client);
}

Profile.WorkExperience = WorkExperience;
Profile.Projects = Projects;
Profile.JobIntentions = JobIntentions;
Profile.Education = Education;
Profile.Qualifications = Qualifications;

export declare namespace Profile {
  export {
    WorkExperience as WorkExperience,
    type ResultVoid as ResultVoid,
    type ResultWorkExperience as ResultWorkExperience,
    type WorkExperienceRequest as WorkExperienceRequest,
    type WorkExperienceResponse as WorkExperienceResponse,
    type WorkExperienceRetrieveWorkExperienceResponse as WorkExperienceRetrieveWorkExperienceResponse,
    type WorkExperienceUpdateParams as WorkExperienceUpdateParams,
    type WorkExperienceWorkExperienceParams as WorkExperienceWorkExperienceParams,
  };

  export {
    Projects as Projects,
    type ProjectExperienceRequest as ProjectExperienceRequest,
    type ProjectExperienceResponse as ProjectExperienceResponse,
    type ResultProjectExperience as ResultProjectExperience,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
  };

  export {
    JobIntentions as JobIntentions,
    type JobIntentionRequest as JobIntentionRequest,
    type JobIntentionResponse as JobIntentionResponse,
    type ResultJobIntention as ResultJobIntention,
    type JobIntentionRetrieveJobIntentionsResponse as JobIntentionRetrieveJobIntentionsResponse,
    type JobIntentionUpdateParams as JobIntentionUpdateParams,
    type JobIntentionJobIntentionsParams as JobIntentionJobIntentionsParams,
  };

  export {
    Education as Education,
    type EducationRequest as EducationRequest,
    type EducationResponse as EducationResponse,
    type ResultEducation as ResultEducation,
    type EducationListResponse as EducationListResponse,
    type EducationCreateParams as EducationCreateParams,
    type EducationUpdateParams as EducationUpdateParams,
  };

  export {
    Qualifications as Qualifications,
    type QualificationResponse as QualificationResponse,
    type QualificationCreateResponse as QualificationCreateResponse,
    type QualificationListResponse as QualificationListResponse,
    type QualificationCreateParams as QualificationCreateParams,
  };
}
