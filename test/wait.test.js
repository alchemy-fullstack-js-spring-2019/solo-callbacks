const wait = require('../lib/wait');

describe('wait function', () => {
  it('waits a # of MSes before invoking the callback', done => {
    wait(1000, () => {
      done();
    }); 
  }); 
});
