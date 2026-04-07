// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // Mock server tests are disabled
  test.skip('login: only required params', async () => {
    const responsePromise = client.admin.auth.login({ body: { foo: {} } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('login: required and optional params', async () => {
    const response = await client.admin.auth.login({ body: { foo: {} } });
  });

  // Mock server tests are disabled
  test.skip('logout', async () => {
    const responsePromise = client.admin.auth.logout();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveProfile', async () => {
    const responsePromise = client.admin.auth.retrieveProfile();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updatePassword: only required params', async () => {
    const responsePromise = client.admin.auth.updatePassword({ body: { foo: {} } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updatePassword: required and optional params', async () => {
    const response = await client.admin.auth.updatePassword({ body: { foo: {} } });
  });
});
