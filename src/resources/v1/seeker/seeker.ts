// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ApplicationsAPI from './applications';
import {
  ApplicationCreateParams,
  ApplicationCreateResponse,
  ApplicationListParams,
  ApplicationListResponse,
  ApplicationRetrieveResponse,
  ApplicationRetrieveStatisticsResponse,
  ApplicationUpdateMarkUnsuitableParams,
  Applications,
  TimelineItem,
} from './applications';
import * as FilesAPI from './files';
import { FileFileParams, FileImageParams, Files, ResultUpload } from './files';
import * as JobsAPI from './jobs';
import {
  CompanyInfo,
  JobListParams,
  JobListResponse,
  JobRetrieveCategoriesResponse,
  JobRetrieveHotParams,
  JobRetrieveLatestParams,
  JobRetrieveRecommendedParams,
  JobRetrieveRecommendedResponse,
  JobRetrieveResponse,
  Jobs,
  ResultListJobList,
} from './jobs';
import * as NotificationsAPI from './notifications';
import {
  NotificationListParams,
  Notifications,
  ResultNotificationStats,
  ResultPageResultNotification,
} from './notifications';
import * as SchedulesAPI from './schedules';
import { ScheduleListParams, ScheduleUpdateCancelParams, Schedules } from './schedules';
import * as SkillsAPI from './skills';
import { SkillRetrieveSuggestionsParams, SkillRetrieveSuggestionsResponse, Skills } from './skills';
import * as AccountAPI from './account/account';
import { Account } from './account/account';
import * as AIAssistantAPI from './ai-assistant/ai-assistant';
import {
  AIAssistant,
  AIAssistantJdOptimizeParams,
  AIAssistantRiskAnalysisParams,
} from './ai-assistant/ai-assistant';
import * as AuthAPI from './auth/auth';
import { Auth, AuthRefreshParams, AuthRegisterParams, RegisterRequest } from './auth/auth';
import * as LookupsAPI from './lookups/lookups';
import { Lookups } from './lookups/lookups';
import * as MessageAPI from './message/message';
import { Message } from './message/message';
import * as PreferencesAPI from './preferences/preferences';
import { Preferences } from './preferences/preferences';
import * as ProfileAPI from './profile/profile';
import { Profile } from './profile/profile';

export class Seeker extends APIResource {
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);
  message: MessageAPI.Message = new MessageAPI.Message(this._client);
  account: AccountAPI.Account = new AccountAPI.Account(this._client);
  notifications: NotificationsAPI.Notifications = new NotificationsAPI.Notifications(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  aiAssistant: AIAssistantAPI.AIAssistant = new AIAssistantAPI.AIAssistant(this._client);
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);
  skills: SkillsAPI.Skills = new SkillsAPI.Skills(this._client);
  lookups: LookupsAPI.Lookups = new LookupsAPI.Lookups(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

Seeker.Profile = Profile;
Seeker.Preferences = Preferences;
Seeker.Message = Message;
Seeker.Account = Account;
Seeker.Notifications = Notifications;
Seeker.Files = Files;
Seeker.Auth = Auth;
Seeker.Applications = Applications;
Seeker.AIAssistant = AIAssistant;
Seeker.Schedules = Schedules;
Seeker.Skills = Skills;
Seeker.Lookups = Lookups;
Seeker.Jobs = Jobs;

export declare namespace Seeker {
  export { Profile as Profile };

  export { Preferences as Preferences };

  export { Message as Message };

  export { Account as Account };

  export {
    Notifications as Notifications,
    type ResultNotificationStats as ResultNotificationStats,
    type ResultPageResultNotification as ResultPageResultNotification,
    type NotificationListParams as NotificationListParams,
  };

  export {
    Files as Files,
    type ResultUpload as ResultUpload,
    type FileFileParams as FileFileParams,
    type FileImageParams as FileImageParams,
  };

  export {
    Auth as Auth,
    type RegisterRequest as RegisterRequest,
    type AuthRefreshParams as AuthRefreshParams,
    type AuthRegisterParams as AuthRegisterParams,
  };

  export {
    Applications as Applications,
    type ApplicationListResponse as ApplicationListResponse,
    type TimelineItem as TimelineItem,
    type ApplicationCreateResponse as ApplicationCreateResponse,
    type ApplicationRetrieveResponse as ApplicationRetrieveResponse,
    type ApplicationRetrieveStatisticsResponse as ApplicationRetrieveStatisticsResponse,
    type ApplicationCreateParams as ApplicationCreateParams,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationUpdateMarkUnsuitableParams as ApplicationUpdateMarkUnsuitableParams,
  };

  export {
    AIAssistant as AIAssistant,
    type AIAssistantJdOptimizeParams as AIAssistantJdOptimizeParams,
    type AIAssistantRiskAnalysisParams as AIAssistantRiskAnalysisParams,
  };

  export {
    Schedules as Schedules,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleUpdateCancelParams as ScheduleUpdateCancelParams,
  };

  export {
    Skills as Skills,
    type SkillRetrieveSuggestionsResponse as SkillRetrieveSuggestionsResponse,
    type SkillRetrieveSuggestionsParams as SkillRetrieveSuggestionsParams,
  };

  export { Lookups as Lookups };

  export {
    Jobs as Jobs,
    type CompanyInfo as CompanyInfo,
    type JobListResponse as JobListResponse,
    type ResultListJobList as ResultListJobList,
    type JobRetrieveResponse as JobRetrieveResponse,
    type JobRetrieveCategoriesResponse as JobRetrieveCategoriesResponse,
    type JobRetrieveRecommendedResponse as JobRetrieveRecommendedResponse,
    type JobListParams as JobListParams,
    type JobRetrieveHotParams as JobRetrieveHotParams,
    type JobRetrieveLatestParams as JobRetrieveLatestParams,
    type JobRetrieveRecommendedParams as JobRetrieveRecommendedParams,
  };
}
