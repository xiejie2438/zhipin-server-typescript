// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer, { toFile } from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource me', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.seeker.account.me.create({ name: '张三' });
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
    const response = await client.v1.seeker.account.me.create({
      name: '张三',
      avatar: 'https://example.com/avatar.jpg',
      title: '高级招聘经理',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.seeker.account.me.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('avatar: only required params', async () => {
    const responsePromise = client.v1.seeker.account.me.avatar({
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
  test.skip('avatar: required and optional params', async () => {
    const response = await client.v1.seeker.account.me.avatar({
      file: await toFile(Buffer.from('Example data'), 'README.md'),
    });
  });

  // Mock server tests are disabled
  test.skip('patchAll: only required params', async () => {
    const responsePromise = client.v1.seeker.account.me.patchAll({ name: '张三' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('patchAll: required and optional params', async () => {
    const response = await client.v1.seeker.account.me.patchAll({
      name: '张三',
      avatar: 'https://example.com/avatar.jpg',
      title: '高级招聘经理',
    });
  });

  // Mock server tests are disabled
  test.skip('updatePassword: only required params', async () => {
    const responsePromise = client.v1.seeker.account.me.updatePassword({
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
    const response = await client.v1.seeker.account.me.updatePassword({
      newPassword: 'new123',
      oldPassword: 'old123',
    });
  });
});
