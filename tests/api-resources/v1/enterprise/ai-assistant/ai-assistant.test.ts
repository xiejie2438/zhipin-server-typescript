// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aiAssistant', () => {
  // Mock server tests are disabled
  test.skip('analyzeResume', async () => {
    const responsePromise = client.v1.enterprise.aiAssistant.analyzeResume(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('dashboard', async () => {
    const responsePromise = client.v1.enterprise.aiAssistant.dashboard();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('generateQuestions: only required params', async () => {
    const responsePromise = client.v1.enterprise.aiAssistant.generateQuestions({
      positionId: 0,
      resumeId: 0,
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
  test.skip('generateQuestions: required and optional params', async () => {
    const response = await client.v1.enterprise.aiAssistant.generateQuestions({ positionId: 0, resumeId: 0 });
  });

  // Mock server tests are disabled
  test.skip('positionRecommendations', async () => {
    const responsePromise = client.v1.enterprise.aiAssistant.positionRecommendations();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resumeOptimization: only required params', async () => {
    const responsePromise = client.v1.enterprise.aiAssistant.resumeOptimization({ positionId: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resumeOptimization: required and optional params', async () => {
    const response = await client.v1.enterprise.aiAssistant.resumeOptimization({ positionId: 1 });
  });

  // Mock server tests are disabled
  test.skip('suggestReply: only required params', async () => {
    const responsePromise = client.v1.enterprise.aiAssistant.suggestReply({ conversationId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('suggestReply: required and optional params', async () => {
    const response = await client.v1.enterprise.aiAssistant.suggestReply({
      conversationId: 0,
      context: 'context',
    });
  });
});
