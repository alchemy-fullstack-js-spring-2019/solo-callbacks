const copy = require('../lib/copy');

describe('copy a file', () => {
  it('copies a file', done => {
    let src = null;
    let dest = null;

    copy('./1_callbacks.md', './1_callbacks-copy.md', err => {
      expect(err).toBeFalsy();

      expect(copy(src)).toEqual(copy(dest));
    });

    done();
  });
});
