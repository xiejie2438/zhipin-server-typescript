// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sms', () => {
  // Mock server tests are disabled
  test.skip('login: only required params', async () => {
    const responsePromise = client.v1.enterprise.auth.sms.login({
      password: 'password123',
      phone: '13800138000',
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
  test.skip('login: required and optional params', async () => {
    const response = await client.v1.enterprise.auth.sms.login({
      password: 'password123',
      phone: '13800138000',
    });
  });

  // Mock server tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.v1.enterprise.auth.sms.send({
      phone: '13800138000',
      type: 'login,register,reset_password',
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
  test.skip('send: required and optional params', async () => {
    const response = await client.v1.enterprise.auth.sms.send({
      phone: '13800138000',
      type: 'login,register,reset_password',
    });
  });
});
