// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from './auth';
import { Auth, AuthLoginParams, AuthUpdatePasswordParams } from './auth';
import * as FeedbacksAPI from './feedbacks';
import {
  FeedbackGetStatisticsParams,
  FeedbackListParams,
  FeedbackReplyParams,
  FeedbackUploadAttachmentParams,
  Feedbacks,
} from './feedbacks';
import * as FilesAPI from './files';
import { FileUploadFileParams, FileUploadImageParams, Files } from './files';
import * as JobseekersAPI from './jobseekers';
import { JobseekerListParams, Jobseekers } from './jobseekers';
import * as LocationsAPI from './locations';
import { LocationListNearbyParams, LocationSearchParams, Locations, ResultListLocations } from './locations';
import * as LogsAPI from './logs';
import { LogExportParams, LogListParams, Logs } from './logs';
import * as NotificationsAPI from './notifications';
import { NotificationListParams, Notifications } from './notifications';
import * as StatisticsAPI from './statistics';
import {
  StatisticListTrendsParams,
  StatisticRetrieveDistributionParams,
  StatisticRetrieveFunnelParams,
  StatisticRetrieveOverviewParams,
  Statistics,
} from './statistics';
import * as UsersAPI from './users';
import {
  AdminUser,
  UserCreateParams,
  UserGetLogsParams,
  UserListParams,
  UserUpdateParams,
  Users,
} from './users';
import * as AuditAPI from './audit/audit';
import { Audit } from './audit/audit';
import * as BannersAPI from './config/banners';
import * as ConfigAPI from './config/config';
import { Config } from './config/config';
import * as EnterprisesAPI from './enterprises/enterprises';
import { EnterpriseListParams, Enterprises } from './enterprises/enterprises';
import * as RolesAPI from './roles/roles';
import { Role, RoleCreateParams, RoleListParams, RoleUpdateParams, Roles } from './roles/roles';
import * as SystemAPI from './system/system';
import { System } from './system/system';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * 管理员账号管理、角色权限管理接口
 */
export class Admin extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  notifications: NotificationsAPI.Notifications = new NotificationsAPI.Notifications(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  feedbacks: FeedbacksAPI.Feedbacks = new FeedbacksAPI.Feedbacks(this._client);
  enterprises: EnterprisesAPI.Enterprises = new EnterprisesAPI.Enterprises(this._client);
  audit: AuditAPI.Audit = new AuditAPI.Audit(this._client);
  system: SystemAPI.System = new SystemAPI.System(this._client);
  statistics: StatisticsAPI.Statistics = new StatisticsAPI.Statistics(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  jobseekers: JobseekersAPI.Jobseekers = new JobseekersAPI.Jobseekers(this._client);

  /**
   * 获取所有权限的树形结构
   */
  listPermissions(options?: RequestOptions): APIPromise<BannersAPI.ResultListBanners> {
    return this._client.get('/api/admin/permissions', options);
  }
}

Admin.Users = Users;
Admin.Roles = Roles;
Admin.Config = Config;
Admin.Auth = Auth;
Admin.Notifications = Notifications;
Admin.Files = Files;
Admin.Feedbacks = Feedbacks;
Admin.Enterprises = Enterprises;
Admin.Audit = Audit;
Admin.System = System;
Admin.Statistics = Statistics;
Admin.Logs = Logs;
Admin.Locations = Locations;
Admin.Jobseekers = Jobseekers;

export declare namespace Admin {
  export {
    Users as Users,
    type AdminUser as AdminUser,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserGetLogsParams as UserGetLogsParams,
  };

  export {
    Roles as Roles,
    type Role as Role,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
  };

  export { Config as Config };

  export {
    Auth as Auth,
    type AuthLoginParams as AuthLoginParams,
    type AuthUpdatePasswordParams as AuthUpdatePasswordParams,
  };

  export { Notifications as Notifications, type NotificationListParams as NotificationListParams };

  export {
    Files as Files,
    type FileUploadFileParams as FileUploadFileParams,
    type FileUploadImageParams as FileUploadImageParams,
  };

  export {
    Feedbacks as Feedbacks,
    type FeedbackListParams as FeedbackListParams,
    type FeedbackGetStatisticsParams as FeedbackGetStatisticsParams,
    type FeedbackReplyParams as FeedbackReplyParams,
    type FeedbackUploadAttachmentParams as FeedbackUploadAttachmentParams,
  };

  export { Enterprises as Enterprises, type EnterpriseListParams as EnterpriseListParams };

  export { Audit as Audit };

  export { System as System };

  export {
    Statistics as Statistics,
    type StatisticListTrendsParams as StatisticListTrendsParams,
    type StatisticRetrieveDistributionParams as StatisticRetrieveDistributionParams,
    type StatisticRetrieveFunnelParams as StatisticRetrieveFunnelParams,
    type StatisticRetrieveOverviewParams as StatisticRetrieveOverviewParams,
  };

  export { Logs as Logs, type LogListParams as LogListParams, type LogExportParams as LogExportParams };

  export {
    Locations as Locations,
    type ResultListLocations as ResultListLocations,
    type LocationListNearbyParams as LocationListNearbyParams,
    type LocationSearchParams as LocationSearchParams,
  };

  export { Jobseekers as Jobseekers, type JobseekerListParams as JobseekerListParams };
}
