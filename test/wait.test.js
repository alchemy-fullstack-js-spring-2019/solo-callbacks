const wait = require('../lib/wait');

describe('wait', () => {
  it('delay before the callback', done => {
    wait(1000, () => {
      done();
    });
  });
});

// same, but refactored: 

// describe('wait', () => {
//   it('delay before the callback', done => {
//     wait(1000, done);
//   });
// });
