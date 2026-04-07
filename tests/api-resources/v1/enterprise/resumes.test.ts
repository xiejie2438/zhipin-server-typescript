// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource resumes', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.enterprise.resumes.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.enterprise.resumes.list({ request: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.v1.enterprise.resumes.list({
      request: {
        applyTimeEnd: 'applyTimeEnd',
        applyTimeStart: 'applyTimeStart',
        education: ['string'],
        offset: 0,
        page: 1,
        pageSize: 20,
        positionId: 0,
        status: 'status',
        workYears: ['string'],
      },
    });
  });

  // Mock server tests are disabled
  test.skip('reject', async () => {
    const responsePromise = client.v1.enterprise.resumes.reject(0, {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('statistics', async () => {
    const responsePromise = client.v1.enterprise.resumes.statistics();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('statistics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.enterprise.resumes.statistics(
        {
          endDate: 'endDate',
          positionId: 0,
          startDate: 'startDate',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ZhipinServer.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('updateStatus: only required params', async () => {
    const responsePromise = client.v1.enterprise.resumes.updateStatus(0, { status: 'screening' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateStatus: required and optional params', async () => {
    const response = await client.v1.enterprise.resumes.updateStatus(0, {
      status: 'screening',
      remark: '简历符合要求，安排初筛',
    });
  });
});
