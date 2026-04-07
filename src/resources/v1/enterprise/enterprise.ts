// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FilesAPI from './files';
import { FileUploadFileParams, FileUploadImageParams, Files } from './files';
import * as MembersAPI from './members';
import {
  MemberAddParams,
  MemberAddResponse,
  MemberDisableParams,
  MemberList,
  MemberListParams,
  MemberListResponse,
  MemberUpdateParams,
  Members,
  ResultMemberDetail,
} from './members';
import * as NotificationsAPI from './notifications';
import { NotificationListParams, Notifications } from './notifications';
import * as PositionsAPI from './positions';
import {
  PositionCreate,
  PositionCreateParams,
  PositionListParams,
  PositionListResponse,
  PositionUpdateParams,
  PositionUpdateStatusParams,
  Positions,
  ResultPositionDetail,
  Statistics,
} from './positions';
import * as QuickRepliesAPI from './quick-replies';
import {
  QuickReplies,
  QuickReplyCreateParams,
  QuickReplyList,
  QuickReplyListParams,
  QuickReplyListResponse,
  QuickReplyUpdateParams,
  ResultQuickReplyList,
} from './quick-replies';
import * as ResumesAPI from './resumes';
import {
  ResumeList,
  ResumeListParams,
  ResumeListResponse,
  ResumeRejectParams,
  ResumeRetrieveResponse,
  ResumeStatisticsParams,
  ResumeUpdateStatusParams,
  ResumeUpdateStatusResponse,
  Resumes,
} from './resumes';
import * as SchedulesAPI from './schedules';
import {
  PositionInfo,
  ResultPageScheduleList,
  ResultScheduleDetail,
  ScheduleCancel,
  ScheduleCancelParams,
  ScheduleCreateParams,
  ScheduleDeleteParams,
  ScheduleListParams,
  ScheduleSubmitFeedbackParams,
  ScheduleUpdateParams,
  Schedules,
  TalentInfo,
  UserInfo,
} from './schedules';
import * as AccountAPI from './account/account';
import { Account } from './account/account';
import * as AIAssistantAPI from './ai-assistant/ai-assistant';
import {
  AIAssistant,
  AIAssistantGenerateQuestionsParams,
  AIAssistantResumeOptimizationParams,
  AIAssistantSuggestReplyParams,
  ResultString,
} from './ai-assistant/ai-assistant';
import * as AuthAPI from './auth/auth';
import { Auth, AuthRefreshParams, AuthRegisterParams } from './auth/auth';
import * as CompaniesAPI from './companies/companies';
import {
  Companies,
  CompanyRequestAdminTransferParams,
  CompanyRequestChangeParams,
} from './companies/companies';
import * as MessageAPI from './message/message';
import { Message } from './message/message';
import * as TalentsAPI from './talents/talents';
import {
  ResultPageTalentList,
  TalentInviteParams,
  TalentListFavoritesParams,
  TalentListParams,
  TalentRetrieveResponse,
  Talents,
} from './talents/talents';
import * as AssistantSettingsAPI from '../seeker/preferences/assistant-settings';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * 用户反馈提交
 */
export class Enterprise extends APIResource {
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);
  resumes: ResumesAPI.Resumes = new ResumesAPI.Resumes(this._client);
  quickReplies: QuickRepliesAPI.QuickReplies = new QuickRepliesAPI.QuickReplies(this._client);
  positions: PositionsAPI.Positions = new PositionsAPI.Positions(this._client);
  message: MessageAPI.Message = new MessageAPI.Message(this._client);
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  companies: CompaniesAPI.Companies = new CompaniesAPI.Companies(this._client);
  aiAssistant: AIAssistantAPI.AIAssistant = new AIAssistantAPI.AIAssistant(this._client);
  account: AccountAPI.Account = new AccountAPI.Account(this._client);
  talents: TalentsAPI.Talents = new TalentsAPI.Talents(this._client);
  notifications: NotificationsAPI.Notifications = new NotificationsAPI.Notifications(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);

  /**
   * 提交问题反馈、建议等
   *
   * @example
   * ```ts
   * const resultMapStringObject =
   *   await client.v1.enterprise.submitFeedback({
   *     content: '发现一个问题...',
   *     type: 'bug',
   *   });
   * ```
   */
  submitFeedback(
    body: EnterpriseSubmitFeedbackParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSettingsAPI.ResultMapStringObject> {
    return this._client.post('/api/v1/enterprise/feedbacks', { body, ...options });
  }
}

export interface EnterpriseSubmitFeedbackParams {
  /**
   * 反馈内容
   */
  content: string;

  /**
   * 反馈类型: bug/suggestion/complaint/other
   */
  type: string;

  /**
   * APP 版本
   */
  appVersion?: string;

  /**
   * 联系方式
   */
  contact?: string;

  /**
   * 截图 URL 列表
   */
  screenshots?: Array<string>;

  /**
   * 反馈标题
   */
  title?: string;
}

Enterprise.Schedules = Schedules;
Enterprise.Resumes = Resumes;
Enterprise.QuickReplies = QuickReplies;
Enterprise.Positions = Positions;
Enterprise.Message = Message;
Enterprise.Members = Members;
Enterprise.Companies = Companies;
Enterprise.AIAssistant = AIAssistant;
Enterprise.Account = Account;
Enterprise.Talents = Talents;
Enterprise.Notifications = Notifications;
Enterprise.Files = Files;
Enterprise.Auth = Auth;

export declare namespace Enterprise {
  export { type EnterpriseSubmitFeedbackParams as EnterpriseSubmitFeedbackParams };

  export {
    Schedules as Schedules,
    type PositionInfo as PositionInfo,
    type ResultPageScheduleList as ResultPageScheduleList,
    type ResultScheduleDetail as ResultScheduleDetail,
    type ScheduleCancel as ScheduleCancel,
    type TalentInfo as TalentInfo,
    type UserInfo as UserInfo,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
    type ScheduleCancelParams as ScheduleCancelParams,
    type ScheduleSubmitFeedbackParams as ScheduleSubmitFeedbackParams,
  };

  export {
    Resumes as Resumes,
    type ResumeList as ResumeList,
    type ResumeRetrieveResponse as ResumeRetrieveResponse,
    type ResumeListResponse as ResumeListResponse,
    type ResumeUpdateStatusResponse as ResumeUpdateStatusResponse,
    type ResumeListParams as ResumeListParams,
    type ResumeRejectParams as ResumeRejectParams,
    type ResumeStatisticsParams as ResumeStatisticsParams,
    type ResumeUpdateStatusParams as ResumeUpdateStatusParams,
  };

  export {
    QuickReplies as QuickReplies,
    type QuickReplyList as QuickReplyList,
    type ResultQuickReplyList as ResultQuickReplyList,
    type QuickReplyListResponse as QuickReplyListResponse,
    type QuickReplyCreateParams as QuickReplyCreateParams,
    type QuickReplyUpdateParams as QuickReplyUpdateParams,
    type QuickReplyListParams as QuickReplyListParams,
  };

  export {
    Positions as Positions,
    type PositionCreate as PositionCreate,
    type ResultPositionDetail as ResultPositionDetail,
    type Statistics as Statistics,
    type PositionListResponse as PositionListResponse,
    type PositionCreateParams as PositionCreateParams,
    type PositionUpdateParams as PositionUpdateParams,
    type PositionListParams as PositionListParams,
    type PositionUpdateStatusParams as PositionUpdateStatusParams,
  };

  export { Message as Message };

  export {
    Members as Members,
    type MemberList as MemberList,
    type ResultMemberDetail as ResultMemberDetail,
    type MemberListResponse as MemberListResponse,
    type MemberAddResponse as MemberAddResponse,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
    type MemberAddParams as MemberAddParams,
    type MemberDisableParams as MemberDisableParams,
  };

  export {
    Companies as Companies,
    type CompanyRequestAdminTransferParams as CompanyRequestAdminTransferParams,
    type CompanyRequestChangeParams as CompanyRequestChangeParams,
  };

  export {
    AIAssistant as AIAssistant,
    type ResultString as ResultString,
    type AIAssistantGenerateQuestionsParams as AIAssistantGenerateQuestionsParams,
    type AIAssistantResumeOptimizationParams as AIAssistantResumeOptimizationParams,
    type AIAssistantSuggestReplyParams as AIAssistantSuggestReplyParams,
  };

  export { Account as Account };

  export {
    Talents as Talents,
    type ResultPageTalentList as ResultPageTalentList,
    type TalentRetrieveResponse as TalentRetrieveResponse,
    type TalentListParams as TalentListParams,
    type TalentInviteParams as TalentInviteParams,
    type TalentListFavoritesParams as TalentListFavoritesParams,
  };

  export { Notifications as Notifications, type NotificationListParams as NotificationListParams };

  export {
    Files as Files,
    type FileUploadFileParams as FileUploadFileParams,
    type FileUploadImageParams as FileUploadImageParams,
  };

  export {
    Auth as Auth,
    type AuthRefreshParams as AuthRefreshParams,
    type AuthRegisterParams as AuthRegisterParams,
  };
}
