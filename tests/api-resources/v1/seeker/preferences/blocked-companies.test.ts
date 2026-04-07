// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource blockedCompanies', () => {
  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.v1.seeker.preferences.blockedCompanies.delete('blockId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('blockedCompanies: only required params', async () => {
    const responsePromise = client.v1.seeker.preferences.blockedCompanies.blockedCompanies({
      body: { foo: 'string' },
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
  test.skip('blockedCompanies: required and optional params', async () => {
    const response = await client.v1.seeker.preferences.blockedCompanies.blockedCompanies({
      body: { foo: 'string' },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveBlockedCompanies', async () => {
    const responsePromise = client.v1.seeker.preferences.blockedCompanies.retrieveBlockedCompanies();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
