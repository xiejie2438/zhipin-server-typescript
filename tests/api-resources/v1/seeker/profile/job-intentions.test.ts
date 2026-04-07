// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jobIntentions', () => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.seeker.profile.jobIntentions.update(0, {
      city: 'city',
      jobStatus: 'jobStatus',
      jobType: 'jobType',
      salaryMax: 1,
      salaryMin: 1,
      title: 'title',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.v1.seeker.profile.jobIntentions.update(0, {
      city: 'city',
      jobStatus: 'jobStatus',
      jobType: 'jobType',
      salaryMax: 1,
      salaryMin: 1,
      title: 'title',
      companySizes: ['string'],
      companyTypes: ['string'],
      overseasTypes: ['string'],
      skills: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.v1.seeker.profile.jobIntentions.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('jobIntentions: only required params', async () => {
    const responsePromise = client.v1.seeker.profile.jobIntentions.jobIntentions({
      city: 'city',
      jobStatus: 'jobStatus',
      jobType: 'jobType',
      salaryMax: 1,
      salaryMin: 1,
      title: 'title',
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
  test.skip('jobIntentions: required and optional params', async () => {
    const response = await client.v1.seeker.profile.jobIntentions.jobIntentions({
      city: 'city',
      jobStatus: 'jobStatus',
      jobType: 'jobType',
      salaryMax: 1,
      salaryMin: 1,
      title: 'title',
      companySizes: ['string'],
      companyTypes: ['string'],
      overseasTypes: ['string'],
      skills: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveJobIntentions', async () => {
    const responsePromise = client.v1.seeker.profile.jobIntentions.retrieveJobIntentions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
