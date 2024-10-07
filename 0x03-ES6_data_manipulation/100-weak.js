#!/usr/bin/env node
//Track within the weakMap the number of times queryAPI is called for each endp
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const currentCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, currentCount);

  if (currentCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
