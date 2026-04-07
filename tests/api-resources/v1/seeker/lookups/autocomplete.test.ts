// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZhipinServer from 'zhipin-server';

const client = new ZhipinServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource autocomplete', () => {
  // Mock server tests are disabled
  test.skip('retrieveCompanies: only required params', async () => {
    const responsePromise = client.v1.seeker.lookups.autocomplete.retrieveCompanies({ keyword: 'keyword' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveCompanies: required and optional params', async () => {
    const response = await client.v1.seeker.lookups.autocomplete.retrieveCompanies({
      keyword: 'keyword',
      limit: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveMajors: only required params', async () => {
    const responsePromise = client.v1.seeker.lookups.autocomplete.retrieveMajors({ keyword: 'keyword' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveMajors: required and optional params', async () => {
    const response = await client.v1.seeker.lookups.autocomplete.retrieveMajors({
      keyword: 'keyword',
      limit: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('retrievePositions: only required params', async () => {
    const responsePromise = client.v1.seeker.lookups.autocomplete.retrievePositions({ keyword: 'keyword' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrievePositions: required and optional params', async () => {
    const response = await client.v1.seeker.lookups.autocomplete.retrievePositions({
      keyword: 'keyword',
      limit: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveSchools: only required params', async () => {
    const responsePromise = client.v1.seeker.lookups.autocomplete.retrieveSchools({ keyword: 'keyword' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveSchools: required and optional params', async () => {
    const response = await client.v1.seeker.lookups.autocomplete.retrieveSchools({
      keyword: 'keyword',
      limit: 0,
    });
  });
});
