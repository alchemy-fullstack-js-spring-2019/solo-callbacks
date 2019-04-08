const wait = require('../lib/wait');

describe('Wait function', () => {
  it('Waits some time and invokes a callback', done => {
    wait(1000, () => {
      done();
    });
  });
});
