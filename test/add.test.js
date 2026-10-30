const assert = require('node:assert');
const { add } = require('../src/add.js');

assert.strictEqual(add(2, 2), 4);
console.log('add.test.js passed');
