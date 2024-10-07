import { queryAPI, weakMap } from './100-weak.js';

describe('queryAPI tests', () => {
  const endpoint = { protocol: 'http', name: 'getUsers' };

  test('queryAPI should track the number of calls', () => {
    expect(weakMap.get(endpoint)).toBe(undefined);
    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(1);
    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(2);
  });

  test('queryAPI should throw error after 5 calls', () => {
    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    expect(() => {
      queryAPI(endpoint);
    }).toThrowError(new Error('Endpoint load is high'));
  });
});
