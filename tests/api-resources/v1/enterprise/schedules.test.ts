// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schedules', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.enterprise.schedules.create({
      endTime: '2019-12-27T18:11:19.117Z',
      startTime: '2019-12-27T18:11:19.117Z',
      type: 'interview',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.enterprise.schedules.create({
      endTime: '2019-12-27T18:11:19.117Z',
      startTime: '2019-12-27T18:11:19.117Z',
      type: 'interview',
      description: 'description',
      interviewerIds: [2, 3],
      location: '会议室A',
      meetingLink: 'meetingLink',
      message: '期待与您的面试',
      notifyCandidate: true,
      resumeId: 1,
      round: 'first',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.enterprise.schedules.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.v1.enterprise.schedules.update(0, {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.enterprise.schedules.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.enterprise.schedules.list(
        {
          endDate: 'endDate',
          page: 0,
          pageSize: 0,
          startDate: 'startDate',
          status: 'status',
          type: 'type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ZhipinServer.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.v1.enterprise.schedules.delete(0, { reason: 'reason' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.v1.enterprise.schedules.delete(0, { reason: 'reason' });
  });

  // Mock server tests are disabled
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.v1.enterprise.schedules.cancel(0, { reason: 'reason' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cancel: required and optional params', async () => {
    const response = await client.v1.enterprise.schedules.cancel(0, { reason: 'reason' });
  });

  // Mock server tests are disabled
  test.skip('confirm', async () => {
    const responsePromise = client.v1.enterprise.schedules.confirm(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('submitFeedback: only required params', async () => {
    const responsePromise = client.v1.enterprise.schedules.submitFeedback(0, {
      content: '技术基础扎实，沟通能力良好',
      result: 'pass',
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
  test.skip('submitFeedback: required and optional params', async () => {
    const response = await client.v1.enterprise.schedules.submitFeedback(0, {
      content: '技术基础扎实，沟通能力良好',
      result: 'pass',
      recommendation: 'recommendation',
      scores: { technical: 4, communication: 5 },
      strengths: 'strengths',
      weaknesses: 'weaknesses',
    });
  });
});
