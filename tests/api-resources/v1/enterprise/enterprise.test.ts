// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource enterprise', () => {
  // Mock server tests are disabled
  test.skip('submitFeedback: only required params', async () => {
    const responsePromise = client.v1.enterprise.submitFeedback({ content: '发现一个问题...', type: 'bug' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('submitFeedback: required and optional params', async () => {
    const response = await client.v1.enterprise.submitFeedback({
      content: '发现一个问题...',
      type: 'bug',
      appVersion: '1.0.0',
      contact: '13800138000',
      screenshots: ['https://example.com/1.jpg'],
      title: '发现了一个问题',
    });
  });
});
