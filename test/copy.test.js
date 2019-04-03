const { copy } = require('../lib/copy');
const fs = require('fs');

describe('copy function', () => {
  afterEach(done => {
    fs.unlink('./2_fs.md', done);
  });

  it('can copy a file', done => {
    copy('./2_fs.md', './2_fs-copy.md', err => {
      // expect error to not happen
      expect(err).toBeUndefined();
      // read the copied file and the original file
      fs.readFile('./2_fs.md', { encoding: 'utf8' }, (err, originalFile) => {
        fs.readFile('./2_fs-copy.md', { encoding: 'utf8' }, (err, copiedFile) => {
          // test that the copied file and original file are the same
          expect(originalFile).toEqual(copiedFile);
          done();
        });
      });
    });
  });
});
