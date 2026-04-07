// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer, { toFile } from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource feedbacks', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.admin.feedbacks.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.admin.feedbacks.list();
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
      client.admin.feedbacks.list(
        {
          dateRange: 'dateRange',
          keyword: 'keyword',
          page: 0,
          pageSize: 0,
          status: 'status',
          type: 'type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ZhipinServer.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getStatistics', async () => {
    const responsePromise = client.admin.feedbacks.getStatistics();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getStatistics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.feedbacks.getStatistics({ range: 'range' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ZhipinServer.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('reply: only required params', async () => {
    const responsePromise = client.admin.feedbacks.reply(0, { content: 'content' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('reply: required and optional params', async () => {
    const response = await client.admin.feedbacks.reply(0, { content: 'content', attachments: ['string'] });
  });

  // Mock server tests are disabled
  test.skip('uploadAttachment: only required params', async () => {
    const responsePromise = client.admin.feedbacks.uploadAttachment({
      file: await toFile(Buffer.from('Example data'), 'README.md'),
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
  test.skip('uploadAttachment: required and optional params', async () => {
    const response = await client.admin.feedbacks.uploadAttachment({
      file: await toFile(Buffer.from('Example data'), 'README.md'),
    });
  });
});
