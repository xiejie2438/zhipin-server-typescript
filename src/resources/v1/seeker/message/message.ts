// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WorkExperienceAPI from '../profile/work-experience';
import * as ConversationsAPI from './conversations/conversations';
import {
  ConversationCreateParams,
  ConversationCreateRequest,
  ConversationResponse,
  ConversationUpdateMuteParams,
  ConversationUpdatePinParams,
  Conversations,
  ResultConversation,
  ResultListConversation,
} from './conversations/conversations';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Message extends APIResource {
  conversations: ConversationsAPI.Conversations = new ConversationsAPI.Conversations(this._client);

  /**
   * 撤回消息
   *
   * @example
   * ```ts
   * const resultVoid = await client.v1.seeker.message.recall(0);
   * ```
   */
  recall(messageID: number, options?: RequestOptions): APIPromise<WorkExperienceAPI.ResultVoid> {
    return this._client.post(path`/api/v1/seeker/message/${messageID}/recall`, options);
  }
}

Message.Conversations = Conversations;

export declare namespace Message {
  export {
    Conversations as Conversations,
    type ConversationCreateRequest as ConversationCreateRequest,
    type ConversationResponse as ConversationResponse,
    type ResultConversation as ResultConversation,
    type ResultListConversation as ResultListConversation,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationUpdateMuteParams as ConversationUpdateMuteParams,
    type ConversationUpdatePinParams as ConversationUpdatePinParams,
  };
}
