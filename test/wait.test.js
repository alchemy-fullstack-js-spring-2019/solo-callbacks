const wait = require('../lib/wait');

describe('timer tests', () => {
  it('fires a callback after 1 second', done => {
    wait(1000, done);
  });
});
