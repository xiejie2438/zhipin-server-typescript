// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssistantSettingsAPI from './assistant-settings';
import {
  AssistantSettingUpdateAssistantSettingsParams,
  AssistantSettings,
  ResultMapStringObject,
} from './assistant-settings';
import * as BlockedCompaniesAPI from './blocked-companies';
import { BlockedCompanies, BlockedCompanyBlockedCompaniesParams } from './blocked-companies';
import * as CommonPhrasesAPI from './common-phrases';
import { CommonPhraseCommonPhrasesParams, CommonPhrases } from './common-phrases';

export class Preferences extends APIResource {
  assistantSettings: AssistantSettingsAPI.AssistantSettings = new AssistantSettingsAPI.AssistantSettings(
    this._client,
  );
  commonPhrases: CommonPhrasesAPI.CommonPhrases = new CommonPhrasesAPI.CommonPhrases(this._client);
  blockedCompanies: BlockedCompaniesAPI.BlockedCompanies = new BlockedCompaniesAPI.BlockedCompanies(
    this._client,
  );
}

Preferences.AssistantSettings = AssistantSettings;
Preferences.CommonPhrases = CommonPhrases;
Preferences.BlockedCompanies = BlockedCompanies;

export declare namespace Preferences {
  export {
    AssistantSettings as AssistantSettings,
    type ResultMapStringObject as ResultMapStringObject,
    type AssistantSettingUpdateAssistantSettingsParams as AssistantSettingUpdateAssistantSettingsParams,
  };

  export {
    CommonPhrases as CommonPhrases,
    type CommonPhraseCommonPhrasesParams as CommonPhraseCommonPhrasesParams,
  };

  export {
    BlockedCompanies as BlockedCompanies,
    type BlockedCompanyBlockedCompaniesParams as BlockedCompanyBlockedCompaniesParams,
  };
}
