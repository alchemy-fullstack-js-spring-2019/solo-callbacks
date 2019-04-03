const copy = require('../lib/copy');

describe('copy function', () => {
  it('can copy a file', done => {
    copy('./1_callbacks.md', 'copy.txt', err => {
      if (err) throw err;
    });
  })
});
