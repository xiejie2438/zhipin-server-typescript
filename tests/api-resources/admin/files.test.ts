// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer, { toFile } from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  // Mock server tests are disabled
  test.skip('uploadFile: only required params', async () => {
    const responsePromise = client.admin.files.uploadFile({
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
  test.skip('uploadFile: required and optional params', async () => {
    const response = await client.admin.files.uploadFile({
      file: await toFile(Buffer.from('Example data'), 'README.md'),
    });
  });

  // Mock server tests are disabled
  test.skip('uploadImage: only required params', async () => {
    const responsePromise = client.admin.files.uploadImage({
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
  test.skip('uploadImage: required and optional params', async () => {
    const response = await client.admin.files.uploadImage({
      file: await toFile(Buffer.from('Example data'), 'README.md'),
      type: 'type',
    });
  });
});
