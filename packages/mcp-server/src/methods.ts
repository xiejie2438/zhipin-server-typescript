// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.v1.seeker.profile.workExperience.update',
    fullyQualifiedName: 'v1.seeker.profile.workExperience.update',
    httpMethod: 'put',
    httpPath: '/api/v1/seeker/profile/work-experience/{id}',
  },
  {
    clientCallName: 'client.v1.seeker.profile.workExperience.delete',
    fullyQualifiedName: 'v1.seeker.profile.workExperience.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/seeker/profile/work-experience/{id}',
  },
  {
    clientCallName: 'client.v1.seeker.profile.workExperience.retrieveWorkExperience',
    fullyQualifiedName: 'v1.seeker.profile.workExperience.retrieveWorkExperience',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/profile/work-experience',
  },
  {
    clientCallName: 'client.v1.seeker.profile.workExperience.workExperience',
    fullyQualifiedName: 'v1.seeker.profile.workExperience.workExperience',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/profile/work-experience',
  },
  {
    clientCallName: 'client.v1.seeker.profile.projects.create',
    fullyQualifiedName: 'v1.seeker.profile.projects.create',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/profile/projects',
  },
  {
    clientCallName: 'client.v1.seeker.profile.projects.update',
    fullyQualifiedName: 'v1.seeker.profile.projects.update',
    httpMethod: 'put',
    httpPath: '/api/v1/seeker/profile/projects/{id}',
  },
  {
    clientCallName: 'client.v1.seeker.profile.projects.list',
    fullyQualifiedName: 'v1.seeker.profile.projects.list',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/profile/projects',
  },
  {
    clientCallName: 'client.v1.seeker.profile.projects.delete',
    fullyQualifiedName: 'v1.seeker.profile.projects.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/seeker/profile/projects/{id}',
  },
  {
    clientCallName: 'client.v1.seeker.profile.jobIntentions.update',
    fullyQualifiedName: 'v1.seeker.profile.jobIntentions.update',
    httpMethod: 'put',
    httpPath: '/api/v1/seeker/profile/job-intentions/{id}',
  },
  {
    clientCallName: 'client.v1.seeker.profile.jobIntentions.delete',
    fullyQualifiedName: 'v1.seeker.profile.jobIntentions.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/seeker/profile/job-intentions/{id}',
  },
  {
    clientCallName: 'client.v1.seeker.profile.jobIntentions.jobIntentions',
    fullyQualifiedName: 'v1.seeker.profile.jobIntentions.jobIntentions',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/profile/job-intentions',
  },
  {
    clientCallName: 'client.v1.seeker.profile.jobIntentions.retrieveJobIntentions',
    fullyQualifiedName: 'v1.seeker.profile.jobIntentions.retrieveJobIntentions',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/profile/job-intentions',
  },
  {
    clientCallName: 'client.v1.seeker.profile.education.create',
    fullyQualifiedName: 'v1.seeker.profile.education.create',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/profile/education',
  },
  {
    clientCallName: 'client.v1.seeker.profile.education.update',
    fullyQualifiedName: 'v1.seeker.profile.education.update',
    httpMethod: 'put',
    httpPath: '/api/v1/seeker/profile/education/{id}',
  },
  {
    clientCallName: 'client.v1.seeker.profile.education.list',
    fullyQualifiedName: 'v1.seeker.profile.education.list',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/profile/education',
  },
  {
    clientCallName: 'client.v1.seeker.profile.education.delete',
    fullyQualifiedName: 'v1.seeker.profile.education.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/seeker/profile/education/{id}',
  },
  {
    clientCallName: 'client.v1.seeker.profile.qualifications.create',
    fullyQualifiedName: 'v1.seeker.profile.qualifications.create',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/profile/qualifications',
  },
  {
    clientCallName: 'client.v1.seeker.profile.qualifications.list',
    fullyQualifiedName: 'v1.seeker.profile.qualifications.list',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/profile/qualifications',
  },
  {
    clientCallName: 'client.v1.seeker.profile.qualifications.delete',
    fullyQualifiedName: 'v1.seeker.profile.qualifications.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/seeker/profile/qualifications/{id}',
  },
  {
    clientCallName: 'client.v1.seeker.preferences.assistantSettings.retrieveAssistantSettings',
    fullyQualifiedName: 'v1.seeker.preferences.assistantSettings.retrieveAssistantSettings',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/preferences/assistant-settings',
  },
  {
    clientCallName: 'client.v1.seeker.preferences.assistantSettings.updateAssistantSettings',
    fullyQualifiedName: 'v1.seeker.preferences.assistantSettings.updateAssistantSettings',
    httpMethod: 'put',
    httpPath: '/api/v1/seeker/preferences/assistant-settings',
  },
  {
    clientCallName: 'client.v1.seeker.preferences.commonPhrases.delete',
    fullyQualifiedName: 'v1.seeker.preferences.commonPhrases.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/seeker/preferences/common-phrases/{phraseId}',
  },
  {
    clientCallName: 'client.v1.seeker.preferences.commonPhrases.commonPhrases',
    fullyQualifiedName: 'v1.seeker.preferences.commonPhrases.commonPhrases',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/preferences/common-phrases',
  },
  {
    clientCallName: 'client.v1.seeker.preferences.commonPhrases.retrieveCommonPhrases',
    fullyQualifiedName: 'v1.seeker.preferences.commonPhrases.retrieveCommonPhrases',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/preferences/common-phrases',
  },
  {
    clientCallName: 'client.v1.seeker.preferences.blockedCompanies.delete',
    fullyQualifiedName: 'v1.seeker.preferences.blockedCompanies.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/seeker/preferences/blocked-companies/{blockId}',
  },
  {
    clientCallName: 'client.v1.seeker.preferences.blockedCompanies.blockedCompanies',
    fullyQualifiedName: 'v1.seeker.preferences.blockedCompanies.blockedCompanies',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/preferences/blocked-companies',
  },
  {
    clientCallName: 'client.v1.seeker.preferences.blockedCompanies.retrieveBlockedCompanies',
    fullyQualifiedName: 'v1.seeker.preferences.blockedCompanies.retrieveBlockedCompanies',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/preferences/blocked-companies',
  },
  {
    clientCallName: 'client.v1.seeker.message.recall',
    fullyQualifiedName: 'v1.seeker.message.recall',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/message/{messageId}/recall',
  },
  {
    clientCallName: 'client.v1.seeker.message.conversations.create',
    fullyQualifiedName: 'v1.seeker.message.conversations.create',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/message/conversations',
  },
  {
    clientCallName: 'client.v1.seeker.message.conversations.retrieve',
    fullyQualifiedName: 'v1.seeker.message.conversations.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/message/conversations/{conversationId}',
  },
  {
    clientCallName: 'client.v1.seeker.message.conversations.list',
    fullyQualifiedName: 'v1.seeker.message.conversations.list',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/message/conversations',
  },
  {
    clientCallName: 'client.v1.seeker.message.conversations.delete',
    fullyQualifiedName: 'v1.seeker.message.conversations.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/seeker/message/conversations/{conversationId}',
  },
  {
    clientCallName: 'client.v1.seeker.message.conversations.read',
    fullyQualifiedName: 'v1.seeker.message.conversations.read',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/message/conversations/{conversationId}/read',
  },
  {
    clientCallName: 'client.v1.seeker.message.conversations.updateMute',
    fullyQualifiedName: 'v1.seeker.message.conversations.updateMute',
    httpMethod: 'put',
    httpPath: '/api/v1/seeker/message/conversations/{conversationId}/mute',
  },
  {
    clientCallName: 'client.v1.seeker.message.conversations.updatePin',
    fullyQualifiedName: 'v1.seeker.message.conversations.updatePin',
    httpMethod: 'put',
    httpPath: '/api/v1/seeker/message/conversations/{conversationId}/pin',
  },
  {
    clientCallName: 'client.v1.seeker.message.conversations.messages.create',
    fullyQualifiedName: 'v1.seeker.message.conversations.messages.create',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/message/conversations/{conversationId}/messages',
  },
  {
    clientCallName: 'client.v1.seeker.message.conversations.messages.list',
    fullyQualifiedName: 'v1.seeker.message.conversations.messages.list',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/message/conversations/{conversationId}/messages',
  },
  {
    clientCallName: 'client.v1.seeker.account.me.create',
    fullyQualifiedName: 'v1.seeker.account.me.create',
    httpMethod: 'put',
    httpPath: '/api/v1/seeker/account/me',
  },
  {
    clientCallName: 'client.v1.seeker.account.me.list',
    fullyQualifiedName: 'v1.seeker.account.me.list',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/account/me',
  },
  {
    clientCallName: 'client.v1.seeker.account.me.avatar',
    fullyQualifiedName: 'v1.seeker.account.me.avatar',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/account/me/avatar',
  },
  {
    clientCallName: 'client.v1.seeker.account.me.patchAll',
    fullyQualifiedName: 'v1.seeker.account.me.patchAll',
    httpMethod: 'patch',
    httpPath: '/api/v1/seeker/account/me',
  },
  {
    clientCallName: 'client.v1.seeker.account.me.updatePassword',
    fullyQualifiedName: 'v1.seeker.account.me.updatePassword',
    httpMethod: 'put',
    httpPath: '/api/v1/seeker/account/me/password',
  },
  {
    clientCallName: 'client.v1.seeker.notifications.list',
    fullyQualifiedName: 'v1.seeker.notifications.list',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/notifications',
  },
  {
    clientCallName: 'client.v1.seeker.notifications.delete',
    fullyQualifiedName: 'v1.seeker.notifications.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/seeker/notifications/{notificationId}',
  },
  {
    clientCallName: 'client.v1.seeker.notifications.read',
    fullyQualifiedName: 'v1.seeker.notifications.read',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/notifications/{notificationId}/read',
  },
  {
    clientCallName: 'client.v1.seeker.notifications.readAll',
    fullyQualifiedName: 'v1.seeker.notifications.readAll',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/notifications/read-all',
  },
  {
    clientCallName: 'client.v1.seeker.notifications.retrieveStats',
    fullyQualifiedName: 'v1.seeker.notifications.retrieveStats',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/notifications/stats',
  },
  {
    clientCallName: 'client.v1.seeker.files.file',
    fullyQualifiedName: 'v1.seeker.files.file',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/files/file',
  },
  {
    clientCallName: 'client.v1.seeker.files.image',
    fullyQualifiedName: 'v1.seeker.files.image',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/files/image',
  },
  {
    clientCallName: 'client.v1.seeker.auth.logout',
    fullyQualifiedName: 'v1.seeker.auth.logout',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/auth/logout',
  },
  {
    clientCallName: 'client.v1.seeker.auth.refresh',
    fullyQualifiedName: 'v1.seeker.auth.refresh',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/auth/refresh',
  },
  {
    clientCallName: 'client.v1.seeker.auth.register',
    fullyQualifiedName: 'v1.seeker.auth.register',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/auth/register',
  },
  {
    clientCallName: 'client.v1.seeker.auth.token.refresh',
    fullyQualifiedName: 'v1.seeker.auth.token.refresh',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/auth/token/refresh',
  },
  {
    clientCallName: 'client.v1.seeker.auth.sms.login',
    fullyQualifiedName: 'v1.seeker.auth.sms.login',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/auth/sms/login',
  },
  {
    clientCallName: 'client.v1.seeker.auth.sms.send',
    fullyQualifiedName: 'v1.seeker.auth.sms.send',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/auth/sms/send',
  },
  {
    clientCallName: 'client.v1.seeker.auth.seekerLogin.create',
    fullyQualifiedName: 'v1.seeker.auth.seekerLogin.create',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/auth/login',
  },
  {
    clientCallName: 'client.v1.seeker.auth.seekerLogin.sms',
    fullyQualifiedName: 'v1.seeker.auth.seekerLogin.sms',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/auth/login/sms',
  },
  {
    clientCallName: 'client.v1.seeker.applications.create',
    fullyQualifiedName: 'v1.seeker.applications.create',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/applications',
  },
  {
    clientCallName: 'client.v1.seeker.applications.retrieve',
    fullyQualifiedName: 'v1.seeker.applications.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/applications/{id}',
  },
  {
    clientCallName: 'client.v1.seeker.applications.list',
    fullyQualifiedName: 'v1.seeker.applications.list',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/applications',
  },
  {
    clientCallName: 'client.v1.seeker.applications.delete',
    fullyQualifiedName: 'v1.seeker.applications.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/seeker/applications/{id}',
  },
  {
    clientCallName: 'client.v1.seeker.applications.retrieveStatistics',
    fullyQualifiedName: 'v1.seeker.applications.retrieveStatistics',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/applications/statistics',
  },
  {
    clientCallName: 'client.v1.seeker.applications.updateMarkUnsuitable',
    fullyQualifiedName: 'v1.seeker.applications.updateMarkUnsuitable',
    httpMethod: 'patch',
    httpPath: '/api/v1/seeker/applications/{id}/mark-unsuitable',
  },
  {
    clientCallName: 'client.v1.seeker.aiAssistant.jdOptimize',
    fullyQualifiedName: 'v1.seeker.aiAssistant.jdOptimize',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/ai-assistant/jd-optimize',
  },
  {
    clientCallName: 'client.v1.seeker.aiAssistant.retrieveAnalytics',
    fullyQualifiedName: 'v1.seeker.aiAssistant.retrieveAnalytics',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/ai-assistant/analytics',
  },
  {
    clientCallName: 'client.v1.seeker.aiAssistant.riskAnalysis',
    fullyQualifiedName: 'v1.seeker.aiAssistant.riskAnalysis',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/ai-assistant/risk-analysis',
  },
  {
    clientCallName: 'client.v1.seeker.aiAssistant.messages.create',
    fullyQualifiedName: 'v1.seeker.aiAssistant.messages.create',
    httpMethod: 'post',
    httpPath: '/api/v1/seeker/ai-assistant/messages',
  },
  {
    clientCallName: 'client.v1.seeker.aiAssistant.messages.list',
    fullyQualifiedName: 'v1.seeker.aiAssistant.messages.list',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/ai-assistant/messages',
  },
  {
    clientCallName: 'client.v1.seeker.schedules.retrieve',
    fullyQualifiedName: 'v1.seeker.schedules.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/schedules/{id}',
  },
  {
    clientCallName: 'client.v1.seeker.schedules.list',
    fullyQualifiedName: 'v1.seeker.schedules.list',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/schedules',
  },
  {
    clientCallName: 'client.v1.seeker.schedules.updateCancel',
    fullyQualifiedName: 'v1.seeker.schedules.updateCancel',
    httpMethod: 'patch',
    httpPath: '/api/v1/seeker/schedules/{id}/cancel',
  },
  {
    clientCallName: 'client.v1.seeker.schedules.updateConfirm',
    fullyQualifiedName: 'v1.seeker.schedules.updateConfirm',
    httpMethod: 'patch',
    httpPath: '/api/v1/seeker/schedules/{id}/confirm',
  },
  {
    clientCallName: 'client.v1.seeker.skills.retrieveSuggestions',
    fullyQualifiedName: 'v1.seeker.skills.retrieveSuggestions',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/skills/suggestions',
  },
  {
    clientCallName: 'client.v1.seeker.lookups.regions.provinces.list',
    fullyQualifiedName: 'v1.seeker.lookups.regions.provinces.list',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/lookups/regions/provinces',
  },
  {
    clientCallName: 'client.v1.seeker.lookups.regions.provinces.retrieveCities',
    fullyQualifiedName: 'v1.seeker.lookups.regions.provinces.retrieveCities',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/lookups/regions/provinces/{provinceCode}/cities',
  },
  {
    clientCallName: 'client.v1.seeker.lookups.autocomplete.retrieveCompanies',
    fullyQualifiedName: 'v1.seeker.lookups.autocomplete.retrieveCompanies',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/lookups/autocomplete/companies',
  },
  {
    clientCallName: 'client.v1.seeker.lookups.autocomplete.retrieveMajors',
    fullyQualifiedName: 'v1.seeker.lookups.autocomplete.retrieveMajors',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/lookups/autocomplete/majors',
  },
  {
    clientCallName: 'client.v1.seeker.lookups.autocomplete.retrievePositions',
    fullyQualifiedName: 'v1.seeker.lookups.autocomplete.retrievePositions',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/lookups/autocomplete/positions',
  },
  {
    clientCallName: 'client.v1.seeker.lookups.autocomplete.retrieveSchools',
    fullyQualifiedName: 'v1.seeker.lookups.autocomplete.retrieveSchools',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/lookups/autocomplete/schools',
  },
  {
    clientCallName: 'client.v1.seeker.jobs.retrieve',
    fullyQualifiedName: 'v1.seeker.jobs.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/jobs/{jobId}',
  },
  {
    clientCallName: 'client.v1.seeker.jobs.list',
    fullyQualifiedName: 'v1.seeker.jobs.list',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/jobs',
  },
  {
    clientCallName: 'client.v1.seeker.jobs.retrieveCategories',
    fullyQualifiedName: 'v1.seeker.jobs.retrieveCategories',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/jobs/categories',
  },
  {
    clientCallName: 'client.v1.seeker.jobs.retrieveHot',
    fullyQualifiedName: 'v1.seeker.jobs.retrieveHot',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/jobs/hot',
  },
  {
    clientCallName: 'client.v1.seeker.jobs.retrieveLatest',
    fullyQualifiedName: 'v1.seeker.jobs.retrieveLatest',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/jobs/latest',
  },
  {
    clientCallName: 'client.v1.seeker.jobs.retrieveRecommended',
    fullyQualifiedName: 'v1.seeker.jobs.retrieveRecommended',
    httpMethod: 'get',
    httpPath: '/api/v1/seeker/jobs/recommended',
  },
  {
    clientCallName: 'client.v1.enterprise.submitFeedback',
    fullyQualifiedName: 'v1.enterprise.submitFeedback',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/feedbacks',
  },
  {
    clientCallName: 'client.v1.enterprise.schedules.create',
    fullyQualifiedName: 'v1.enterprise.schedules.create',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/schedules',
  },
  {
    clientCallName: 'client.v1.enterprise.schedules.retrieve',
    fullyQualifiedName: 'v1.enterprise.schedules.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/schedules/{scheduleId}',
  },
  {
    clientCallName: 'client.v1.enterprise.schedules.update',
    fullyQualifiedName: 'v1.enterprise.schedules.update',
    httpMethod: 'put',
    httpPath: '/api/v1/enterprise/schedules/{scheduleId}',
  },
  {
    clientCallName: 'client.v1.enterprise.schedules.list',
    fullyQualifiedName: 'v1.enterprise.schedules.list',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/schedules',
  },
  {
    clientCallName: 'client.v1.enterprise.schedules.delete',
    fullyQualifiedName: 'v1.enterprise.schedules.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/enterprise/schedules/{scheduleId}',
  },
  {
    clientCallName: 'client.v1.enterprise.schedules.cancel',
    fullyQualifiedName: 'v1.enterprise.schedules.cancel',
    httpMethod: 'patch',
    httpPath: '/api/v1/enterprise/schedules/{scheduleId}/cancel',
  },
  {
    clientCallName: 'client.v1.enterprise.schedules.confirm',
    fullyQualifiedName: 'v1.enterprise.schedules.confirm',
    httpMethod: 'patch',
    httpPath: '/api/v1/enterprise/schedules/{scheduleId}/confirm',
  },
  {
    clientCallName: 'client.v1.enterprise.schedules.submitFeedback',
    fullyQualifiedName: 'v1.enterprise.schedules.submitFeedback',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/schedules/{scheduleId}/feedbacks',
  },
  {
    clientCallName: 'client.v1.enterprise.resumes.retrieve',
    fullyQualifiedName: 'v1.enterprise.resumes.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/resumes/{resumeId}',
  },
  {
    clientCallName: 'client.v1.enterprise.resumes.list',
    fullyQualifiedName: 'v1.enterprise.resumes.list',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/resumes',
  },
  {
    clientCallName: 'client.v1.enterprise.resumes.reject',
    fullyQualifiedName: 'v1.enterprise.resumes.reject',
    httpMethod: 'put',
    httpPath: '/api/v1/enterprise/resumes/{resumeId}/reject',
  },
  {
    clientCallName: 'client.v1.enterprise.resumes.statistics',
    fullyQualifiedName: 'v1.enterprise.resumes.statistics',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/resumes/statistics',
  },
  {
    clientCallName: 'client.v1.enterprise.resumes.updateStatus',
    fullyQualifiedName: 'v1.enterprise.resumes.updateStatus',
    httpMethod: 'put',
    httpPath: '/api/v1/enterprise/resumes/{resumeId}/status',
  },
  {
    clientCallName: 'client.v1.enterprise.quickReplies.create',
    fullyQualifiedName: 'v1.enterprise.quickReplies.create',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/quick-replies',
  },
  {
    clientCallName: 'client.v1.enterprise.quickReplies.update',
    fullyQualifiedName: 'v1.enterprise.quickReplies.update',
    httpMethod: 'put',
    httpPath: '/api/v1/enterprise/quick-replies/{id}',
  },
  {
    clientCallName: 'client.v1.enterprise.quickReplies.list',
    fullyQualifiedName: 'v1.enterprise.quickReplies.list',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/quick-replies',
  },
  {
    clientCallName: 'client.v1.enterprise.quickReplies.delete',
    fullyQualifiedName: 'v1.enterprise.quickReplies.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/enterprise/quick-replies/{id}',
  },
  {
    clientCallName: 'client.v1.enterprise.positions.create',
    fullyQualifiedName: 'v1.enterprise.positions.create',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/positions',
  },
  {
    clientCallName: 'client.v1.enterprise.positions.retrieve',
    fullyQualifiedName: 'v1.enterprise.positions.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/positions/{positionId}',
  },
  {
    clientCallName: 'client.v1.enterprise.positions.update',
    fullyQualifiedName: 'v1.enterprise.positions.update',
    httpMethod: 'put',
    httpPath: '/api/v1/enterprise/positions/{positionId}',
  },
  {
    clientCallName: 'client.v1.enterprise.positions.list',
    fullyQualifiedName: 'v1.enterprise.positions.list',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/positions',
  },
  {
    clientCallName: 'client.v1.enterprise.positions.delete',
    fullyQualifiedName: 'v1.enterprise.positions.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/enterprise/positions/{positionId}',
  },
  {
    clientCallName: 'client.v1.enterprise.positions.updateStatus',
    fullyQualifiedName: 'v1.enterprise.positions.updateStatus',
    httpMethod: 'put',
    httpPath: '/api/v1/enterprise/positions/{positionId}/status',
  },
  {
    clientCallName: 'client.v1.enterprise.message.recall',
    fullyQualifiedName: 'v1.enterprise.message.recall',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/message/{messageId}/recall',
  },
  {
    clientCallName: 'client.v1.enterprise.message.conversations.create',
    fullyQualifiedName: 'v1.enterprise.message.conversations.create',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/message/conversations',
  },
  {
    clientCallName: 'client.v1.enterprise.message.conversations.retrieve',
    fullyQualifiedName: 'v1.enterprise.message.conversations.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/message/conversations/{conversationId}',
  },
  {
    clientCallName: 'client.v1.enterprise.message.conversations.list',
    fullyQualifiedName: 'v1.enterprise.message.conversations.list',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/message/conversations',
  },
  {
    clientCallName: 'client.v1.enterprise.message.conversations.delete',
    fullyQualifiedName: 'v1.enterprise.message.conversations.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/enterprise/message/conversations/{conversationId}',
  },
  {
    clientCallName: 'client.v1.enterprise.message.conversations.markRead',
    fullyQualifiedName: 'v1.enterprise.message.conversations.markRead',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/message/conversations/{conversationId}/read',
  },
  {
    clientCallName: 'client.v1.enterprise.message.conversations.mute',
    fullyQualifiedName: 'v1.enterprise.message.conversations.mute',
    httpMethod: 'put',
    httpPath: '/api/v1/enterprise/message/conversations/{conversationId}/mute',
  },
  {
    clientCallName: 'client.v1.enterprise.message.conversations.pin',
    fullyQualifiedName: 'v1.enterprise.message.conversations.pin',
    httpMethod: 'put',
    httpPath: '/api/v1/enterprise/message/conversations/{conversationId}/pin',
  },
  {
    clientCallName: 'client.v1.enterprise.message.conversations.messages.list',
    fullyQualifiedName: 'v1.enterprise.message.conversations.messages.list',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/message/conversations/{conversationId}/messages',
  },
  {
    clientCallName: 'client.v1.enterprise.message.conversations.messages.send',
    fullyQualifiedName: 'v1.enterprise.message.conversations.messages.send',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/message/conversations/{conversationId}/messages',
  },
  {
    clientCallName: 'client.v1.enterprise.members.retrieve',
    fullyQualifiedName: 'v1.enterprise.members.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/members/{memberId}',
  },
  {
    clientCallName: 'client.v1.enterprise.members.update',
    fullyQualifiedName: 'v1.enterprise.members.update',
    httpMethod: 'put',
    httpPath: '/api/v1/enterprise/members/{memberId}',
  },
  {
    clientCallName: 'client.v1.enterprise.members.list',
    fullyQualifiedName: 'v1.enterprise.members.list',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/members',
  },
  {
    clientCallName: 'client.v1.enterprise.members.add',
    fullyQualifiedName: 'v1.enterprise.members.add',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/members',
  },
  {
    clientCallName: 'client.v1.enterprise.members.disable',
    fullyQualifiedName: 'v1.enterprise.members.disable',
    httpMethod: 'put',
    httpPath: '/api/v1/enterprise/members/{memberId}/disable',
  },
  {
    clientCallName: 'client.v1.enterprise.members.enable',
    fullyQualifiedName: 'v1.enterprise.members.enable',
    httpMethod: 'put',
    httpPath: '/api/v1/enterprise/members/{memberId}/enable',
  },
  {
    clientCallName: 'client.v1.enterprise.members.remove',
    fullyQualifiedName: 'v1.enterprise.members.remove',
    httpMethod: 'delete',
    httpPath: '/api/v1/enterprise/members/{memberId}',
  },
  {
    clientCallName: 'client.v1.enterprise.companies.requestAdminTransfer',
    fullyQualifiedName: 'v1.enterprise.companies.requestAdminTransfer',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/companies/admin-transfer-request',
  },
  {
    clientCallName: 'client.v1.enterprise.companies.requestChange',
    fullyQualifiedName: 'v1.enterprise.companies.requestChange',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/companies/change-request',
  },
  {
    clientCallName: 'client.v1.enterprise.companies.current.retrieve',
    fullyQualifiedName: 'v1.enterprise.companies.current.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/companies/current',
  },
  {
    clientCallName: 'client.v1.enterprise.companies.current.update',
    fullyQualifiedName: 'v1.enterprise.companies.current.update',
    httpMethod: 'put',
    httpPath: '/api/v1/enterprise/companies/current',
  },
  {
    clientCallName: 'client.v1.enterprise.companies.current.uploadBusinessLicense',
    fullyQualifiedName: 'v1.enterprise.companies.current.uploadBusinessLicense',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/companies/current/business-license',
  },
  {
    clientCallName: 'client.v1.enterprise.companies.current.uploadLogo',
    fullyQualifiedName: 'v1.enterprise.companies.current.uploadLogo',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/companies/current/logo',
  },
  {
    clientCallName: 'client.v1.enterprise.aiAssistant.analyzeResume',
    fullyQualifiedName: 'v1.enterprise.aiAssistant.analyzeResume',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/ai-assistant/analyze-resume/{resumeId}',
  },
  {
    clientCallName: 'client.v1.enterprise.aiAssistant.dashboard',
    fullyQualifiedName: 'v1.enterprise.aiAssistant.dashboard',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/ai-assistant/dashboard',
  },
  {
    clientCallName: 'client.v1.enterprise.aiAssistant.generateQuestions',
    fullyQualifiedName: 'v1.enterprise.aiAssistant.generateQuestions',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/ai-assistant/generate-questions',
  },
  {
    clientCallName: 'client.v1.enterprise.aiAssistant.positionRecommendations',
    fullyQualifiedName: 'v1.enterprise.aiAssistant.positionRecommendations',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/ai-assistant/position-recommendations',
  },
  {
    clientCallName: 'client.v1.enterprise.aiAssistant.resumeOptimization',
    fullyQualifiedName: 'v1.enterprise.aiAssistant.resumeOptimization',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/ai-assistant/resume-optimization',
  },
  {
    clientCallName: 'client.v1.enterprise.aiAssistant.suggestReply',
    fullyQualifiedName: 'v1.enterprise.aiAssistant.suggestReply',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/ai-assistant/suggest-reply',
  },
  {
    clientCallName: 'client.v1.enterprise.aiAssistant.setting.retrieve',
    fullyQualifiedName: 'v1.enterprise.aiAssistant.setting.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/ai-assistant/setting',
  },
  {
    clientCallName: 'client.v1.enterprise.aiAssistant.setting.update',
    fullyQualifiedName: 'v1.enterprise.aiAssistant.setting.update',
    httpMethod: 'put',
    httpPath: '/api/v1/enterprise/ai-assistant/setting',
  },
  {
    clientCallName: 'client.v1.enterprise.aiAssistant.messages.list',
    fullyQualifiedName: 'v1.enterprise.aiAssistant.messages.list',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/ai-assistant/messages',
  },
  {
    clientCallName: 'client.v1.enterprise.aiAssistant.messages.send',
    fullyQualifiedName: 'v1.enterprise.aiAssistant.messages.send',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/ai-assistant/messages',
  },
  {
    clientCallName: 'client.v1.enterprise.account.me.retrieve',
    fullyQualifiedName: 'v1.enterprise.account.me.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/account/me',
  },
  {
    clientCallName: 'client.v1.enterprise.account.me.update',
    fullyQualifiedName: 'v1.enterprise.account.me.update',
    httpMethod: 'put',
    httpPath: '/api/v1/enterprise/account/me',
  },
  {
    clientCallName: 'client.v1.enterprise.account.me.updatePassword',
    fullyQualifiedName: 'v1.enterprise.account.me.updatePassword',
    httpMethod: 'put',
    httpPath: '/api/v1/enterprise/account/me/password',
  },
  {
    clientCallName: 'client.v1.enterprise.account.me.updatePatch',
    fullyQualifiedName: 'v1.enterprise.account.me.updatePatch',
    httpMethod: 'patch',
    httpPath: '/api/v1/enterprise/account/me',
  },
  {
    clientCallName: 'client.v1.enterprise.account.me.uploadAvatar',
    fullyQualifiedName: 'v1.enterprise.account.me.uploadAvatar',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/account/me/avatar',
  },
  {
    clientCallName: 'client.v1.enterprise.talents.retrieve',
    fullyQualifiedName: 'v1.enterprise.talents.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/talents/{talentId}',
  },
  {
    clientCallName: 'client.v1.enterprise.talents.list',
    fullyQualifiedName: 'v1.enterprise.talents.list',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/talents',
  },
  {
    clientCallName: 'client.v1.enterprise.talents.invite',
    fullyQualifiedName: 'v1.enterprise.talents.invite',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/talents/{talentId}/invite',
  },
  {
    clientCallName: 'client.v1.enterprise.talents.listFavorites',
    fullyQualifiedName: 'v1.enterprise.talents.listFavorites',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/talents/favorites',
  },
  {
    clientCallName: 'client.v1.enterprise.talents.favorite.add',
    fullyQualifiedName: 'v1.enterprise.talents.favorite.add',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/talents/{talentId}/favorite',
  },
  {
    clientCallName: 'client.v1.enterprise.talents.favorite.remove',
    fullyQualifiedName: 'v1.enterprise.talents.favorite.remove',
    httpMethod: 'delete',
    httpPath: '/api/v1/enterprise/talents/{talentId}/favorite',
  },
  {
    clientCallName: 'client.v1.enterprise.notifications.list',
    fullyQualifiedName: 'v1.enterprise.notifications.list',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/notifications',
  },
  {
    clientCallName: 'client.v1.enterprise.notifications.delete',
    fullyQualifiedName: 'v1.enterprise.notifications.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/enterprise/notifications/{notificationId}',
  },
  {
    clientCallName: 'client.v1.enterprise.notifications.markAllRead',
    fullyQualifiedName: 'v1.enterprise.notifications.markAllRead',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/notifications/read-all',
  },
  {
    clientCallName: 'client.v1.enterprise.notifications.markRead',
    fullyQualifiedName: 'v1.enterprise.notifications.markRead',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/notifications/{notificationId}/read',
  },
  {
    clientCallName: 'client.v1.enterprise.notifications.statistics',
    fullyQualifiedName: 'v1.enterprise.notifications.statistics',
    httpMethod: 'get',
    httpPath: '/api/v1/enterprise/notifications/stats',
  },
  {
    clientCallName: 'client.v1.enterprise.files.uploadFile',
    fullyQualifiedName: 'v1.enterprise.files.uploadFile',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/files/file',
  },
  {
    clientCallName: 'client.v1.enterprise.files.uploadImage',
    fullyQualifiedName: 'v1.enterprise.files.uploadImage',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/files/image',
  },
  {
    clientCallName: 'client.v1.enterprise.auth.enterpriseLogin',
    fullyQualifiedName: 'v1.enterprise.auth.enterpriseLogin',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/auth/login',
  },
  {
    clientCallName: 'client.v1.enterprise.auth.logout',
    fullyQualifiedName: 'v1.enterprise.auth.logout',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/auth/logout',
  },
  {
    clientCallName: 'client.v1.enterprise.auth.refresh',
    fullyQualifiedName: 'v1.enterprise.auth.refresh',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/auth/refresh',
  },
  {
    clientCallName: 'client.v1.enterprise.auth.register',
    fullyQualifiedName: 'v1.enterprise.auth.register',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/auth/register',
  },
  {
    clientCallName: 'client.v1.enterprise.auth.token.refresh',
    fullyQualifiedName: 'v1.enterprise.auth.token.refresh',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/auth/token/refresh',
  },
  {
    clientCallName: 'client.v1.enterprise.auth.sms.login',
    fullyQualifiedName: 'v1.enterprise.auth.sms.login',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/auth/sms/login',
  },
  {
    clientCallName: 'client.v1.enterprise.auth.sms.send',
    fullyQualifiedName: 'v1.enterprise.auth.sms.send',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/auth/sms/send',
  },
  {
    clientCallName: 'client.v1.enterprise.auth.login.sms',
    fullyQualifiedName: 'v1.enterprise.auth.login.sms',
    httpMethod: 'post',
    httpPath: '/api/v1/enterprise/auth/login/sms',
  },
  {
    clientCallName: 'client.admin.listPermissions',
    fullyQualifiedName: 'admin.listPermissions',
    httpMethod: 'get',
    httpPath: '/api/admin/permissions',
  },
  {
    clientCallName: 'client.admin.users.create',
    fullyQualifiedName: 'admin.users.create',
    httpMethod: 'post',
    httpPath: '/api/admin/users',
  },
  {
    clientCallName: 'client.admin.users.retrieve',
    fullyQualifiedName: 'admin.users.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/users/{id}',
  },
  {
    clientCallName: 'client.admin.users.update',
    fullyQualifiedName: 'admin.users.update',
    httpMethod: 'put',
    httpPath: '/api/admin/users/{id}',
  },
  {
    clientCallName: 'client.admin.users.list',
    fullyQualifiedName: 'admin.users.list',
    httpMethod: 'get',
    httpPath: '/api/admin/users',
  },
  {
    clientCallName: 'client.admin.users.disable',
    fullyQualifiedName: 'admin.users.disable',
    httpMethod: 'post',
    httpPath: '/api/admin/users/{id}/disable',
  },
  {
    clientCallName: 'client.admin.users.enable',
    fullyQualifiedName: 'admin.users.enable',
    httpMethod: 'post',
    httpPath: '/api/admin/users/{id}/enable',
  },
  {
    clientCallName: 'client.admin.users.getLogs',
    fullyQualifiedName: 'admin.users.getLogs',
    httpMethod: 'get',
    httpPath: '/api/admin/users/{id}/logs',
  },
  {
    clientCallName: 'client.admin.users.resetPassword',
    fullyQualifiedName: 'admin.users.resetPassword',
    httpMethod: 'post',
    httpPath: '/api/admin/users/{id}/reset-password',
  },
  {
    clientCallName: 'client.admin.roles.create',
    fullyQualifiedName: 'admin.roles.create',
    httpMethod: 'post',
    httpPath: '/api/admin/roles',
  },
  {
    clientCallName: 'client.admin.roles.retrieve',
    fullyQualifiedName: 'admin.roles.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/roles/{id}',
  },
  {
    clientCallName: 'client.admin.roles.update',
    fullyQualifiedName: 'admin.roles.update',
    httpMethod: 'put',
    httpPath: '/api/admin/roles/{id}',
  },
  {
    clientCallName: 'client.admin.roles.list',
    fullyQualifiedName: 'admin.roles.list',
    httpMethod: 'get',
    httpPath: '/api/admin/roles',
  },
  {
    clientCallName: 'client.admin.roles.delete',
    fullyQualifiedName: 'admin.roles.delete',
    httpMethod: 'delete',
    httpPath: '/api/admin/roles/{id}',
  },
  {
    clientCallName: 'client.admin.roles.permissions.retrieve',
    fullyQualifiedName: 'admin.roles.permissions.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/roles/{id}/permissions',
  },
  {
    clientCallName: 'client.admin.roles.permissions.update',
    fullyQualifiedName: 'admin.roles.permissions.update',
    httpMethod: 'put',
    httpPath: '/api/admin/roles/{id}/permissions',
  },
  {
    clientCallName: 'client.admin.config.provinces.create',
    fullyQualifiedName: 'admin.config.provinces.create',
    httpMethod: 'post',
    httpPath: '/api/admin/config/provinces',
  },
  {
    clientCallName: 'client.admin.config.provinces.update',
    fullyQualifiedName: 'admin.config.provinces.update',
    httpMethod: 'put',
    httpPath: '/api/admin/config/provinces/{id}',
  },
  {
    clientCallName: 'client.admin.config.provinces.list',
    fullyQualifiedName: 'admin.config.provinces.list',
    httpMethod: 'get',
    httpPath: '/api/admin/config/provinces',
  },
  {
    clientCallName: 'client.admin.config.provinces.delete',
    fullyQualifiedName: 'admin.config.provinces.delete',
    httpMethod: 'delete',
    httpPath: '/api/admin/config/provinces/{id}',
  },
  {
    clientCallName: 'client.admin.config.privacyPolicy.retrievePrivacyPolicy',
    fullyQualifiedName: 'admin.config.privacyPolicy.retrievePrivacyPolicy',
    httpMethod: 'get',
    httpPath: '/api/admin/config/privacy-policy',
  },
  {
    clientCallName: 'client.admin.config.privacyPolicy.updatePrivacyPolicy',
    fullyQualifiedName: 'admin.config.privacyPolicy.updatePrivacyPolicy',
    httpMethod: 'put',
    httpPath: '/api/admin/config/privacy-policy',
  },
  {
    clientCallName: 'client.admin.config.jobTypes.update',
    fullyQualifiedName: 'admin.config.jobTypes.update',
    httpMethod: 'put',
    httpPath: '/api/admin/config/job-types/{id}',
  },
  {
    clientCallName: 'client.admin.config.jobTypes.delete',
    fullyQualifiedName: 'admin.config.jobTypes.delete',
    httpMethod: 'delete',
    httpPath: '/api/admin/config/job-types/{id}',
  },
  {
    clientCallName: 'client.admin.config.jobSubcategories.update',
    fullyQualifiedName: 'admin.config.jobSubcategories.update',
    httpMethod: 'put',
    httpPath: '/api/admin/config/job-subcategories/{id}',
  },
  {
    clientCallName: 'client.admin.config.jobSubcategories.delete',
    fullyQualifiedName: 'admin.config.jobSubcategories.delete',
    httpMethod: 'delete',
    httpPath: '/api/admin/config/job-subcategories/{id}',
  },
  {
    clientCallName: 'client.admin.config.jobSubcategories.types.create',
    fullyQualifiedName: 'admin.config.jobSubcategories.types.create',
    httpMethod: 'post',
    httpPath: '/api/admin/config/job-subcategories/{subcategoryId}/types',
  },
  {
    clientCallName: 'client.admin.config.jobSubcategories.types.list',
    fullyQualifiedName: 'admin.config.jobSubcategories.types.list',
    httpMethod: 'get',
    httpPath: '/api/admin/config/job-subcategories/{subcategoryId}/types',
  },
  {
    clientCallName: 'client.admin.config.jobCategories.update',
    fullyQualifiedName: 'admin.config.jobCategories.update',
    httpMethod: 'put',
    httpPath: '/api/admin/config/job-categories/{id}',
  },
  {
    clientCallName: 'client.admin.config.jobCategories.delete',
    fullyQualifiedName: 'admin.config.jobCategories.delete',
    httpMethod: 'delete',
    httpPath: '/api/admin/config/job-categories/{id}',
  },
  {
    clientCallName: 'client.admin.config.jobCategories.jobCategories',
    fullyQualifiedName: 'admin.config.jobCategories.jobCategories',
    httpMethod: 'post',
    httpPath: '/api/admin/config/job-categories',
  },
  {
    clientCallName: 'client.admin.config.jobCategories.retrieveJobCategories',
    fullyQualifiedName: 'admin.config.jobCategories.retrieveJobCategories',
    httpMethod: 'get',
    httpPath: '/api/admin/config/job-categories',
  },
  {
    clientCallName: 'client.admin.config.jobCategories.subcategories.create',
    fullyQualifiedName: 'admin.config.jobCategories.subcategories.create',
    httpMethod: 'post',
    httpPath: '/api/admin/config/job-categories/{categoryId}/subcategories',
  },
  {
    clientCallName: 'client.admin.config.jobCategories.subcategories.list',
    fullyQualifiedName: 'admin.config.jobCategories.subcategories.list',
    httpMethod: 'get',
    httpPath: '/api/admin/config/job-categories/{categoryId}/subcategories',
  },
  {
    clientCallName: 'client.admin.config.display.list',
    fullyQualifiedName: 'admin.config.display.list',
    httpMethod: 'get',
    httpPath: '/api/admin/config/display',
  },
  {
    clientCallName: 'client.admin.config.display.updateFeatures',
    fullyQualifiedName: 'admin.config.display.updateFeatures',
    httpMethod: 'put',
    httpPath: '/api/admin/config/display/features',
  },
  {
    clientCallName: 'client.admin.config.display.updateHotPositions',
    fullyQualifiedName: 'admin.config.display.updateHotPositions',
    httpMethod: 'put',
    httpPath: '/api/admin/config/display/hot-positions',
  },
  {
    clientCallName: 'client.admin.config.display.banners.create',
    fullyQualifiedName: 'admin.config.display.banners.create',
    httpMethod: 'put',
    httpPath: '/api/admin/config/display/banners',
  },
  {
    clientCallName: 'client.admin.config.display.banners.upload',
    fullyQualifiedName: 'admin.config.display.banners.upload',
    httpMethod: 'post',
    httpPath: '/api/admin/config/display/banners/upload',
  },
  {
    clientCallName: 'client.admin.config.dictionary.retrieve',
    fullyQualifiedName: 'admin.config.dictionary.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/config/dictionary/{type}',
  },
  {
    clientCallName: 'client.admin.config.dictionary.update',
    fullyQualifiedName: 'admin.config.dictionary.update',
    httpMethod: 'post',
    httpPath: '/api/admin/config/dictionary/{type}',
  },
  {
    clientCallName: 'client.admin.config.dictionary.delete',
    fullyQualifiedName: 'admin.config.dictionary.delete',
    httpMethod: 'delete',
    httpPath: '/api/admin/config/dictionary/{type}/{id}',
  },
  {
    clientCallName: 'client.admin.config.dictionary.deleteBatch',
    fullyQualifiedName: 'admin.config.dictionary.deleteBatch',
    httpMethod: 'delete',
    httpPath: '/api/admin/config/dictionary/{type}/batch',
  },
  {
    clientCallName: 'client.admin.config.dictionary.retrieveTypes',
    fullyQualifiedName: 'admin.config.dictionary.retrieveTypes',
    httpMethod: 'get',
    httpPath: '/api/admin/config/dictionary/types',
  },
  {
    clientCallName: 'client.admin.config.dictionary.updateStatus',
    fullyQualifiedName: 'admin.config.dictionary.updateStatus',
    httpMethod: 'put',
    httpPath: '/api/admin/config/dictionary/{type}/{id}/status',
  },
  {
    clientCallName: 'client.admin.config.cities.create',
    fullyQualifiedName: 'admin.config.cities.create',
    httpMethod: 'post',
    httpPath: '/api/admin/config/cities',
  },
  {
    clientCallName: 'client.admin.config.cities.update',
    fullyQualifiedName: 'admin.config.cities.update',
    httpMethod: 'put',
    httpPath: '/api/admin/config/cities/{id}',
  },
  {
    clientCallName: 'client.admin.config.cities.list',
    fullyQualifiedName: 'admin.config.cities.list',
    httpMethod: 'get',
    httpPath: '/api/admin/config/cities',
  },
  {
    clientCallName: 'client.admin.config.cities.delete',
    fullyQualifiedName: 'admin.config.cities.delete',
    httpMethod: 'delete',
    httpPath: '/api/admin/config/cities/{id}',
  },
  {
    clientCallName: 'client.admin.config.banners.create',
    fullyQualifiedName: 'admin.config.banners.create',
    httpMethod: 'put',
    httpPath: '/api/admin/config/banners',
  },
  {
    clientCallName: 'client.admin.config.banners.list',
    fullyQualifiedName: 'admin.config.banners.list',
    httpMethod: 'get',
    httpPath: '/api/admin/config/banners',
  },
  {
    clientCallName: 'client.admin.config.banners.upload',
    fullyQualifiedName: 'admin.config.banners.upload',
    httpMethod: 'post',
    httpPath: '/api/admin/config/banners/upload',
  },
  {
    clientCallName: 'client.admin.config.announcements.create',
    fullyQualifiedName: 'admin.config.announcements.create',
    httpMethod: 'post',
    httpPath: '/api/admin/config/announcements',
  },
  {
    clientCallName: 'client.admin.config.announcements.retrieve',
    fullyQualifiedName: 'admin.config.announcements.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/config/announcements/{id}',
  },
  {
    clientCallName: 'client.admin.config.announcements.update',
    fullyQualifiedName: 'admin.config.announcements.update',
    httpMethod: 'put',
    httpPath: '/api/admin/config/announcements/{id}',
  },
  {
    clientCallName: 'client.admin.config.announcements.list',
    fullyQualifiedName: 'admin.config.announcements.list',
    httpMethod: 'get',
    httpPath: '/api/admin/config/announcements',
  },
  {
    clientCallName: 'client.admin.config.announcements.delete',
    fullyQualifiedName: 'admin.config.announcements.delete',
    httpMethod: 'delete',
    httpPath: '/api/admin/config/announcements/{id}',
  },
  {
    clientCallName: 'client.admin.config.bannedWords.delete',
    fullyQualifiedName: 'admin.config.bannedWords.delete',
    httpMethod: 'delete',
    httpPath: '/api/admin/config/banned-words/{id}',
  },
  {
    clientCallName: 'client.admin.config.bannedWords.bannedWords',
    fullyQualifiedName: 'admin.config.bannedWords.bannedWords',
    httpMethod: 'post',
    httpPath: '/api/admin/config/banned-words',
  },
  {
    clientCallName: 'client.admin.config.bannedWords.retrieveBannedWords',
    fullyQualifiedName: 'admin.config.bannedWords.retrieveBannedWords',
    httpMethod: 'get',
    httpPath: '/api/admin/config/banned-words',
  },
  {
    clientCallName: 'client.admin.auth.adminLogin',
    fullyQualifiedName: 'admin.auth.adminLogin',
    httpMethod: 'post',
    httpPath: '/api/admin/auth/login',
  },
  {
    clientCallName: 'client.admin.auth.logout',
    fullyQualifiedName: 'admin.auth.logout',
    httpMethod: 'post',
    httpPath: '/api/admin/auth/logout',
  },
  {
    clientCallName: 'client.admin.auth.retrieveProfile',
    fullyQualifiedName: 'admin.auth.retrieveProfile',
    httpMethod: 'get',
    httpPath: '/api/admin/auth/profile',
  },
  {
    clientCallName: 'client.admin.auth.updatePassword',
    fullyQualifiedName: 'admin.auth.updatePassword',
    httpMethod: 'put',
    httpPath: '/api/admin/auth/password',
  },
  {
    clientCallName: 'client.admin.notifications.list',
    fullyQualifiedName: 'admin.notifications.list',
    httpMethod: 'get',
    httpPath: '/api/admin/notifications',
  },
  {
    clientCallName: 'client.admin.notifications.markAllAsRead',
    fullyQualifiedName: 'admin.notifications.markAllAsRead',
    httpMethod: 'post',
    httpPath: '/api/admin/notifications/read-all',
  },
  {
    clientCallName: 'client.admin.notifications.markAsRead',
    fullyQualifiedName: 'admin.notifications.markAsRead',
    httpMethod: 'post',
    httpPath: '/api/admin/notifications/{id}/read',
  },
  {
    clientCallName: 'client.admin.files.uploadFile',
    fullyQualifiedName: 'admin.files.uploadFile',
    httpMethod: 'post',
    httpPath: '/api/admin/files/file',
  },
  {
    clientCallName: 'client.admin.files.uploadImage',
    fullyQualifiedName: 'admin.files.uploadImage',
    httpMethod: 'post',
    httpPath: '/api/admin/files/image',
  },
  {
    clientCallName: 'client.admin.feedbacks.retrieve',
    fullyQualifiedName: 'admin.feedbacks.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/feedbacks/{id}',
  },
  {
    clientCallName: 'client.admin.feedbacks.list',
    fullyQualifiedName: 'admin.feedbacks.list',
    httpMethod: 'get',
    httpPath: '/api/admin/feedbacks',
  },
  {
    clientCallName: 'client.admin.feedbacks.getStatistics',
    fullyQualifiedName: 'admin.feedbacks.getStatistics',
    httpMethod: 'get',
    httpPath: '/api/admin/feedbacks/statistics',
  },
  {
    clientCallName: 'client.admin.feedbacks.reply',
    fullyQualifiedName: 'admin.feedbacks.reply',
    httpMethod: 'post',
    httpPath: '/api/admin/feedbacks/{id}/reply',
  },
  {
    clientCallName: 'client.admin.feedbacks.uploadAttachment',
    fullyQualifiedName: 'admin.feedbacks.uploadAttachment',
    httpMethod: 'post',
    httpPath: '/api/admin/feedbacks/attachments',
  },
  {
    clientCallName: 'client.admin.enterprises.retrieve',
    fullyQualifiedName: 'admin.enterprises.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/enterprises/{id}',
  },
  {
    clientCallName: 'client.admin.enterprises.list',
    fullyQualifiedName: 'admin.enterprises.list',
    httpMethod: 'get',
    httpPath: '/api/admin/enterprises',
  },
  {
    clientCallName: 'client.admin.enterprises.disable',
    fullyQualifiedName: 'admin.enterprises.disable',
    httpMethod: 'post',
    httpPath: '/api/admin/enterprises/{id}/disable',
  },
  {
    clientCallName: 'client.admin.enterprises.enable',
    fullyQualifiedName: 'admin.enterprises.enable',
    httpMethod: 'post',
    httpPath: '/api/admin/enterprises/{id}/enable',
  },
  {
    clientCallName: 'client.admin.enterprises.changeRequests.retrieve',
    fullyQualifiedName: 'admin.enterprises.changeRequests.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/enterprises/change-requests/{id}',
  },
  {
    clientCallName: 'client.admin.enterprises.changeRequests.list',
    fullyQualifiedName: 'admin.enterprises.changeRequests.list',
    httpMethod: 'get',
    httpPath: '/api/admin/enterprises/change-requests',
  },
  {
    clientCallName: 'client.admin.enterprises.changeRequests.approve',
    fullyQualifiedName: 'admin.enterprises.changeRequests.approve',
    httpMethod: 'post',
    httpPath: '/api/admin/enterprises/change-requests/{id}/approve',
  },
  {
    clientCallName: 'client.admin.enterprises.changeRequests.reject',
    fullyQualifiedName: 'admin.enterprises.changeRequests.reject',
    httpMethod: 'post',
    httpPath: '/api/admin/enterprises/change-requests/{id}/reject',
  },
  {
    clientCallName: 'client.admin.enterprises.adminTransferRequests.retrieve',
    fullyQualifiedName: 'admin.enterprises.adminTransferRequests.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/enterprises/admin-transfer-requests/{id}',
  },
  {
    clientCallName: 'client.admin.enterprises.adminTransferRequests.list',
    fullyQualifiedName: 'admin.enterprises.adminTransferRequests.list',
    httpMethod: 'get',
    httpPath: '/api/admin/enterprises/admin-transfer-requests',
  },
  {
    clientCallName: 'client.admin.enterprises.adminTransferRequests.approve',
    fullyQualifiedName: 'admin.enterprises.adminTransferRequests.approve',
    httpMethod: 'post',
    httpPath: '/api/admin/enterprises/admin-transfer-requests/{id}/approve',
  },
  {
    clientCallName: 'client.admin.enterprises.adminTransferRequests.reject',
    fullyQualifiedName: 'admin.enterprises.adminTransferRequests.reject',
    httpMethod: 'post',
    httpPath: '/api/admin/enterprises/admin-transfer-requests/{id}/reject',
  },
  {
    clientCallName: 'client.admin.audit.resumes.retrieve',
    fullyQualifiedName: 'admin.audit.resumes.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/audit/resumes/{id}',
  },
  {
    clientCallName: 'client.admin.audit.resumes.list',
    fullyQualifiedName: 'admin.audit.resumes.list',
    httpMethod: 'get',
    httpPath: '/api/admin/audit/resumes',
  },
  {
    clientCallName: 'client.admin.audit.resumes.approve',
    fullyQualifiedName: 'admin.audit.resumes.approve',
    httpMethod: 'post',
    httpPath: '/api/admin/audit/resumes/{id}/approve',
  },
  {
    clientCallName: 'client.admin.audit.resumes.reject',
    fullyQualifiedName: 'admin.audit.resumes.reject',
    httpMethod: 'post',
    httpPath: '/api/admin/audit/resumes/{id}/reject',
  },
  {
    clientCallName: 'client.admin.audit.jobs.retrieve',
    fullyQualifiedName: 'admin.audit.jobs.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/audit/jobs/{id}',
  },
  {
    clientCallName: 'client.admin.audit.jobs.list',
    fullyQualifiedName: 'admin.audit.jobs.list',
    httpMethod: 'get',
    httpPath: '/api/admin/audit/jobs',
  },
  {
    clientCallName: 'client.admin.audit.jobs.approve',
    fullyQualifiedName: 'admin.audit.jobs.approve',
    httpMethod: 'post',
    httpPath: '/api/admin/audit/jobs/{id}/approve',
  },
  {
    clientCallName: 'client.admin.audit.jobs.reject',
    fullyQualifiedName: 'admin.audit.jobs.reject',
    httpMethod: 'post',
    httpPath: '/api/admin/audit/jobs/{id}/reject',
  },
  {
    clientCallName: 'client.admin.audit.jobs.batch.approve',
    fullyQualifiedName: 'admin.audit.jobs.batch.approve',
    httpMethod: 'post',
    httpPath: '/api/admin/audit/jobs/batch/approve',
  },
  {
    clientCallName: 'client.admin.audit.jobs.batch.reject',
    fullyQualifiedName: 'admin.audit.jobs.batch.reject',
    httpMethod: 'post',
    httpPath: '/api/admin/audit/jobs/batch/reject',
  },
  {
    clientCallName: 'client.admin.audit.enterprises.retrieve',
    fullyQualifiedName: 'admin.audit.enterprises.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/audit/enterprises/{id}',
  },
  {
    clientCallName: 'client.admin.audit.enterprises.list',
    fullyQualifiedName: 'admin.audit.enterprises.list',
    httpMethod: 'get',
    httpPath: '/api/admin/audit/enterprises',
  },
  {
    clientCallName: 'client.admin.audit.enterprises.approve',
    fullyQualifiedName: 'admin.audit.enterprises.approve',
    httpMethod: 'post',
    httpPath: '/api/admin/audit/enterprises/{id}/approve',
  },
  {
    clientCallName: 'client.admin.audit.enterprises.reject',
    fullyQualifiedName: 'admin.audit.enterprises.reject',
    httpMethod: 'post',
    httpPath: '/api/admin/audit/enterprises/{id}/reject',
  },
  {
    clientCallName: 'client.admin.audit.enterprises.batch.approve',
    fullyQualifiedName: 'admin.audit.enterprises.batch.approve',
    httpMethod: 'post',
    httpPath: '/api/admin/audit/enterprises/batch/approve',
  },
  {
    clientCallName: 'client.admin.system.notice.retrieve',
    fullyQualifiedName: 'admin.system.notice.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/system/notice/{noticeId}',
  },
  {
    clientCallName: 'client.admin.system.notice.list',
    fullyQualifiedName: 'admin.system.notice.list',
    httpMethod: 'get',
    httpPath: '/api/admin/system/notice/list',
  },
  {
    clientCallName: 'client.admin.system.notice.listTop',
    fullyQualifiedName: 'admin.system.notice.listTop',
    httpMethod: 'get',
    httpPath: '/api/admin/system/notice/top',
  },
  {
    clientCallName: 'client.admin.system.dictionary.retrieve',
    fullyQualifiedName: 'admin.system.dictionary.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/system/dictionary/{dictType}',
  },
  {
    clientCallName: 'client.admin.system.dictionary.listTypes',
    fullyQualifiedName: 'admin.system.dictionary.listTypes',
    httpMethod: 'get',
    httpPath: '/api/admin/system/dictionary/types',
  },
  {
    clientCallName: 'client.admin.system.config.retrieve',
    fullyQualifiedName: 'admin.system.config.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/system/config/{key}',
  },
  {
    clientCallName: 'client.admin.system.config.listAll',
    fullyQualifiedName: 'admin.system.config.listAll',
    httpMethod: 'get',
    httpPath: '/api/admin/system/config/all',
  },
  {
    clientCallName: 'client.admin.system.config.listByGroup',
    fullyQualifiedName: 'admin.system.config.listByGroup',
    httpMethod: 'get',
    httpPath: '/api/admin/system/config/group/{groupName}',
  },
  {
    clientCallName: 'client.admin.statistics.listTrends',
    fullyQualifiedName: 'admin.statistics.listTrends',
    httpMethod: 'get',
    httpPath: '/api/admin/statistics/trends',
  },
  {
    clientCallName: 'client.admin.statistics.retrieveDistribution',
    fullyQualifiedName: 'admin.statistics.retrieveDistribution',
    httpMethod: 'get',
    httpPath: '/api/admin/statistics/distribution',
  },
  {
    clientCallName: 'client.admin.statistics.retrieveFunnel',
    fullyQualifiedName: 'admin.statistics.retrieveFunnel',
    httpMethod: 'get',
    httpPath: '/api/admin/statistics/funnel',
  },
  {
    clientCallName: 'client.admin.statistics.retrieveOverview',
    fullyQualifiedName: 'admin.statistics.retrieveOverview',
    httpMethod: 'get',
    httpPath: '/api/admin/statistics/overview',
  },
  {
    clientCallName: 'client.admin.statistics.retrieveRealtime',
    fullyQualifiedName: 'admin.statistics.retrieveRealtime',
    httpMethod: 'get',
    httpPath: '/api/admin/statistics/realtime',
  },
  {
    clientCallName: 'client.admin.logs.retrieve',
    fullyQualifiedName: 'admin.logs.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/logs/{id}',
  },
  {
    clientCallName: 'client.admin.logs.list',
    fullyQualifiedName: 'admin.logs.list',
    httpMethod: 'get',
    httpPath: '/api/admin/logs',
  },
  {
    clientCallName: 'client.admin.logs.export',
    fullyQualifiedName: 'admin.logs.export',
    httpMethod: 'get',
    httpPath: '/api/admin/logs/export',
  },
  {
    clientCallName: 'client.admin.locations.listNearby',
    fullyQualifiedName: 'admin.locations.listNearby',
    httpMethod: 'get',
    httpPath: '/api/admin/locations/nearby',
  },
  {
    clientCallName: 'client.admin.locations.search',
    fullyQualifiedName: 'admin.locations.search',
    httpMethod: 'get',
    httpPath: '/api/admin/locations/search',
  },
  {
    clientCallName: 'client.admin.jobseekers.retrieve',
    fullyQualifiedName: 'admin.jobseekers.retrieve',
    httpMethod: 'get',
    httpPath: '/api/admin/jobseekers/{id}',
  },
  {
    clientCallName: 'client.admin.jobseekers.list',
    fullyQualifiedName: 'admin.jobseekers.list',
    httpMethod: 'get',
    httpPath: '/api/admin/jobseekers',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
