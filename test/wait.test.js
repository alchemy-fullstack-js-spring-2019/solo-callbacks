const wait = require('../lib/wait');

describe('CALM DOWN', () => {
  it('invokes a callback after a set time', done => {
    wait(1000, done);
  });
});
