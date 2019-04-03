const wait = require('../lib/wait');

describe('Wait tests', () => {
  it('waits a bit then invokes callback', done => {
    const milliseconds = 1000;
    wait(milliseconds, done);
  });
});
