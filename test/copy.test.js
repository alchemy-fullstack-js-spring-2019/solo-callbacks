const { copy } = require('../lib/copy');
const fs = require('fs');

describe('copy function', () => {
  afterEach(done => {
    fs.unlink('./2_fs-copy.md', done);
  });

  it('can copy a file', done => {
    copy('./2_fs.md', './2_fs-copy.md', err => {
      expect(err).toBeUndefined();
      fs.readFile('./2_fs.md', { encoding: 'utf8' }, (err, originalFile) => {
        fs.readFile('./2_fs-copy.md', { encoding: 'utf8' }, (err, copiedFile) => {
          expect(originalFile).toEqual(copiedFile);
          done();
        });
      });
    });
  });
});
