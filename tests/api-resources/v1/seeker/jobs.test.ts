// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jobs', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.seeker.jobs.retrieve(0);
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
    const responsePromise = client.v1.seeker.jobs.list({ request: {} });
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
    const response = await client.v1.seeker.jobs.list({
      request: {
        category: 'category',
        city: 'city',
        education: 'education',
        experience: 'experience',
        jobType: 'jobType',
        keyword: 'keyword',
        offset: 0,
        page: 1,
        pageSize: 20,
        salaryMax: 0,
        salaryMin: 0,
        sortBy: 'sortBy',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveCategories', async () => {
    const responsePromise = client.v1.seeker.jobs.retrieveCategories();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveHot', async () => {
    const responsePromise = client.v1.seeker.jobs.retrieveHot();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveHot: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.seeker.jobs.retrieveHot({ limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ZhipinServer.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveLatest', async () => {
    const responsePromise = client.v1.seeker.jobs.retrieveLatest();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveLatest: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.seeker.jobs.retrieveLatest({ limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ZhipinServer.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveRecommended', async () => {
    const responsePromise = client.v1.seeker.jobs.retrieveRecommended();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveRecommended: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.seeker.jobs.retrieveRecommended(
        { page: 0, pageSize: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ZhipinServer.NotFoundError);
  });
});
