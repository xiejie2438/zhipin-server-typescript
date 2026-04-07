// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource companies', () => {
  // Mock server tests are disabled
  test.skip('requestAdminTransfer: only required params', async () => {
    const responsePromise = client.v1.enterprise.companies.requestAdminTransfer({ newAdminId: 2 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('requestAdminTransfer: required and optional params', async () => {
    const response = await client.v1.enterprise.companies.requestAdminTransfer({
      newAdminId: 2,
      reason: '工作交接',
    });
  });

  // Mock server tests are disabled
  test.skip('requestChange: only required params', async () => {
    const responsePromise = client.v1.enterprise.companies.requestChange({
      businessLicense: 'https://example.com/new-license.jpg',
      newCompanyName: '新公司名称',
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
  test.skip('requestChange: required and optional params', async () => {
    const response = await client.v1.enterprise.companies.requestChange({
      businessLicense: 'https://example.com/new-license.jpg',
      newCompanyName: '新公司名称',
      reason: '公司更名',
    });
  });
});
