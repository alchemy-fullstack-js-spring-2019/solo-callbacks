const wait = require('../lib/index');

describe('wait function', done => {
  it('wait 1sec to run', () => {
    wait(1000, () => {
      done();
    });
  });
});
