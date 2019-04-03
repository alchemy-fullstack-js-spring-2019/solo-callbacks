const wait = require('../lib/wait.js');

describe('wait function', () => {
  it('waits, then invokes callback', done => {
    wait(1000, () => {
      done();
    });
  });
});
