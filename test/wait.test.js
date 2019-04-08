const { wait } = require('../lib/wait.js');

describe('wait function', ()=> {
  it('waits then invokes a callback', done => {
    wait(2000, () => {
      done();
    });
  });
});
