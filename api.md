# V1

## Seeker

### Profile

#### WorkExperience

Types:

- <code><a href="./src/resources/v1/seeker/profile/work-experience.ts">ResultVoid</a></code>
- <code><a href="./src/resources/v1/seeker/profile/work-experience.ts">ResultWorkExperience</a></code>
- <code><a href="./src/resources/v1/seeker/profile/work-experience.ts">WorkExperienceRequest</a></code>
- <code><a href="./src/resources/v1/seeker/profile/work-experience.ts">WorkExperienceResponse</a></code>
- <code><a href="./src/resources/v1/seeker/profile/work-experience.ts">WorkExperienceRetrieveWorkExperienceResponse</a></code>

Methods:

- <code title="put /api/v1/seeker/profile/work-experience/{id}">client.v1.seeker.profile.workExperience.<a href="./src/resources/v1/seeker/profile/work-experience.ts">update</a>(id, { ...params }) -> ResultWorkExperience</code>
- <code title="delete /api/v1/seeker/profile/work-experience/{id}">client.v1.seeker.profile.workExperience.<a href="./src/resources/v1/seeker/profile/work-experience.ts">delete</a>(id) -> ResultVoid</code>
- <code title="get /api/v1/seeker/profile/work-experience">client.v1.seeker.profile.workExperience.<a href="./src/resources/v1/seeker/profile/work-experience.ts">retrieveWorkExperience</a>() -> WorkExperienceRetrieveWorkExperienceResponse</code>
- <code title="post /api/v1/seeker/profile/work-experience">client.v1.seeker.profile.workExperience.<a href="./src/resources/v1/seeker/profile/work-experience.ts">workExperience</a>({ ...params }) -> ResultWorkExperience</code>

#### Projects

Types:

- <code><a href="./src/resources/v1/seeker/profile/projects.ts">ProjectExperienceRequest</a></code>
- <code><a href="./src/resources/v1/seeker/profile/projects.ts">ProjectExperienceResponse</a></code>
- <code><a href="./src/resources/v1/seeker/profile/projects.ts">ResultProjectExperience</a></code>
- <code><a href="./src/resources/v1/seeker/profile/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /api/v1/seeker/profile/projects">client.v1.seeker.profile.projects.<a href="./src/resources/v1/seeker/profile/projects.ts">create</a>({ ...params }) -> ResultProjectExperience</code>
- <code title="put /api/v1/seeker/profile/projects/{id}">client.v1.seeker.profile.projects.<a href="./src/resources/v1/seeker/profile/projects.ts">update</a>(id, { ...params }) -> ResultProjectExperience</code>
- <code title="get /api/v1/seeker/profile/projects">client.v1.seeker.profile.projects.<a href="./src/resources/v1/seeker/profile/projects.ts">list</a>() -> ProjectListResponse</code>
- <code title="delete /api/v1/seeker/profile/projects/{id}">client.v1.seeker.profile.projects.<a href="./src/resources/v1/seeker/profile/projects.ts">delete</a>(id) -> ResultVoid</code>

#### JobIntentions

Types:

- <code><a href="./src/resources/v1/seeker/profile/job-intentions.ts">JobIntentionRequest</a></code>
- <code><a href="./src/resources/v1/seeker/profile/job-intentions.ts">JobIntentionResponse</a></code>
- <code><a href="./src/resources/v1/seeker/profile/job-intentions.ts">ResultJobIntention</a></code>
- <code><a href="./src/resources/v1/seeker/profile/job-intentions.ts">JobIntentionRetrieveJobIntentionsResponse</a></code>

Methods:

- <code title="put /api/v1/seeker/profile/job-intentions/{id}">client.v1.seeker.profile.jobIntentions.<a href="./src/resources/v1/seeker/profile/job-intentions.ts">update</a>(id, { ...params }) -> ResultJobIntention</code>
- <code title="delete /api/v1/seeker/profile/job-intentions/{id}">client.v1.seeker.profile.jobIntentions.<a href="./src/resources/v1/seeker/profile/job-intentions.ts">delete</a>(id) -> ResultVoid</code>
- <code title="post /api/v1/seeker/profile/job-intentions">client.v1.seeker.profile.jobIntentions.<a href="./src/resources/v1/seeker/profile/job-intentions.ts">jobIntentions</a>({ ...params }) -> ResultJobIntention</code>
- <code title="get /api/v1/seeker/profile/job-intentions">client.v1.seeker.profile.jobIntentions.<a href="./src/resources/v1/seeker/profile/job-intentions.ts">retrieveJobIntentions</a>() -> JobIntentionRetrieveJobIntentionsResponse</code>

#### Education

Types:

- <code><a href="./src/resources/v1/seeker/profile/education.ts">EducationRequest</a></code>
- <code><a href="./src/resources/v1/seeker/profile/education.ts">EducationResponse</a></code>
- <code><a href="./src/resources/v1/seeker/profile/education.ts">ResultEducation</a></code>
- <code><a href="./src/resources/v1/seeker/profile/education.ts">EducationListResponse</a></code>

Methods:

- <code title="post /api/v1/seeker/profile/education">client.v1.seeker.profile.education.<a href="./src/resources/v1/seeker/profile/education.ts">create</a>({ ...params }) -> ResultEducation</code>
- <code title="put /api/v1/seeker/profile/education/{id}">client.v1.seeker.profile.education.<a href="./src/resources/v1/seeker/profile/education.ts">update</a>(id, { ...params }) -> ResultEducation</code>
- <code title="get /api/v1/seeker/profile/education">client.v1.seeker.profile.education.<a href="./src/resources/v1/seeker/profile/education.ts">list</a>() -> EducationListResponse</code>
- <code title="delete /api/v1/seeker/profile/education/{id}">client.v1.seeker.profile.education.<a href="./src/resources/v1/seeker/profile/education.ts">delete</a>(id) -> ResultVoid</code>

#### Qualifications

Types:

- <code><a href="./src/resources/v1/seeker/profile/qualifications.ts">QualificationResponse</a></code>
- <code><a href="./src/resources/v1/seeker/profile/qualifications.ts">QualificationCreateResponse</a></code>
- <code><a href="./src/resources/v1/seeker/profile/qualifications.ts">QualificationListResponse</a></code>

Methods:

- <code title="post /api/v1/seeker/profile/qualifications">client.v1.seeker.profile.qualifications.<a href="./src/resources/v1/seeker/profile/qualifications.ts">create</a>({ ...params }) -> QualificationCreateResponse</code>
- <code title="get /api/v1/seeker/profile/qualifications">client.v1.seeker.profile.qualifications.<a href="./src/resources/v1/seeker/profile/qualifications.ts">list</a>() -> QualificationListResponse</code>
- <code title="delete /api/v1/seeker/profile/qualifications/{id}">client.v1.seeker.profile.qualifications.<a href="./src/resources/v1/seeker/profile/qualifications.ts">delete</a>(id) -> ResultVoid</code>

### Preferences

#### AssistantSettings

Types:

- <code><a href="./src/resources/v1/seeker/preferences/assistant-settings.ts">ResultMapStringObject</a></code>

Methods:

- <code title="get /api/v1/seeker/preferences/assistant-settings">client.v1.seeker.preferences.assistantSettings.<a href="./src/resources/v1/seeker/preferences/assistant-settings.ts">retrieveAssistantSettings</a>() -> ResultMapStringObject</code>
- <code title="put /api/v1/seeker/preferences/assistant-settings">client.v1.seeker.preferences.assistantSettings.<a href="./src/resources/v1/seeker/preferences/assistant-settings.ts">updateAssistantSettings</a>({ ...params }) -> ResultMapStringObject</code>

#### CommonPhrases

Methods:

- <code title="delete /api/v1/seeker/preferences/common-phrases/{phraseId}">client.v1.seeker.preferences.commonPhrases.<a href="./src/resources/v1/seeker/preferences/common-phrases.ts">delete</a>(phraseID) -> ResultVoid</code>
- <code title="post /api/v1/seeker/preferences/common-phrases">client.v1.seeker.preferences.commonPhrases.<a href="./src/resources/v1/seeker/preferences/common-phrases.ts">commonPhrases</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="get /api/v1/seeker/preferences/common-phrases">client.v1.seeker.preferences.commonPhrases.<a href="./src/resources/v1/seeker/preferences/common-phrases.ts">retrieveCommonPhrases</a>() -> ResultListBanners</code>

#### BlockedCompanies

Methods:

- <code title="delete /api/v1/seeker/preferences/blocked-companies/{blockId}">client.v1.seeker.preferences.blockedCompanies.<a href="./src/resources/v1/seeker/preferences/blocked-companies.ts">delete</a>(blockID) -> ResultVoid</code>
- <code title="post /api/v1/seeker/preferences/blocked-companies">client.v1.seeker.preferences.blockedCompanies.<a href="./src/resources/v1/seeker/preferences/blocked-companies.ts">blockedCompanies</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="get /api/v1/seeker/preferences/blocked-companies">client.v1.seeker.preferences.blockedCompanies.<a href="./src/resources/v1/seeker/preferences/blocked-companies.ts">retrieveBlockedCompanies</a>() -> ResultListBanners</code>

### Message

Methods:

- <code title="post /api/v1/seeker/message/{messageId}/recall">client.v1.seeker.message.<a href="./src/resources/v1/seeker/message/message.ts">recall</a>(messageID) -> ResultVoid</code>

#### Conversations

Types:

- <code><a href="./src/resources/v1/seeker/message/conversations/conversations.ts">ConversationCreateRequest</a></code>
- <code><a href="./src/resources/v1/seeker/message/conversations/conversations.ts">ConversationResponse</a></code>
- <code><a href="./src/resources/v1/seeker/message/conversations/conversations.ts">ResultConversation</a></code>
- <code><a href="./src/resources/v1/seeker/message/conversations/conversations.ts">ResultListConversation</a></code>

Methods:

- <code title="post /api/v1/seeker/message/conversations">client.v1.seeker.message.conversations.<a href="./src/resources/v1/seeker/message/conversations/conversations.ts">create</a>({ ...params }) -> ResultConversation</code>
- <code title="get /api/v1/seeker/message/conversations/{conversationId}">client.v1.seeker.message.conversations.<a href="./src/resources/v1/seeker/message/conversations/conversations.ts">retrieve</a>(conversationID) -> ResultConversation</code>
- <code title="get /api/v1/seeker/message/conversations">client.v1.seeker.message.conversations.<a href="./src/resources/v1/seeker/message/conversations/conversations.ts">list</a>() -> ResultListConversation</code>
- <code title="delete /api/v1/seeker/message/conversations/{conversationId}">client.v1.seeker.message.conversations.<a href="./src/resources/v1/seeker/message/conversations/conversations.ts">delete</a>(conversationID) -> ResultVoid</code>
- <code title="post /api/v1/seeker/message/conversations/{conversationId}/read">client.v1.seeker.message.conversations.<a href="./src/resources/v1/seeker/message/conversations/conversations.ts">read</a>(conversationID) -> ResultVoid</code>
- <code title="put /api/v1/seeker/message/conversations/{conversationId}/mute">client.v1.seeker.message.conversations.<a href="./src/resources/v1/seeker/message/conversations/conversations.ts">updateMute</a>(conversationID, { ...params }) -> ResultVoid</code>
- <code title="put /api/v1/seeker/message/conversations/{conversationId}/pin">client.v1.seeker.message.conversations.<a href="./src/resources/v1/seeker/message/conversations/conversations.ts">updatePin</a>(conversationID, { ...params }) -> ResultVoid</code>

##### Messages

Types:

- <code><a href="./src/resources/v1/seeker/message/conversations/messages.ts">MessageResponse</a></code>
- <code><a href="./src/resources/v1/seeker/message/conversations/messages.ts">MessageSendRequest</a></code>
- <code><a href="./src/resources/v1/seeker/message/conversations/messages.ts">Pagination</a></code>
- <code><a href="./src/resources/v1/seeker/message/conversations/messages.ts">ResultMessage</a></code>
- <code><a href="./src/resources/v1/seeker/message/conversations/messages.ts">ResultPageResultMessage</a></code>

Methods:

- <code title="post /api/v1/seeker/message/conversations/{conversationId}/messages">client.v1.seeker.message.conversations.messages.<a href="./src/resources/v1/seeker/message/conversations/messages.ts">create</a>(conversationID, { ...params }) -> ResultMessage</code>
- <code title="get /api/v1/seeker/message/conversations/{conversationId}/messages">client.v1.seeker.message.conversations.messages.<a href="./src/resources/v1/seeker/message/conversations/messages.ts">list</a>(conversationID, { ...params }) -> ResultPageResultMessage</code>

### Account

#### Me

Types:

- <code><a href="./src/resources/v1/seeker/account/me.ts">ResultMapStringString</a></code>
- <code><a href="./src/resources/v1/seeker/account/me.ts">ResultUserInfo</a></code>
- <code><a href="./src/resources/v1/seeker/account/me.ts">UpdatePasswordRequest</a></code>
- <code><a href="./src/resources/v1/seeker/account/me.ts">UpdateUserRequest</a></code>
- <code><a href="./src/resources/v1/seeker/account/me.ts">UserInfoResponse</a></code>

Methods:

- <code title="put /api/v1/seeker/account/me">client.v1.seeker.account.me.<a href="./src/resources/v1/seeker/account/me.ts">create</a>({ ...params }) -> ResultUserInfo</code>
- <code title="get /api/v1/seeker/account/me">client.v1.seeker.account.me.<a href="./src/resources/v1/seeker/account/me.ts">list</a>() -> ResultUserInfo</code>
- <code title="post /api/v1/seeker/account/me/avatar">client.v1.seeker.account.me.<a href="./src/resources/v1/seeker/account/me.ts">avatar</a>({ ...params }) -> ResultMapStringString</code>
- <code title="patch /api/v1/seeker/account/me">client.v1.seeker.account.me.<a href="./src/resources/v1/seeker/account/me.ts">patchAll</a>({ ...params }) -> ResultUserInfo</code>
- <code title="put /api/v1/seeker/account/me/password">client.v1.seeker.account.me.<a href="./src/resources/v1/seeker/account/me.ts">updatePassword</a>({ ...params }) -> ResultVoid</code>

### Notifications

Types:

- <code><a href="./src/resources/v1/seeker/notifications.ts">NotificationStatsResponse</a></code>
- <code><a href="./src/resources/v1/seeker/notifications.ts">ResultNotificationStats</a></code>
- <code><a href="./src/resources/v1/seeker/notifications.ts">ResultPageResultNotification</a></code>

Methods:

- <code title="get /api/v1/seeker/notifications">client.v1.seeker.notifications.<a href="./src/resources/v1/seeker/notifications.ts">list</a>({ ...params }) -> ResultPageResultNotification</code>
- <code title="delete /api/v1/seeker/notifications/{notificationId}">client.v1.seeker.notifications.<a href="./src/resources/v1/seeker/notifications.ts">delete</a>(notificationID) -> ResultVoid</code>
- <code title="post /api/v1/seeker/notifications/{notificationId}/read">client.v1.seeker.notifications.<a href="./src/resources/v1/seeker/notifications.ts">read</a>(notificationID) -> ResultVoid</code>
- <code title="post /api/v1/seeker/notifications/read-all">client.v1.seeker.notifications.<a href="./src/resources/v1/seeker/notifications.ts">readAll</a>() -> ResultVoid</code>
- <code title="get /api/v1/seeker/notifications/stats">client.v1.seeker.notifications.<a href="./src/resources/v1/seeker/notifications.ts">retrieveStats</a>() -> ResultNotificationStats</code>

### Files

Types:

- <code><a href="./src/resources/v1/seeker/files.ts">ResultUpload</a></code>
- <code><a href="./src/resources/v1/seeker/files.ts">UploadResponse</a></code>

Methods:

- <code title="post /api/v1/seeker/files/file">client.v1.seeker.files.<a href="./src/resources/v1/seeker/files.ts">file</a>({ ...params }) -> ResultUpload</code>
- <code title="post /api/v1/seeker/files/image">client.v1.seeker.files.<a href="./src/resources/v1/seeker/files.ts">image</a>({ ...params }) -> ResultUpload</code>

### Auth

Types:

- <code><a href="./src/resources/v1/seeker/auth/auth.ts">RegisterRequest</a></code>

Methods:

- <code title="post /api/v1/seeker/auth/logout">client.v1.seeker.auth.<a href="./src/resources/v1/seeker/auth/auth.ts">logout</a>() -> ResultVoid</code>
- <code title="post /api/v1/seeker/auth/refresh">client.v1.seeker.auth.<a href="./src/resources/v1/seeker/auth/auth.ts">refresh</a>({ ...params }) -> ResultLogin</code>
- <code title="post /api/v1/seeker/auth/register">client.v1.seeker.auth.<a href="./src/resources/v1/seeker/auth/auth.ts">register</a>({ ...params }) -> ResultLogin</code>

#### Token

Types:

- <code><a href="./src/resources/v1/seeker/auth/token.ts">LoginResponse</a></code>
- <code><a href="./src/resources/v1/seeker/auth/token.ts">RefreshTokenRequest</a></code>
- <code><a href="./src/resources/v1/seeker/auth/token.ts">ResultLogin</a></code>

Methods:

- <code title="post /api/v1/seeker/auth/token/refresh">client.v1.seeker.auth.token.<a href="./src/resources/v1/seeker/auth/token.ts">refresh</a>({ ...params }) -> ResultLogin</code>

#### SMS

Types:

- <code><a href="./src/resources/v1/seeker/auth/sms.ts">LoginRequest</a></code>
- <code><a href="./src/resources/v1/seeker/auth/sms.ts">SMSCodeRequest</a></code>

Methods:

- <code title="post /api/v1/seeker/auth/sms/login">client.v1.seeker.auth.sms.<a href="./src/resources/v1/seeker/auth/sms.ts">login</a>({ ...params }) -> ResultLogin</code>
- <code title="post /api/v1/seeker/auth/sms/send">client.v1.seeker.auth.sms.<a href="./src/resources/v1/seeker/auth/sms.ts">send</a>({ ...params }) -> ResultMapStringObject</code>

#### SeekerLogin

Methods:

- <code title="post /api/v1/seeker/auth/login">client.v1.seeker.auth.seekerLogin.<a href="./src/resources/v1/seeker/auth/seeker-login.ts">create</a>({ ...params }) -> ResultLogin</code>
- <code title="post /api/v1/seeker/auth/login/sms">client.v1.seeker.auth.seekerLogin.<a href="./src/resources/v1/seeker/auth/seeker-login.ts">sms</a>({ ...params }) -> ResultLogin</code>

### Applications

Types:

- <code><a href="./src/resources/v1/seeker/applications.ts">ApplicationListResponse</a></code>
- <code><a href="./src/resources/v1/seeker/applications.ts">TimelineItem</a></code>
- <code><a href="./src/resources/v1/seeker/applications.ts">ApplicationCreateResponse</a></code>
- <code><a href="./src/resources/v1/seeker/applications.ts">ApplicationRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/seeker/applications.ts">ApplicationListResponse</a></code>
- <code><a href="./src/resources/v1/seeker/applications.ts">ApplicationRetrieveStatisticsResponse</a></code>

Methods:

- <code title="post /api/v1/seeker/applications">client.v1.seeker.applications.<a href="./src/resources/v1/seeker/applications.ts">create</a>({ ...params }) -> ApplicationCreateResponse</code>
- <code title="get /api/v1/seeker/applications/{id}">client.v1.seeker.applications.<a href="./src/resources/v1/seeker/applications.ts">retrieve</a>(id) -> ApplicationRetrieveResponse</code>
- <code title="get /api/v1/seeker/applications">client.v1.seeker.applications.<a href="./src/resources/v1/seeker/applications.ts">list</a>({ ...params }) -> ApplicationListResponse</code>
- <code title="delete /api/v1/seeker/applications/{id}">client.v1.seeker.applications.<a href="./src/resources/v1/seeker/applications.ts">delete</a>(id) -> ResultVoid</code>
- <code title="get /api/v1/seeker/applications/statistics">client.v1.seeker.applications.<a href="./src/resources/v1/seeker/applications.ts">retrieveStatistics</a>() -> ApplicationRetrieveStatisticsResponse</code>
- <code title="patch /api/v1/seeker/applications/{id}/mark-unsuitable">client.v1.seeker.applications.<a href="./src/resources/v1/seeker/applications.ts">updateMarkUnsuitable</a>(id, { ...params }) -> ResultVoid</code>

### AIAssistant

Methods:

- <code title="post /api/v1/seeker/ai-assistant/jd-optimize">client.v1.seeker.aiAssistant.<a href="./src/resources/v1/seeker/ai-assistant/ai-assistant.ts">jdOptimize</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="get /api/v1/seeker/ai-assistant/analytics">client.v1.seeker.aiAssistant.<a href="./src/resources/v1/seeker/ai-assistant/ai-assistant.ts">retrieveAnalytics</a>() -> ResultMapStringObject</code>
- <code title="post /api/v1/seeker/ai-assistant/risk-analysis">client.v1.seeker.aiAssistant.<a href="./src/resources/v1/seeker/ai-assistant/ai-assistant.ts">riskAnalysis</a>({ ...params }) -> ResultMapStringObject</code>

#### Messages

Types:

- <code><a href="./src/resources/v1/seeker/ai-assistant/messages.ts">PageResultMapStringObject</a></code>
- <code><a href="./src/resources/v1/seeker/ai-assistant/messages.ts">ResultPageResultMapStringObject</a></code>

Methods:

- <code title="post /api/v1/seeker/ai-assistant/messages">client.v1.seeker.aiAssistant.messages.<a href="./src/resources/v1/seeker/ai-assistant/messages.ts">create</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="get /api/v1/seeker/ai-assistant/messages">client.v1.seeker.aiAssistant.messages.<a href="./src/resources/v1/seeker/ai-assistant/messages.ts">list</a>({ ...params }) -> ResultPageResultMapStringObject</code>

### Schedules

Methods:

- <code title="get /api/v1/seeker/schedules/{id}">client.v1.seeker.schedules.<a href="./src/resources/v1/seeker/schedules.ts">retrieve</a>(id) -> ResultScheduleDetail</code>
- <code title="get /api/v1/seeker/schedules">client.v1.seeker.schedules.<a href="./src/resources/v1/seeker/schedules.ts">list</a>({ ...params }) -> ResultPageScheduleList</code>
- <code title="patch /api/v1/seeker/schedules/{id}/cancel">client.v1.seeker.schedules.<a href="./src/resources/v1/seeker/schedules.ts">updateCancel</a>(id, { ...params }) -> ResultMapStringObject</code>
- <code title="patch /api/v1/seeker/schedules/{id}/confirm">client.v1.seeker.schedules.<a href="./src/resources/v1/seeker/schedules.ts">updateConfirm</a>(id) -> ResultMapStringObject</code>

### Skills

Types:

- <code><a href="./src/resources/v1/seeker/skills.ts">SkillRetrieveSuggestionsResponse</a></code>

Methods:

- <code title="get /api/v1/seeker/skills/suggestions">client.v1.seeker.skills.<a href="./src/resources/v1/seeker/skills.ts">retrieveSuggestions</a>({ ...params }) -> SkillRetrieveSuggestionsResponse</code>

### Lookups

#### Regions

##### Provinces

Methods:

- <code title="get /api/v1/seeker/lookups/regions/provinces">client.v1.seeker.lookups.regions.provinces.<a href="./src/resources/v1/seeker/lookups/regions/provinces.ts">list</a>() -> ResultListBanners</code>
- <code title="get /api/v1/seeker/lookups/regions/provinces/{provinceCode}/cities">client.v1.seeker.lookups.regions.provinces.<a href="./src/resources/v1/seeker/lookups/regions/provinces.ts">retrieveCities</a>(provinceCode) -> ResultListBanners</code>

#### Autocomplete

Types:

- <code><a href="./src/resources/v1/seeker/lookups/autocomplete.ts">ResultListString</a></code>

Methods:

- <code title="get /api/v1/seeker/lookups/autocomplete/companies">client.v1.seeker.lookups.autocomplete.<a href="./src/resources/v1/seeker/lookups/autocomplete.ts">retrieveCompanies</a>({ ...params }) -> ResultListString</code>
- <code title="get /api/v1/seeker/lookups/autocomplete/majors">client.v1.seeker.lookups.autocomplete.<a href="./src/resources/v1/seeker/lookups/autocomplete.ts">retrieveMajors</a>({ ...params }) -> ResultListString</code>
- <code title="get /api/v1/seeker/lookups/autocomplete/positions">client.v1.seeker.lookups.autocomplete.<a href="./src/resources/v1/seeker/lookups/autocomplete.ts">retrievePositions</a>({ ...params }) -> ResultListString</code>
- <code title="get /api/v1/seeker/lookups/autocomplete/schools">client.v1.seeker.lookups.autocomplete.<a href="./src/resources/v1/seeker/lookups/autocomplete.ts">retrieveSchools</a>({ ...params }) -> ResultListString</code>

### Jobs

Types:

- <code><a href="./src/resources/v1/seeker/jobs.ts">CompanyInfo</a></code>
- <code><a href="./src/resources/v1/seeker/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/v1/seeker/jobs.ts">ResultListJobList</a></code>
- <code><a href="./src/resources/v1/seeker/jobs.ts">JobRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/seeker/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/v1/seeker/jobs.ts">JobRetrieveCategoriesResponse</a></code>
- <code><a href="./src/resources/v1/seeker/jobs.ts">JobRetrieveRecommendedResponse</a></code>

Methods:

- <code title="get /api/v1/seeker/jobs/{jobId}">client.v1.seeker.jobs.<a href="./src/resources/v1/seeker/jobs.ts">retrieve</a>(jobID) -> JobRetrieveResponse</code>
- <code title="get /api/v1/seeker/jobs">client.v1.seeker.jobs.<a href="./src/resources/v1/seeker/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="get /api/v1/seeker/jobs/categories">client.v1.seeker.jobs.<a href="./src/resources/v1/seeker/jobs.ts">retrieveCategories</a>() -> JobRetrieveCategoriesResponse</code>
- <code title="get /api/v1/seeker/jobs/hot">client.v1.seeker.jobs.<a href="./src/resources/v1/seeker/jobs.ts">retrieveHot</a>({ ...params }) -> ResultListJobList</code>
- <code title="get /api/v1/seeker/jobs/latest">client.v1.seeker.jobs.<a href="./src/resources/v1/seeker/jobs.ts">retrieveLatest</a>({ ...params }) -> ResultListJobList</code>
- <code title="get /api/v1/seeker/jobs/recommended">client.v1.seeker.jobs.<a href="./src/resources/v1/seeker/jobs.ts">retrieveRecommended</a>({ ...params }) -> JobRetrieveRecommendedResponse</code>

## Enterprise

Methods:

- <code title="post /api/v1/enterprise/feedbacks">client.v1.enterprise.<a href="./src/resources/v1/enterprise/enterprise.ts">submitFeedback</a>({ ...params }) -> ResultMapStringObject</code>

### Schedules

Types:

- <code><a href="./src/resources/v1/enterprise/schedules.ts">FeedbackInfo</a></code>
- <code><a href="./src/resources/v1/enterprise/schedules.ts">InterviewerInfo</a></code>
- <code><a href="./src/resources/v1/enterprise/schedules.ts">PositionInfo</a></code>
- <code><a href="./src/resources/v1/enterprise/schedules.ts">ResultPageScheduleList</a></code>
- <code><a href="./src/resources/v1/enterprise/schedules.ts">ResultScheduleDetail</a></code>
- <code><a href="./src/resources/v1/enterprise/schedules.ts">ScheduleCancel</a></code>
- <code><a href="./src/resources/v1/enterprise/schedules.ts">ScheduleDetailResponse</a></code>
- <code><a href="./src/resources/v1/enterprise/schedules.ts">TalentInfo</a></code>
- <code><a href="./src/resources/v1/enterprise/schedules.ts">UserInfo</a></code>

Methods:

- <code title="post /api/v1/enterprise/schedules">client.v1.enterprise.schedules.<a href="./src/resources/v1/enterprise/schedules.ts">create</a>({ ...params }) -> ResultScheduleDetail</code>
- <code title="get /api/v1/enterprise/schedules/{scheduleId}">client.v1.enterprise.schedules.<a href="./src/resources/v1/enterprise/schedules.ts">retrieve</a>(scheduleID) -> ResultScheduleDetail</code>
- <code title="put /api/v1/enterprise/schedules/{scheduleId}">client.v1.enterprise.schedules.<a href="./src/resources/v1/enterprise/schedules.ts">update</a>(scheduleID, { ...params }) -> ResultScheduleDetail</code>
- <code title="get /api/v1/enterprise/schedules">client.v1.enterprise.schedules.<a href="./src/resources/v1/enterprise/schedules.ts">list</a>({ ...params }) -> ResultPageScheduleList</code>
- <code title="delete /api/v1/enterprise/schedules/{scheduleId}">client.v1.enterprise.schedules.<a href="./src/resources/v1/enterprise/schedules.ts">delete</a>(scheduleID, { ...params }) -> ResultVoid</code>
- <code title="patch /api/v1/enterprise/schedules/{scheduleId}/cancel">client.v1.enterprise.schedules.<a href="./src/resources/v1/enterprise/schedules.ts">cancel</a>(scheduleID, { ...params }) -> ResultMapStringObject</code>
- <code title="patch /api/v1/enterprise/schedules/{scheduleId}/confirm">client.v1.enterprise.schedules.<a href="./src/resources/v1/enterprise/schedules.ts">confirm</a>(scheduleID) -> ResultMapStringObject</code>
- <code title="post /api/v1/enterprise/schedules/{scheduleId}/feedbacks">client.v1.enterprise.schedules.<a href="./src/resources/v1/enterprise/schedules.ts">submitFeedback</a>(scheduleID, { ...params }) -> ResultMapStringObject</code>

### Resumes

Types:

- <code><a href="./src/resources/v1/enterprise/resumes.ts">ResumeList</a></code>
- <code><a href="./src/resources/v1/enterprise/resumes.ts">ResumeRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/enterprise/resumes.ts">ResumeListResponse</a></code>
- <code><a href="./src/resources/v1/enterprise/resumes.ts">ResumeUpdateStatusResponse</a></code>

Methods:

- <code title="get /api/v1/enterprise/resumes/{resumeId}">client.v1.enterprise.resumes.<a href="./src/resources/v1/enterprise/resumes.ts">retrieve</a>(resumeID) -> ResumeRetrieveResponse</code>
- <code title="get /api/v1/enterprise/resumes">client.v1.enterprise.resumes.<a href="./src/resources/v1/enterprise/resumes.ts">list</a>({ ...params }) -> ResumeListResponse</code>
- <code title="put /api/v1/enterprise/resumes/{resumeId}/reject">client.v1.enterprise.resumes.<a href="./src/resources/v1/enterprise/resumes.ts">reject</a>(resumeID, { ...params }) -> ResultVoid</code>
- <code title="get /api/v1/enterprise/resumes/statistics">client.v1.enterprise.resumes.<a href="./src/resources/v1/enterprise/resumes.ts">statistics</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="put /api/v1/enterprise/resumes/{resumeId}/status">client.v1.enterprise.resumes.<a href="./src/resources/v1/enterprise/resumes.ts">updateStatus</a>(resumeID, { ...params }) -> ResumeUpdateStatusResponse</code>

### QuickReplies

Types:

- <code><a href="./src/resources/v1/enterprise/quick-replies.ts">QuickReplyList</a></code>
- <code><a href="./src/resources/v1/enterprise/quick-replies.ts">ResultQuickReplyList</a></code>
- <code><a href="./src/resources/v1/enterprise/quick-replies.ts">QuickReplyListResponse</a></code>

Methods:

- <code title="post /api/v1/enterprise/quick-replies">client.v1.enterprise.quickReplies.<a href="./src/resources/v1/enterprise/quick-replies.ts">create</a>({ ...params }) -> ResultQuickReplyList</code>
- <code title="put /api/v1/enterprise/quick-replies/{id}">client.v1.enterprise.quickReplies.<a href="./src/resources/v1/enterprise/quick-replies.ts">update</a>(id, { ...params }) -> ResultQuickReplyList</code>
- <code title="get /api/v1/enterprise/quick-replies">client.v1.enterprise.quickReplies.<a href="./src/resources/v1/enterprise/quick-replies.ts">list</a>({ ...params }) -> QuickReplyListResponse</code>
- <code title="delete /api/v1/enterprise/quick-replies/{id}">client.v1.enterprise.quickReplies.<a href="./src/resources/v1/enterprise/quick-replies.ts">delete</a>(id) -> ResultVoid</code>

### Positions

Types:

- <code><a href="./src/resources/v1/enterprise/positions.ts">Creator</a></code>
- <code><a href="./src/resources/v1/enterprise/positions.ts">PositionCreate</a></code>
- <code><a href="./src/resources/v1/enterprise/positions.ts">PositionDetailResponse</a></code>
- <code><a href="./src/resources/v1/enterprise/positions.ts">ResultPositionDetail</a></code>
- <code><a href="./src/resources/v1/enterprise/positions.ts">Statistics</a></code>
- <code><a href="./src/resources/v1/enterprise/positions.ts">PositionListResponse</a></code>

Methods:

- <code title="post /api/v1/enterprise/positions">client.v1.enterprise.positions.<a href="./src/resources/v1/enterprise/positions.ts">create</a>({ ...params }) -> ResultPositionDetail</code>
- <code title="get /api/v1/enterprise/positions/{positionId}">client.v1.enterprise.positions.<a href="./src/resources/v1/enterprise/positions.ts">retrieve</a>(positionID) -> ResultPositionDetail</code>
- <code title="put /api/v1/enterprise/positions/{positionId}">client.v1.enterprise.positions.<a href="./src/resources/v1/enterprise/positions.ts">update</a>(positionID, { ...params }) -> ResultPositionDetail</code>
- <code title="get /api/v1/enterprise/positions">client.v1.enterprise.positions.<a href="./src/resources/v1/enterprise/positions.ts">list</a>({ ...params }) -> PositionListResponse</code>
- <code title="delete /api/v1/enterprise/positions/{positionId}">client.v1.enterprise.positions.<a href="./src/resources/v1/enterprise/positions.ts">delete</a>(positionID) -> ResultVoid</code>
- <code title="put /api/v1/enterprise/positions/{positionId}/status">client.v1.enterprise.positions.<a href="./src/resources/v1/enterprise/positions.ts">updateStatus</a>(positionID, { ...params }) -> ResultVoid</code>

### Message

Methods:

- <code title="post /api/v1/enterprise/message/{messageId}/recall">client.v1.enterprise.message.<a href="./src/resources/v1/enterprise/message/message.ts">recall</a>(messageID) -> ResultVoid</code>

#### Conversations

Methods:

- <code title="post /api/v1/enterprise/message/conversations">client.v1.enterprise.message.conversations.<a href="./src/resources/v1/enterprise/message/conversations/conversations.ts">create</a>({ ...params }) -> ResultConversation</code>
- <code title="get /api/v1/enterprise/message/conversations/{conversationId}">client.v1.enterprise.message.conversations.<a href="./src/resources/v1/enterprise/message/conversations/conversations.ts">retrieve</a>(conversationID) -> ResultConversation</code>
- <code title="get /api/v1/enterprise/message/conversations">client.v1.enterprise.message.conversations.<a href="./src/resources/v1/enterprise/message/conversations/conversations.ts">list</a>() -> ResultListConversation</code>
- <code title="delete /api/v1/enterprise/message/conversations/{conversationId}">client.v1.enterprise.message.conversations.<a href="./src/resources/v1/enterprise/message/conversations/conversations.ts">delete</a>(conversationID) -> ResultVoid</code>
- <code title="post /api/v1/enterprise/message/conversations/{conversationId}/read">client.v1.enterprise.message.conversations.<a href="./src/resources/v1/enterprise/message/conversations/conversations.ts">markRead</a>(conversationID) -> ResultVoid</code>
- <code title="put /api/v1/enterprise/message/conversations/{conversationId}/mute">client.v1.enterprise.message.conversations.<a href="./src/resources/v1/enterprise/message/conversations/conversations.ts">mute</a>(conversationID, { ...params }) -> ResultVoid</code>
- <code title="put /api/v1/enterprise/message/conversations/{conversationId}/pin">client.v1.enterprise.message.conversations.<a href="./src/resources/v1/enterprise/message/conversations/conversations.ts">pin</a>(conversationID, { ...params }) -> ResultVoid</code>

##### Messages

Methods:

- <code title="get /api/v1/enterprise/message/conversations/{conversationId}/messages">client.v1.enterprise.message.conversations.messages.<a href="./src/resources/v1/enterprise/message/conversations/messages.ts">list</a>(conversationID, { ...params }) -> ResultPageResultMessage</code>
- <code title="post /api/v1/enterprise/message/conversations/{conversationId}/messages">client.v1.enterprise.message.conversations.messages.<a href="./src/resources/v1/enterprise/message/conversations/messages.ts">send</a>(conversationID, { ...params }) -> ResultMessage</code>

### Members

Types:

- <code><a href="./src/resources/v1/enterprise/members.ts">MemberDetailResponse</a></code>
- <code><a href="./src/resources/v1/enterprise/members.ts">MemberList</a></code>
- <code><a href="./src/resources/v1/enterprise/members.ts">ResultMemberDetail</a></code>
- <code><a href="./src/resources/v1/enterprise/members.ts">MemberListResponse</a></code>
- <code><a href="./src/resources/v1/enterprise/members.ts">MemberAddResponse</a></code>

Methods:

- <code title="get /api/v1/enterprise/members/{memberId}">client.v1.enterprise.members.<a href="./src/resources/v1/enterprise/members.ts">retrieve</a>(memberID) -> ResultMemberDetail</code>
- <code title="put /api/v1/enterprise/members/{memberId}">client.v1.enterprise.members.<a href="./src/resources/v1/enterprise/members.ts">update</a>(memberID, { ...params }) -> ResultMemberDetail</code>
- <code title="get /api/v1/enterprise/members">client.v1.enterprise.members.<a href="./src/resources/v1/enterprise/members.ts">list</a>({ ...params }) -> MemberListResponse</code>
- <code title="post /api/v1/enterprise/members">client.v1.enterprise.members.<a href="./src/resources/v1/enterprise/members.ts">add</a>({ ...params }) -> MemberAddResponse</code>
- <code title="put /api/v1/enterprise/members/{memberId}/disable">client.v1.enterprise.members.<a href="./src/resources/v1/enterprise/members.ts">disable</a>(memberID, { ...params }) -> ResultVoid</code>
- <code title="put /api/v1/enterprise/members/{memberId}/enable">client.v1.enterprise.members.<a href="./src/resources/v1/enterprise/members.ts">enable</a>(memberID) -> ResultVoid</code>
- <code title="delete /api/v1/enterprise/members/{memberId}">client.v1.enterprise.members.<a href="./src/resources/v1/enterprise/members.ts">remove</a>(memberID) -> ResultVoid</code>

### Companies

Methods:

- <code title="post /api/v1/enterprise/companies/admin-transfer-request">client.v1.enterprise.companies.<a href="./src/resources/v1/enterprise/companies/companies.ts">requestAdminTransfer</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="post /api/v1/enterprise/companies/change-request">client.v1.enterprise.companies.<a href="./src/resources/v1/enterprise/companies/companies.ts">requestChange</a>({ ...params }) -> ResultMapStringObject</code>

#### Current

Types:

- <code><a href="./src/resources/v1/enterprise/companies/current.ts">CompanyInfoResponse</a></code>
- <code><a href="./src/resources/v1/enterprise/companies/current.ts">ResultCompanyInfo</a></code>

Methods:

- <code title="get /api/v1/enterprise/companies/current">client.v1.enterprise.companies.current.<a href="./src/resources/v1/enterprise/companies/current.ts">retrieve</a>() -> ResultCompanyInfo</code>
- <code title="put /api/v1/enterprise/companies/current">client.v1.enterprise.companies.current.<a href="./src/resources/v1/enterprise/companies/current.ts">update</a>({ ...params }) -> ResultCompanyInfo</code>
- <code title="post /api/v1/enterprise/companies/current/business-license">client.v1.enterprise.companies.current.<a href="./src/resources/v1/enterprise/companies/current.ts">uploadBusinessLicense</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="post /api/v1/enterprise/companies/current/logo">client.v1.enterprise.companies.current.<a href="./src/resources/v1/enterprise/companies/current.ts">uploadLogo</a>({ ...params }) -> ResultMapStringString</code>

### AIAssistant

Types:

- <code><a href="./src/resources/v1/enterprise/ai-assistant/ai-assistant.ts">ResultString</a></code>

Methods:

- <code title="get /api/v1/enterprise/ai-assistant/analyze-resume/{resumeId}">client.v1.enterprise.aiAssistant.<a href="./src/resources/v1/enterprise/ai-assistant/ai-assistant.ts">analyzeResume</a>(resumeID) -> ResultString</code>
- <code title="get /api/v1/enterprise/ai-assistant/dashboard">client.v1.enterprise.aiAssistant.<a href="./src/resources/v1/enterprise/ai-assistant/ai-assistant.ts">dashboard</a>() -> ResultMapStringObject</code>
- <code title="get /api/v1/enterprise/ai-assistant/generate-questions">client.v1.enterprise.aiAssistant.<a href="./src/resources/v1/enterprise/ai-assistant/ai-assistant.ts">generateQuestions</a>({ ...params }) -> ResultString</code>
- <code title="get /api/v1/enterprise/ai-assistant/position-recommendations">client.v1.enterprise.aiAssistant.<a href="./src/resources/v1/enterprise/ai-assistant/ai-assistant.ts">positionRecommendations</a>() -> ResultListBanners</code>
- <code title="post /api/v1/enterprise/ai-assistant/resume-optimization">client.v1.enterprise.aiAssistant.<a href="./src/resources/v1/enterprise/ai-assistant/ai-assistant.ts">resumeOptimization</a>({ ...params }) -> ResultListBanners</code>
- <code title="get /api/v1/enterprise/ai-assistant/suggest-reply">client.v1.enterprise.aiAssistant.<a href="./src/resources/v1/enterprise/ai-assistant/ai-assistant.ts">suggestReply</a>({ ...params }) -> ResultString</code>

#### Setting

Types:

- <code><a href="./src/resources/v1/enterprise/ai-assistant/setting.ts">SettingRetrieveResponse</a></code>

Methods:

- <code title="get /api/v1/enterprise/ai-assistant/setting">client.v1.enterprise.aiAssistant.setting.<a href="./src/resources/v1/enterprise/ai-assistant/setting.ts">retrieve</a>() -> SettingRetrieveResponse</code>
- <code title="put /api/v1/enterprise/ai-assistant/setting">client.v1.enterprise.aiAssistant.setting.<a href="./src/resources/v1/enterprise/ai-assistant/setting.ts">update</a>({ ...params }) -> ResultVoid</code>

#### Messages

Types:

- <code><a href="./src/resources/v1/enterprise/ai-assistant/messages.ts">Message</a></code>
- <code><a href="./src/resources/v1/enterprise/ai-assistant/messages.ts">MessageSendResponse</a></code>

Methods:

- <code title="get /api/v1/enterprise/ai-assistant/messages">client.v1.enterprise.aiAssistant.messages.<a href="./src/resources/v1/enterprise/ai-assistant/messages.ts">list</a>({ ...params }) -> ResultPageResultMapStringObject</code>
- <code title="post /api/v1/enterprise/ai-assistant/messages">client.v1.enterprise.aiAssistant.messages.<a href="./src/resources/v1/enterprise/ai-assistant/messages.ts">send</a>({ ...params }) -> MessageSendResponse</code>

### Account

#### Me

Methods:

- <code title="get /api/v1/enterprise/account/me">client.v1.enterprise.account.me.<a href="./src/resources/v1/enterprise/account/me.ts">retrieve</a>() -> ResultUserInfo</code>
- <code title="put /api/v1/enterprise/account/me">client.v1.enterprise.account.me.<a href="./src/resources/v1/enterprise/account/me.ts">update</a>({ ...params }) -> ResultUserInfo</code>
- <code title="put /api/v1/enterprise/account/me/password">client.v1.enterprise.account.me.<a href="./src/resources/v1/enterprise/account/me.ts">updatePassword</a>({ ...params }) -> ResultVoid</code>
- <code title="patch /api/v1/enterprise/account/me">client.v1.enterprise.account.me.<a href="./src/resources/v1/enterprise/account/me.ts">updatePatch</a>({ ...params }) -> ResultUserInfo</code>
- <code title="post /api/v1/enterprise/account/me/avatar">client.v1.enterprise.account.me.<a href="./src/resources/v1/enterprise/account/me.ts">uploadAvatar</a>({ ...params }) -> ResultMapStringString</code>

### Talents

Types:

- <code><a href="./src/resources/v1/enterprise/talents/talents.ts">PageResultTalentListResponse</a></code>
- <code><a href="./src/resources/v1/enterprise/talents/talents.ts">ResultPageTalentList</a></code>
- <code><a href="./src/resources/v1/enterprise/talents/talents.ts">TalentListResponse</a></code>
- <code><a href="./src/resources/v1/enterprise/talents/talents.ts">TalentRetrieveResponse</a></code>

Methods:

- <code title="get /api/v1/enterprise/talents/{talentId}">client.v1.enterprise.talents.<a href="./src/resources/v1/enterprise/talents/talents.ts">retrieve</a>(talentID) -> TalentRetrieveResponse</code>
- <code title="get /api/v1/enterprise/talents">client.v1.enterprise.talents.<a href="./src/resources/v1/enterprise/talents/talents.ts">list</a>({ ...params }) -> ResultPageTalentList</code>
- <code title="post /api/v1/enterprise/talents/{talentId}/invite">client.v1.enterprise.talents.<a href="./src/resources/v1/enterprise/talents/talents.ts">invite</a>(talentID, { ...params }) -> ResultMapStringObject</code>
- <code title="get /api/v1/enterprise/talents/favorites">client.v1.enterprise.talents.<a href="./src/resources/v1/enterprise/talents/talents.ts">listFavorites</a>({ ...params }) -> ResultPageTalentList</code>

#### Favorite

Methods:

- <code title="post /api/v1/enterprise/talents/{talentId}/favorite">client.v1.enterprise.talents.favorite.<a href="./src/resources/v1/enterprise/talents/favorite.ts">add</a>(talentID) -> ResultVoid</code>
- <code title="delete /api/v1/enterprise/talents/{talentId}/favorite">client.v1.enterprise.talents.favorite.<a href="./src/resources/v1/enterprise/talents/favorite.ts">remove</a>(talentID) -> ResultVoid</code>

### Notifications

Methods:

- <code title="get /api/v1/enterprise/notifications">client.v1.enterprise.notifications.<a href="./src/resources/v1/enterprise/notifications.ts">list</a>({ ...params }) -> ResultPageResultNotification</code>
- <code title="delete /api/v1/enterprise/notifications/{notificationId}">client.v1.enterprise.notifications.<a href="./src/resources/v1/enterprise/notifications.ts">delete</a>(notificationID) -> ResultVoid</code>
- <code title="post /api/v1/enterprise/notifications/read-all">client.v1.enterprise.notifications.<a href="./src/resources/v1/enterprise/notifications.ts">markAllRead</a>() -> ResultVoid</code>
- <code title="post /api/v1/enterprise/notifications/{notificationId}/read">client.v1.enterprise.notifications.<a href="./src/resources/v1/enterprise/notifications.ts">markRead</a>(notificationID) -> ResultVoid</code>
- <code title="get /api/v1/enterprise/notifications/stats">client.v1.enterprise.notifications.<a href="./src/resources/v1/enterprise/notifications.ts">statistics</a>() -> ResultNotificationStats</code>

### Files

Methods:

- <code title="post /api/v1/enterprise/files/file">client.v1.enterprise.files.<a href="./src/resources/v1/enterprise/files.ts">uploadFile</a>({ ...params }) -> ResultUpload</code>
- <code title="post /api/v1/enterprise/files/image">client.v1.enterprise.files.<a href="./src/resources/v1/enterprise/files.ts">uploadImage</a>({ ...params }) -> ResultUpload</code>

### Auth

Methods:

- <code title="post /api/v1/enterprise/auth/login">client.v1.enterprise.auth.<a href="./src/resources/v1/enterprise/auth/auth.ts">enterpriseLogin</a>({ ...params }) -> ResultLogin</code>
- <code title="post /api/v1/enterprise/auth/logout">client.v1.enterprise.auth.<a href="./src/resources/v1/enterprise/auth/auth.ts">logout</a>() -> ResultVoid</code>
- <code title="post /api/v1/enterprise/auth/refresh">client.v1.enterprise.auth.<a href="./src/resources/v1/enterprise/auth/auth.ts">refresh</a>({ ...params }) -> ResultLogin</code>
- <code title="post /api/v1/enterprise/auth/register">client.v1.enterprise.auth.<a href="./src/resources/v1/enterprise/auth/auth.ts">register</a>({ ...params }) -> ResultLogin</code>

#### Token

Methods:

- <code title="post /api/v1/enterprise/auth/token/refresh">client.v1.enterprise.auth.token.<a href="./src/resources/v1/enterprise/auth/token.ts">refresh</a>({ ...params }) -> ResultLogin</code>

#### SMS

Methods:

- <code title="post /api/v1/enterprise/auth/sms/login">client.v1.enterprise.auth.sms.<a href="./src/resources/v1/enterprise/auth/sms.ts">login</a>({ ...params }) -> ResultLogin</code>
- <code title="post /api/v1/enterprise/auth/sms/send">client.v1.enterprise.auth.sms.<a href="./src/resources/v1/enterprise/auth/sms.ts">send</a>({ ...params }) -> ResultMapStringObject</code>

#### Login

Methods:

- <code title="post /api/v1/enterprise/auth/login/sms">client.v1.enterprise.auth.login.<a href="./src/resources/v1/enterprise/auth/login.ts">sms</a>({ ...params }) -> ResultLogin</code>

# Admin

Methods:

- <code title="get /api/admin/permissions">client.admin.<a href="./src/resources/admin/admin.ts">listPermissions</a>() -> ResultListBanners</code>

## Users

Types:

- <code><a href="./src/resources/admin/users.ts">AdminUser</a></code>

Methods:

- <code title="post /api/admin/users">client.admin.users.<a href="./src/resources/admin/users.ts">create</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="get /api/admin/users/{id}">client.admin.users.<a href="./src/resources/admin/users.ts">retrieve</a>(id) -> ResultMapStringObject</code>
- <code title="put /api/admin/users/{id}">client.admin.users.<a href="./src/resources/admin/users.ts">update</a>(id, { ...params }) -> ResultVoid</code>
- <code title="get /api/admin/users">client.admin.users.<a href="./src/resources/admin/users.ts">list</a>({ ...params }) -> ResultPageResultMapStringObject</code>
- <code title="post /api/admin/users/{id}/disable">client.admin.users.<a href="./src/resources/admin/users.ts">disable</a>(id) -> ResultVoid</code>
- <code title="post /api/admin/users/{id}/enable">client.admin.users.<a href="./src/resources/admin/users.ts">enable</a>(id) -> ResultVoid</code>
- <code title="get /api/admin/users/{id}/logs">client.admin.users.<a href="./src/resources/admin/users.ts">getLogs</a>(id, { ...params }) -> ResultPageResultMapStringObject</code>
- <code title="post /api/admin/users/{id}/reset-password">client.admin.users.<a href="./src/resources/admin/users.ts">resetPassword</a>(id) -> ResultMapStringString</code>

## Roles

Types:

- <code><a href="./src/resources/admin/roles/roles.ts">Role</a></code>

Methods:

- <code title="post /api/admin/roles">client.admin.roles.<a href="./src/resources/admin/roles/roles.ts">create</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="get /api/admin/roles/{id}">client.admin.roles.<a href="./src/resources/admin/roles/roles.ts">retrieve</a>(id) -> ResultMapStringObject</code>
- <code title="put /api/admin/roles/{id}">client.admin.roles.<a href="./src/resources/admin/roles/roles.ts">update</a>(id, { ...params }) -> ResultVoid</code>
- <code title="get /api/admin/roles">client.admin.roles.<a href="./src/resources/admin/roles/roles.ts">list</a>({ ...params }) -> ResultListBanners</code>
- <code title="delete /api/admin/roles/{id}">client.admin.roles.<a href="./src/resources/admin/roles/roles.ts">delete</a>(id) -> ResultVoid</code>

### Permissions

Methods:

- <code title="get /api/admin/roles/{id}/permissions">client.admin.roles.permissions.<a href="./src/resources/admin/roles/permissions.ts">retrieve</a>(id) -> ResultMapStringObject</code>
- <code title="put /api/admin/roles/{id}/permissions">client.admin.roles.permissions.<a href="./src/resources/admin/roles/permissions.ts">update</a>(id, { ...params }) -> ResultVoid</code>

## Config

### Provinces

Types:

- <code><a href="./src/resources/admin/config/provinces.ts">Province</a></code>

Methods:

- <code title="post /api/admin/config/provinces">client.admin.config.provinces.<a href="./src/resources/admin/config/provinces.ts">create</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="put /api/admin/config/provinces/{id}">client.admin.config.provinces.<a href="./src/resources/admin/config/provinces.ts">update</a>(id, { ...params }) -> ResultVoid</code>
- <code title="get /api/admin/config/provinces">client.admin.config.provinces.<a href="./src/resources/admin/config/provinces.ts">list</a>({ ...params }) -> ResultListBanners</code>
- <code title="delete /api/admin/config/provinces/{id}">client.admin.config.provinces.<a href="./src/resources/admin/config/provinces.ts">delete</a>(id) -> ResultVoid</code>

### PrivacyPolicy

Methods:

- <code title="get /api/admin/config/privacy-policy">client.admin.config.privacyPolicy.<a href="./src/resources/admin/config/privacy-policy.ts">retrievePrivacyPolicy</a>() -> ResultMapStringObject</code>
- <code title="put /api/admin/config/privacy-policy">client.admin.config.privacyPolicy.<a href="./src/resources/admin/config/privacy-policy.ts">updatePrivacyPolicy</a>({ ...params }) -> ResultVoid</code>

### JobTypes

Methods:

- <code title="put /api/admin/config/job-types/{id}">client.admin.config.jobTypes.<a href="./src/resources/admin/config/job-types.ts">update</a>(id, { ...params }) -> ResultVoid</code>
- <code title="delete /api/admin/config/job-types/{id}">client.admin.config.jobTypes.<a href="./src/resources/admin/config/job-types.ts">delete</a>(id) -> ResultVoid</code>

### JobSubcategories

Methods:

- <code title="put /api/admin/config/job-subcategories/{id}">client.admin.config.jobSubcategories.<a href="./src/resources/admin/config/job-subcategories/job-subcategories.ts">update</a>(id, { ...params }) -> ResultVoid</code>
- <code title="delete /api/admin/config/job-subcategories/{id}">client.admin.config.jobSubcategories.<a href="./src/resources/admin/config/job-subcategories/job-subcategories.ts">delete</a>(id) -> ResultVoid</code>

#### Types

Methods:

- <code title="post /api/admin/config/job-subcategories/{subcategoryId}/types">client.admin.config.jobSubcategories.types.<a href="./src/resources/admin/config/job-subcategories/types.ts">create</a>(subcategoryID, { ...params }) -> ResultMapStringObject</code>
- <code title="get /api/admin/config/job-subcategories/{subcategoryId}/types">client.admin.config.jobSubcategories.types.<a href="./src/resources/admin/config/job-subcategories/types.ts">list</a>(subcategoryID) -> ResultListBanners</code>

### JobCategories

Methods:

- <code title="put /api/admin/config/job-categories/{id}">client.admin.config.jobCategories.<a href="./src/resources/admin/config/job-categories/job-categories.ts">update</a>(id, { ...params }) -> ResultVoid</code>
- <code title="delete /api/admin/config/job-categories/{id}">client.admin.config.jobCategories.<a href="./src/resources/admin/config/job-categories/job-categories.ts">delete</a>(id) -> ResultVoid</code>
- <code title="post /api/admin/config/job-categories">client.admin.config.jobCategories.<a href="./src/resources/admin/config/job-categories/job-categories.ts">jobCategories</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="get /api/admin/config/job-categories">client.admin.config.jobCategories.<a href="./src/resources/admin/config/job-categories/job-categories.ts">retrieveJobCategories</a>({ ...params }) -> ResultListBanners</code>

#### Subcategories

Methods:

- <code title="post /api/admin/config/job-categories/{categoryId}/subcategories">client.admin.config.jobCategories.subcategories.<a href="./src/resources/admin/config/job-categories/subcategories.ts">create</a>(categoryID, { ...params }) -> ResultMapStringObject</code>
- <code title="get /api/admin/config/job-categories/{categoryId}/subcategories">client.admin.config.jobCategories.subcategories.<a href="./src/resources/admin/config/job-categories/subcategories.ts">list</a>(categoryID) -> ResultListBanners</code>

### Display

Methods:

- <code title="get /api/admin/config/display">client.admin.config.display.<a href="./src/resources/admin/config/display/display.ts">list</a>() -> ResultMapStringObject</code>
- <code title="put /api/admin/config/display/features">client.admin.config.display.<a href="./src/resources/admin/config/display/display.ts">updateFeatures</a>({ ...params }) -> ResultVoid</code>
- <code title="put /api/admin/config/display/hot-positions">client.admin.config.display.<a href="./src/resources/admin/config/display/display.ts">updateHotPositions</a>({ ...params }) -> ResultVoid</code>

#### Banners

Types:

- <code><a href="./src/resources/admin/config/display/banners.ts">BannerUpdate</a></code>

Methods:

- <code title="put /api/admin/config/display/banners">client.admin.config.display.banners.<a href="./src/resources/admin/config/display/banners.ts">create</a>({ ...params }) -> ResultVoid</code>
- <code title="post /api/admin/config/display/banners/upload">client.admin.config.display.banners.<a href="./src/resources/admin/config/display/banners.ts">upload</a>({ ...params }) -> ResultMapStringString</code>

### Dictionary

Types:

- <code><a href="./src/resources/admin/config/dictionary.ts">DictionaryItem</a></code>

Methods:

- <code title="get /api/admin/config/dictionary/{type}">client.admin.config.dictionary.<a href="./src/resources/admin/config/dictionary.ts">retrieve</a>(type) -> ResultListBanners</code>
- <code title="post /api/admin/config/dictionary/{type}">client.admin.config.dictionary.<a href="./src/resources/admin/config/dictionary.ts">update</a>(type, { ...params }) -> ResultMapStringObject</code>
- <code title="delete /api/admin/config/dictionary/{type}/{id}">client.admin.config.dictionary.<a href="./src/resources/admin/config/dictionary.ts">delete</a>(id, { ...params }) -> ResultVoid</code>
- <code title="delete /api/admin/config/dictionary/{type}/batch">client.admin.config.dictionary.<a href="./src/resources/admin/config/dictionary.ts">deleteBatch</a>(type, { ...params }) -> ResultMapStringObject</code>
- <code title="get /api/admin/config/dictionary/types">client.admin.config.dictionary.<a href="./src/resources/admin/config/dictionary.ts">retrieveTypes</a>() -> ResultListBanners</code>
- <code title="put /api/admin/config/dictionary/{type}/{id}/status">client.admin.config.dictionary.<a href="./src/resources/admin/config/dictionary.ts">updateStatus</a>(id, { ...params }) -> ResultVoid</code>

### Cities

Methods:

- <code title="post /api/admin/config/cities">client.admin.config.cities.<a href="./src/resources/admin/config/cities.ts">create</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="put /api/admin/config/cities/{id}">client.admin.config.cities.<a href="./src/resources/admin/config/cities.ts">update</a>(id, { ...params }) -> ResultVoid</code>
- <code title="get /api/admin/config/cities">client.admin.config.cities.<a href="./src/resources/admin/config/cities.ts">list</a>({ ...params }) -> ResultPageResultMapStringObject</code>
- <code title="delete /api/admin/config/cities/{id}">client.admin.config.cities.<a href="./src/resources/admin/config/cities.ts">delete</a>(id) -> ResultVoid</code>

### Banners

Types:

- <code><a href="./src/resources/admin/config/banners.ts">ResultListBanners</a></code>

Methods:

- <code title="put /api/admin/config/banners">client.admin.config.banners.<a href="./src/resources/admin/config/banners.ts">create</a>({ ...params }) -> ResultVoid</code>
- <code title="get /api/admin/config/banners">client.admin.config.banners.<a href="./src/resources/admin/config/banners.ts">list</a>() -> ResultListBanners</code>
- <code title="post /api/admin/config/banners/upload">client.admin.config.banners.<a href="./src/resources/admin/config/banners.ts">upload</a>({ ...params }) -> ResultMapStringString</code>

### Announcements

Types:

- <code><a href="./src/resources/admin/config/announcements.ts">Announcement</a></code>

Methods:

- <code title="post /api/admin/config/announcements">client.admin.config.announcements.<a href="./src/resources/admin/config/announcements.ts">create</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="get /api/admin/config/announcements/{id}">client.admin.config.announcements.<a href="./src/resources/admin/config/announcements.ts">retrieve</a>(id) -> ResultMapStringObject</code>
- <code title="put /api/admin/config/announcements/{id}">client.admin.config.announcements.<a href="./src/resources/admin/config/announcements.ts">update</a>(id, { ...params }) -> ResultVoid</code>
- <code title="get /api/admin/config/announcements">client.admin.config.announcements.<a href="./src/resources/admin/config/announcements.ts">list</a>({ ...params }) -> ResultPageResultMapStringObject</code>
- <code title="delete /api/admin/config/announcements/{id}">client.admin.config.announcements.<a href="./src/resources/admin/config/announcements.ts">delete</a>(id) -> ResultVoid</code>

### BannedWords

Methods:

- <code title="delete /api/admin/config/banned-words/{id}">client.admin.config.bannedWords.<a href="./src/resources/admin/config/banned-words.ts">delete</a>(id) -> ResultVoid</code>
- <code title="post /api/admin/config/banned-words">client.admin.config.bannedWords.<a href="./src/resources/admin/config/banned-words.ts">bannedWords</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="get /api/admin/config/banned-words">client.admin.config.bannedWords.<a href="./src/resources/admin/config/banned-words.ts">retrieveBannedWords</a>({ ...params }) -> ResultPageResultMapStringObject</code>

## Auth

Methods:

- <code title="post /api/admin/auth/login">client.admin.auth.<a href="./src/resources/admin/auth.ts">adminLogin</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="post /api/admin/auth/logout">client.admin.auth.<a href="./src/resources/admin/auth.ts">logout</a>() -> ResultVoid</code>
- <code title="get /api/admin/auth/profile">client.admin.auth.<a href="./src/resources/admin/auth.ts">retrieveProfile</a>() -> ResultMapStringObject</code>
- <code title="put /api/admin/auth/password">client.admin.auth.<a href="./src/resources/admin/auth.ts">updatePassword</a>({ ...params }) -> ResultVoid</code>

## Notifications

Methods:

- <code title="get /api/admin/notifications">client.admin.notifications.<a href="./src/resources/admin/notifications.ts">list</a>({ ...params }) -> ResultPageResultMapStringObject</code>
- <code title="post /api/admin/notifications/read-all">client.admin.notifications.<a href="./src/resources/admin/notifications.ts">markAllAsRead</a>() -> ResultMapStringObject</code>
- <code title="post /api/admin/notifications/{id}/read">client.admin.notifications.<a href="./src/resources/admin/notifications.ts">markAsRead</a>(id) -> ResultVoid</code>

## Files

Methods:

- <code title="post /api/admin/files/file">client.admin.files.<a href="./src/resources/admin/files.ts">uploadFile</a>({ ...params }) -> ResultUpload</code>
- <code title="post /api/admin/files/image">client.admin.files.<a href="./src/resources/admin/files.ts">uploadImage</a>({ ...params }) -> ResultUpload</code>

## Feedbacks

Methods:

- <code title="get /api/admin/feedbacks/{id}">client.admin.feedbacks.<a href="./src/resources/admin/feedbacks.ts">retrieve</a>(id) -> ResultMapStringObject</code>
- <code title="get /api/admin/feedbacks">client.admin.feedbacks.<a href="./src/resources/admin/feedbacks.ts">list</a>({ ...params }) -> ResultPageResultMapStringObject</code>
- <code title="get /api/admin/feedbacks/statistics">client.admin.feedbacks.<a href="./src/resources/admin/feedbacks.ts">getStatistics</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="post /api/admin/feedbacks/{id}/reply">client.admin.feedbacks.<a href="./src/resources/admin/feedbacks.ts">reply</a>(id, { ...params }) -> ResultMapStringObject</code>
- <code title="post /api/admin/feedbacks/attachments">client.admin.feedbacks.<a href="./src/resources/admin/feedbacks.ts">uploadAttachment</a>({ ...params }) -> ResultMapStringObject</code>

## Enterprises

Methods:

- <code title="get /api/admin/enterprises/{id}">client.admin.enterprises.<a href="./src/resources/admin/enterprises/enterprises.ts">retrieve</a>(id) -> ResultMapStringObject</code>
- <code title="get /api/admin/enterprises">client.admin.enterprises.<a href="./src/resources/admin/enterprises/enterprises.ts">list</a>({ ...params }) -> ResultPageResultMapStringObject</code>
- <code title="post /api/admin/enterprises/{id}/disable">client.admin.enterprises.<a href="./src/resources/admin/enterprises/enterprises.ts">disable</a>(id) -> ResultVoid</code>
- <code title="post /api/admin/enterprises/{id}/enable">client.admin.enterprises.<a href="./src/resources/admin/enterprises/enterprises.ts">enable</a>(id) -> ResultVoid</code>

### ChangeRequests

Types:

- <code><a href="./src/resources/admin/enterprises/change-requests.ts">AuditReject</a></code>

Methods:

- <code title="get /api/admin/enterprises/change-requests/{id}">client.admin.enterprises.changeRequests.<a href="./src/resources/admin/enterprises/change-requests.ts">retrieve</a>(id) -> ResultMapStringObject</code>
- <code title="get /api/admin/enterprises/change-requests">client.admin.enterprises.changeRequests.<a href="./src/resources/admin/enterprises/change-requests.ts">list</a>({ ...params }) -> ResultPageResultMapStringObject</code>
- <code title="post /api/admin/enterprises/change-requests/{id}/approve">client.admin.enterprises.changeRequests.<a href="./src/resources/admin/enterprises/change-requests.ts">approve</a>(id) -> ResultVoid</code>
- <code title="post /api/admin/enterprises/change-requests/{id}/reject">client.admin.enterprises.changeRequests.<a href="./src/resources/admin/enterprises/change-requests.ts">reject</a>(id, { ...params }) -> ResultVoid</code>

### AdminTransferRequests

Methods:

- <code title="get /api/admin/enterprises/admin-transfer-requests/{id}">client.admin.enterprises.adminTransferRequests.<a href="./src/resources/admin/enterprises/admin-transfer-requests.ts">retrieve</a>(id) -> ResultMapStringObject</code>
- <code title="get /api/admin/enterprises/admin-transfer-requests">client.admin.enterprises.adminTransferRequests.<a href="./src/resources/admin/enterprises/admin-transfer-requests.ts">list</a>({ ...params }) -> ResultPageResultMapStringObject</code>
- <code title="post /api/admin/enterprises/admin-transfer-requests/{id}/approve">client.admin.enterprises.adminTransferRequests.<a href="./src/resources/admin/enterprises/admin-transfer-requests.ts">approve</a>(id) -> ResultVoid</code>
- <code title="post /api/admin/enterprises/admin-transfer-requests/{id}/reject">client.admin.enterprises.adminTransferRequests.<a href="./src/resources/admin/enterprises/admin-transfer-requests.ts">reject</a>(id, { ...params }) -> ResultVoid</code>

## Audit

### Resumes

Methods:

- <code title="get /api/admin/audit/resumes/{id}">client.admin.audit.resumes.<a href="./src/resources/admin/audit/resumes.ts">retrieve</a>(id) -> ResultMapStringObject</code>
- <code title="get /api/admin/audit/resumes">client.admin.audit.resumes.<a href="./src/resources/admin/audit/resumes.ts">list</a>({ ...params }) -> ResultPageResultMapStringObject</code>
- <code title="post /api/admin/audit/resumes/{id}/approve">client.admin.audit.resumes.<a href="./src/resources/admin/audit/resumes.ts">approve</a>(id) -> ResultVoid</code>
- <code title="post /api/admin/audit/resumes/{id}/reject">client.admin.audit.resumes.<a href="./src/resources/admin/audit/resumes.ts">reject</a>(id, { ...params }) -> ResultVoid</code>

### Jobs

Methods:

- <code title="get /api/admin/audit/jobs/{id}">client.admin.audit.jobs.<a href="./src/resources/admin/audit/jobs/jobs.ts">retrieve</a>(id) -> ResultMapStringObject</code>
- <code title="get /api/admin/audit/jobs">client.admin.audit.jobs.<a href="./src/resources/admin/audit/jobs/jobs.ts">list</a>({ ...params }) -> ResultPageResultMapStringObject</code>
- <code title="post /api/admin/audit/jobs/{id}/approve">client.admin.audit.jobs.<a href="./src/resources/admin/audit/jobs/jobs.ts">approve</a>(id) -> ResultVoid</code>
- <code title="post /api/admin/audit/jobs/{id}/reject">client.admin.audit.jobs.<a href="./src/resources/admin/audit/jobs/jobs.ts">reject</a>(id, { ...params }) -> ResultVoid</code>

#### Batch

Types:

- <code><a href="./src/resources/admin/audit/jobs/batch.ts">AuditBatch</a></code>

Methods:

- <code title="post /api/admin/audit/jobs/batch/approve">client.admin.audit.jobs.batch.<a href="./src/resources/admin/audit/jobs/batch.ts">approve</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="post /api/admin/audit/jobs/batch/reject">client.admin.audit.jobs.batch.<a href="./src/resources/admin/audit/jobs/batch.ts">reject</a>({ ...params }) -> ResultMapStringObject</code>

### Enterprises

Methods:

- <code title="get /api/admin/audit/enterprises/{id}">client.admin.audit.enterprises.<a href="./src/resources/admin/audit/enterprises/enterprises.ts">retrieve</a>(id) -> ResultMapStringObject</code>
- <code title="get /api/admin/audit/enterprises">client.admin.audit.enterprises.<a href="./src/resources/admin/audit/enterprises/enterprises.ts">list</a>({ ...params }) -> ResultPageResultMapStringObject</code>
- <code title="post /api/admin/audit/enterprises/{id}/approve">client.admin.audit.enterprises.<a href="./src/resources/admin/audit/enterprises/enterprises.ts">approve</a>(id) -> ResultVoid</code>
- <code title="post /api/admin/audit/enterprises/{id}/reject">client.admin.audit.enterprises.<a href="./src/resources/admin/audit/enterprises/enterprises.ts">reject</a>(id, { ...params }) -> ResultVoid</code>

#### Batch

Methods:

- <code title="post /api/admin/audit/enterprises/batch/approve">client.admin.audit.enterprises.batch.<a href="./src/resources/admin/audit/enterprises/batch.ts">approve</a>({ ...params }) -> ResultMapStringObject</code>

## System

### Notice

Types:

- <code><a href="./src/resources/admin/system/notice.ts">ResultListSystemNotices</a></code>
- <code><a href="./src/resources/admin/system/notice.ts">SystemNotice</a></code>
- <code><a href="./src/resources/admin/system/notice.ts">NoticeRetrieveResponse</a></code>

Methods:

- <code title="get /api/admin/system/notice/{noticeId}">client.admin.system.notice.<a href="./src/resources/admin/system/notice.ts">retrieve</a>(noticeID) -> NoticeRetrieveResponse</code>
- <code title="get /api/admin/system/notice/list">client.admin.system.notice.<a href="./src/resources/admin/system/notice.ts">list</a>({ ...params }) -> ResultListSystemNotices</code>
- <code title="get /api/admin/system/notice/top">client.admin.system.notice.<a href="./src/resources/admin/system/notice.ts">listTop</a>() -> ResultListSystemNotices</code>

### Dictionary

Types:

- <code><a href="./src/resources/admin/system/dictionary.ts">DictionaryRetrieveResponse</a></code>

Methods:

- <code title="get /api/admin/system/dictionary/{dictType}">client.admin.system.dictionary.<a href="./src/resources/admin/system/dictionary.ts">retrieve</a>(dictType) -> DictionaryRetrieveResponse</code>
- <code title="get /api/admin/system/dictionary/types">client.admin.system.dictionary.<a href="./src/resources/admin/system/dictionary.ts">listTypes</a>() -> ResultListString</code>

### Config

Types:

- <code><a href="./src/resources/admin/system/config.ts">ConfigListByGroupResponse</a></code>

Methods:

- <code title="get /api/admin/system/config/{key}">client.admin.system.config.<a href="./src/resources/admin/system/config.ts">retrieve</a>(key) -> ResultString</code>
- <code title="get /api/admin/system/config/all">client.admin.system.config.<a href="./src/resources/admin/system/config.ts">listAll</a>() -> ResultMapStringString</code>
- <code title="get /api/admin/system/config/group/{groupName}">client.admin.system.config.<a href="./src/resources/admin/system/config.ts">listByGroup</a>(groupName) -> ConfigListByGroupResponse</code>

## Statistics

Methods:

- <code title="get /api/admin/statistics/trends">client.admin.statistics.<a href="./src/resources/admin/statistics.ts">listTrends</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="get /api/admin/statistics/distribution">client.admin.statistics.<a href="./src/resources/admin/statistics.ts">retrieveDistribution</a>({ ...params }) -> ResultListBanners</code>
- <code title="get /api/admin/statistics/funnel">client.admin.statistics.<a href="./src/resources/admin/statistics.ts">retrieveFunnel</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="get /api/admin/statistics/overview">client.admin.statistics.<a href="./src/resources/admin/statistics.ts">retrieveOverview</a>({ ...params }) -> ResultMapStringObject</code>
- <code title="get /api/admin/statistics/realtime">client.admin.statistics.<a href="./src/resources/admin/statistics.ts">retrieveRealtime</a>() -> ResultMapStringObject</code>

## Logs

Methods:

- <code title="get /api/admin/logs/{id}">client.admin.logs.<a href="./src/resources/admin/logs.ts">retrieve</a>(id) -> ResultMapStringObject</code>
- <code title="get /api/admin/logs">client.admin.logs.<a href="./src/resources/admin/logs.ts">list</a>({ ...params }) -> ResultPageResultMapStringObject</code>
- <code title="get /api/admin/logs/export">client.admin.logs.<a href="./src/resources/admin/logs.ts">export</a>({ ...params }) -> void</code>

## Locations

Types:

- <code><a href="./src/resources/admin/locations.ts">LocationResponse</a></code>
- <code><a href="./src/resources/admin/locations.ts">ResultListLocations</a></code>

Methods:

- <code title="get /api/admin/locations/nearby">client.admin.locations.<a href="./src/resources/admin/locations.ts">listNearby</a>({ ...params }) -> ResultListLocations</code>
- <code title="get /api/admin/locations/search">client.admin.locations.<a href="./src/resources/admin/locations.ts">search</a>({ ...params }) -> ResultListLocations</code>

## Jobseekers

Methods:

- <code title="get /api/admin/jobseekers/{id}">client.admin.jobseekers.<a href="./src/resources/admin/jobseekers.ts">retrieve</a>(id) -> ResultMapStringObject</code>
- <code title="get /api/admin/jobseekers">client.admin.jobseekers.<a href="./src/resources/admin/jobseekers.ts">list</a>({ ...params }) -> ResultPageResultMapStringObject</code>
