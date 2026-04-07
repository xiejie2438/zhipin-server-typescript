// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource positions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.enterprise.positions.create({
      city: '北京',
      name: '高级Java工程师',
      salaryMax: 35,
      salaryMin: 25,
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
    const response = await client.v1.enterprise.positions.create({
      city: '北京',
      name: '高级Java工程师',
      salaryMax: 35,
      salaryMin: 25,
      address: '朝阳区xxx大厦',
      benefits: ['五险一金', '带薪年假'],
      category: '技术',
      description: '岗位职责：...',
      district: '朝阳区',
      education: '本科',
      experience: '3-5年',
      headcount: 2,
      highlights: ['核心部门', '技术大牛'],
      interviewProcess: ['初筛', '一面', '二面', 'HR面'],
      jobType: 'full_time',
      requirements: '任职要求：...',
      salaryMonth: 13,
      skills: ['Java', 'Spring Boot', 'MySQL'],
      subCategory: '后端开发',
      urgency: false,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.enterprise.positions.retrieve(0);
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
    const responsePromise = client.v1.enterprise.positions.update(0, {
      city: '北京',
      name: '高级Java工程师',
      salaryMax: 35,
      salaryMin: 25,
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
    const response = await client.v1.enterprise.positions.update(0, {
      city: '北京',
      name: '高级Java工程师',
      salaryMax: 35,
      salaryMin: 25,
      address: '朝阳区xxx大厦',
      benefits: ['五险一金', '带薪年假'],
      category: '技术',
      description: '岗位职责：...',
      district: '朝阳区',
      education: '本科',
      experience: '3-5年',
      headcount: 2,
      highlights: ['核心部门', '技术大牛'],
      interviewProcess: ['初筛', '一面', '二面', 'HR面'],
      jobType: 'full_time',
      requirements: '任职要求：...',
      salaryMonth: 13,
      skills: ['Java', 'Spring Boot', 'MySQL'],
      subCategory: '后端开发',
      urgency: false,
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.enterprise.positions.list({ request: {} });
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
    const response = await client.v1.enterprise.positions.list({
      request: {
        keyword: 'keyword',
        offset: 0,
        page: 1,
        pageSize: 20,
        status: 'status',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.v1.enterprise.positions.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateStatus: only required params', async () => {
    const responsePromise = client.v1.enterprise.positions.updateStatus(0, { status: 'closed' });
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
    const response = await client.v1.enterprise.positions.updateStatus(0, {
      status: 'closed',
      reason: '已招满',
    });
  });
});
