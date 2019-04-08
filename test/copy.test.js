const copy = require('../lib/copy');
const fs = require('fs');

describe('Copy function', () => {
  afterEach(done => {
    fs.unlink('./1_callbacks-copy.md', done);
  });
  
  it('Copies a file', done => {
    copy('./1_callbacks.md', './1_callbacks-copy.md', err => {
      expect(err).toBeUndefined();
      fs.readFile('./1_callbacks.md', 'utf8', (err, original) => {
        fs.readFile('./1_callbacks-copy.md', 'utf8', (err, copiedFile) => {
          expect(original).toEqual(copiedFile);
          done();
        });
      });
    });
  });
});
