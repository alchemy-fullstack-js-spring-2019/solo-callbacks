const { wait } = require('../lib/wait');

describe('wait function', () => {
  it('wait some time and invokes callback', done => {
    wait(1000, () => {
      done();
    });
  });
});
