const wait = require('../lib/wait');

describe('wait fn', () => {
  it('waits some time and invokes a callback', done => {
    wait(1000, () => {
      done();
    });
  });
});
