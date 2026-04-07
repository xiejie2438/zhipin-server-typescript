// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aiAssistant', () => {
  // Mock server tests are disabled
  test.skip('jdOptimize: only required params', async () => {
    const responsePromise = client.v1.seeker.aiAssistant.jdOptimize({ jobId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('jdOptimize: required and optional params', async () => {
    const response = await client.v1.seeker.aiAssistant.jdOptimize({ jobId: 0 });
  });

  // Mock server tests are disabled
  test.skip('retrieveAnalytics', async () => {
    const responsePromise = client.v1.seeker.aiAssistant.retrieveAnalytics();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('riskAnalysis: only required params', async () => {
    const responsePromise = client.v1.seeker.aiAssistant.riskAnalysis({ jobId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('riskAnalysis: required and optional params', async () => {
    const response = await client.v1.seeker.aiAssistant.riskAnalysis({ jobId: 0 });
  });
});
