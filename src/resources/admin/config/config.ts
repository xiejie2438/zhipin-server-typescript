// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnnouncementsAPI from './announcements';
import {
  Announcement,
  AnnouncementCreateParams,
  AnnouncementListParams,
  AnnouncementUpdateParams,
  Announcements,
} from './announcements';
import * as BannedWordsAPI from './banned-words';
import {
  BannedWordBannedWordsParams,
  BannedWordRetrieveBannedWordsParams,
  BannedWords,
} from './banned-words';
import * as BannersAPI from './banners';
import { BannerCreateParams, BannerUploadParams, Banners, ResultListBanners } from './banners';
import * as CitiesAPI from './cities';
import { Cities, CityCreateParams, CityListParams, CityUpdateParams } from './cities';
import * as DictionaryAPI from './dictionary';
import {
  Dictionary,
  DictionaryDeleteBatchParams,
  DictionaryDeleteParams,
  DictionaryItem,
  DictionaryUpdateParams,
  DictionaryUpdateStatusParams,
} from './dictionary';
import * as JobTypesAPI from './job-types';
import { JobTypeUpdateParams, JobTypes } from './job-types';
import * as PrivacyPolicyAPI from './privacy-policy';
import { PrivacyPolicy, PrivacyPolicyUpdatePrivacyPolicyParams } from './privacy-policy';
import * as ProvincesAPI from './provinces';
import {
  Province,
  ProvinceCreateParams,
  ProvinceListParams,
  ProvinceUpdateParams,
  Provinces,
} from './provinces';
import * as DisplayAPI from './display/display';
import { Display, DisplayUpdateFeaturesParams, DisplayUpdateHotPositionsParams } from './display/display';
import * as JobCategoriesAPI from './job-categories/job-categories';
import {
  JobCategories,
  JobCategoryJobCategoriesParams,
  JobCategoryRetrieveJobCategoriesParams,
  JobCategoryUpdateParams,
} from './job-categories/job-categories';
import * as JobSubcategoriesAPI from './job-subcategories/job-subcategories';
import { JobSubcategories, JobSubcategoryUpdateParams } from './job-subcategories/job-subcategories';

export class Config extends APIResource {
  provinces: ProvincesAPI.Provinces = new ProvincesAPI.Provinces(this._client);
  privacyPolicy: PrivacyPolicyAPI.PrivacyPolicy = new PrivacyPolicyAPI.PrivacyPolicy(this._client);
  jobTypes: JobTypesAPI.JobTypes = new JobTypesAPI.JobTypes(this._client);
  jobSubcategories: JobSubcategoriesAPI.JobSubcategories = new JobSubcategoriesAPI.JobSubcategories(
    this._client,
  );
  jobCategories: JobCategoriesAPI.JobCategories = new JobCategoriesAPI.JobCategories(this._client);
  display: DisplayAPI.Display = new DisplayAPI.Display(this._client);
  dictionary: DictionaryAPI.Dictionary = new DictionaryAPI.Dictionary(this._client);
  cities: CitiesAPI.Cities = new CitiesAPI.Cities(this._client);
  banners: BannersAPI.Banners = new BannersAPI.Banners(this._client);
  announcements: AnnouncementsAPI.Announcements = new AnnouncementsAPI.Announcements(this._client);
  bannedWords: BannedWordsAPI.BannedWords = new BannedWordsAPI.BannedWords(this._client);
}

Config.Provinces = Provinces;
Config.PrivacyPolicy = PrivacyPolicy;
Config.JobTypes = JobTypes;
Config.JobSubcategories = JobSubcategories;
Config.JobCategories = JobCategories;
Config.Display = Display;
Config.Dictionary = Dictionary;
Config.Cities = Cities;
Config.Banners = Banners;
Config.Announcements = Announcements;
Config.BannedWords = BannedWords;

export declare namespace Config {
  export {
    Provinces as Provinces,
    type Province as Province,
    type ProvinceCreateParams as ProvinceCreateParams,
    type ProvinceUpdateParams as ProvinceUpdateParams,
    type ProvinceListParams as ProvinceListParams,
  };

  export {
    PrivacyPolicy as PrivacyPolicy,
    type PrivacyPolicyUpdatePrivacyPolicyParams as PrivacyPolicyUpdatePrivacyPolicyParams,
  };

  export { JobTypes as JobTypes, type JobTypeUpdateParams as JobTypeUpdateParams };

  export {
    JobSubcategories as JobSubcategories,
    type JobSubcategoryUpdateParams as JobSubcategoryUpdateParams,
  };

  export {
    JobCategories as JobCategories,
    type JobCategoryUpdateParams as JobCategoryUpdateParams,
    type JobCategoryJobCategoriesParams as JobCategoryJobCategoriesParams,
    type JobCategoryRetrieveJobCategoriesParams as JobCategoryRetrieveJobCategoriesParams,
  };

  export {
    Display as Display,
    type DisplayUpdateFeaturesParams as DisplayUpdateFeaturesParams,
    type DisplayUpdateHotPositionsParams as DisplayUpdateHotPositionsParams,
  };

  export {
    Dictionary as Dictionary,
    type DictionaryItem as DictionaryItem,
    type DictionaryUpdateParams as DictionaryUpdateParams,
    type DictionaryDeleteParams as DictionaryDeleteParams,
    type DictionaryDeleteBatchParams as DictionaryDeleteBatchParams,
    type DictionaryUpdateStatusParams as DictionaryUpdateStatusParams,
  };

  export {
    Cities as Cities,
    type CityCreateParams as CityCreateParams,
    type CityUpdateParams as CityUpdateParams,
    type CityListParams as CityListParams,
  };

  export {
    Banners as Banners,
    type ResultListBanners as ResultListBanners,
    type BannerCreateParams as BannerCreateParams,
    type BannerUploadParams as BannerUploadParams,
  };

  export {
    Announcements as Announcements,
    type Announcement as Announcement,
    type AnnouncementCreateParams as AnnouncementCreateParams,
    type AnnouncementUpdateParams as AnnouncementUpdateParams,
    type AnnouncementListParams as AnnouncementListParams,
  };

  export {
    BannedWords as BannedWords,
    type BannedWordBannedWordsParams as BannedWordBannedWordsParams,
    type BannedWordRetrieveBannedWordsParams as BannedWordRetrieveBannedWordsParams,
  };
}
