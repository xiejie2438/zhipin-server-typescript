// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource locations', () => {
  // Mock server tests are disabled
  test.skip('listNearby: only required params', async () => {
    const responsePromise = client.admin.locations.listNearby({ latitude: 0, longitude: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listNearby: required and optional params', async () => {
    const response = await client.admin.locations.listNearby({
      latitude: 0,
      longitude: 0,
      radius: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.admin.locations.search({ keyword: 'keyword' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('search: required and optional params', async () => {
    const response = await client.admin.locations.search({ keyword: 'keyword', city: 'city' });
  });
});
