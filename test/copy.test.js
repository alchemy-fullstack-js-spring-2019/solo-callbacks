const copy = require('../lib/copy');
const fs = require('fs');

describe('copy function', () => {
  afterEach(done => {
    fs.unlink('./1_callbacks-copy.md', done)
  });

  it('can copy a file', done => {
    copy('./1_callbacks.md', './1_callbacks-copy.md', err => {
      expect(err).toBeUndefined();
      fs.readFile('./1_callbacks.md', 'utf8', (err, originalFile) => {
        fs.readFile('./1_callbacks-copy.md', 'utf8', (err, copiedFile) => {
          expect(originalFile).toEqual(copiedFile);
          done();
        });
      });
    });
  });
});
