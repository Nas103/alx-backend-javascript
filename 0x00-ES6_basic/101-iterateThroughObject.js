#!/usr/bin/env node
/* iterator */
export default function iterateThroughObject(reportWithIterator) {
  return [...reportWithIterator].join(' | ');
}
