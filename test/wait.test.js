const { wait } = require('../lib/wait.js');
describe('wait function', () => {
  it('waits a bit then invokes callback', done => {
    wait(1000, () => {
      done();
    });
  });
});
