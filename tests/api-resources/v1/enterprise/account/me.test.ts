// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer, { toFile } from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource me', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.enterprise.account.me.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.enterprise.account.me.update({ name: '张三' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.v1.enterprise.account.me.update({
      name: '张三',
      avatar: 'https://example.com/avatar.jpg',
      title: '高级招聘经理',
    });
  });

  // Mock server tests are disabled
  test.skip('updatePassword: only required params', async () => {
    const responsePromise = client.v1.enterprise.account.me.updatePassword({
      newPassword: 'new123',
      oldPassword: 'old123',
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
  test.skip('updatePassword: required and optional params', async () => {
    const response = await client.v1.enterprise.account.me.updatePassword({
      newPassword: 'new123',
      oldPassword: 'old123',
    });
  });

  // Mock server tests are disabled
  test.skip('updatePatch: only required params', async () => {
    const responsePromise = client.v1.enterprise.account.me.updatePatch({ name: '张三' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updatePatch: required and optional params', async () => {
    const response = await client.v1.enterprise.account.me.updatePatch({
      name: '张三',
      avatar: 'https://example.com/avatar.jpg',
      title: '高级招聘经理',
    });
  });

  // Mock server tests are disabled
  test.skip('uploadAvatar: only required params', async () => {
    const responsePromise = client.v1.enterprise.account.me.uploadAvatar({
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
  test.skip('uploadAvatar: required and optional params', async () => {
    const response = await client.v1.enterprise.account.me.uploadAvatar({
      file: await toFile(Buffer.from('Example data'), 'README.md'),
    });
  });
});
