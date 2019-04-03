const wait = require('../lib/index');

describe('wait function', () => {
  it('wait 1sec to run', () => {
    wait(1000, (done) => {
      done();
    });
  });
});
