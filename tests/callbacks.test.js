const wait = require('../lib/callbacks');

describe('callback tests', () => {
  it('waits two seconds before calling callback', done => {
    wait(2000, done());
  });
});
