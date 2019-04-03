const { wait } = require('./wait');

describe('practice callbacks', () => {
  it('waits then invokes callback', done => {
    wait(1000, done);
  });
});
