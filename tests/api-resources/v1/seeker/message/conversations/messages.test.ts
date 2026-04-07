// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.seeker.message.conversations.messages.create(0, {
      content: '您好，我们安排了面试',
      conversationId: 1,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.seeker.message.conversations.messages.create(0, {
      content: '您好，我们安排了面试',
      conversationId: 1,
      clientMsgId: 'client-msg-001',
      extraData: 'extraData',
      msgType: 'text',
      replyToId: 123,
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.seeker.message.conversations.messages.list(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.seeker.message.conversations.messages.list(
        0,
        {
          before: 'before',
          page: 0,
          pageSize: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ZhipinServer.NotFoundError);
  });
});
