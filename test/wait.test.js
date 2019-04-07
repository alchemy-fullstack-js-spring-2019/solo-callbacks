const { wait, again } = require('../lib/wait.js');

describe('wait function', () => {
  it('waits a bit then invokes callback', done => {
    wait(3000, done);
  });
});

describe('again function', () => {
  it('waits a bit then invokes callback', done => {
    again(500, done);
  });
});
