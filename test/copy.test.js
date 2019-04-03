const copy = require('../lib/copy');
const fs = require('fs');

describe('copy function', () => {
  afterEach(done => {
    fs.unlink('./callbacks-copy.md', done);
  });

  it('can copy a file', done => {
    copy('./1_callbacks.md', './callbacks-copy.md', err => {
      expect(err).toBeFalsy();
      fs.readFile('./1_callbacks.md', { encoding: 'utf8' }, (err, original) => {
        fs.readFile('./callbacks-copy.md', { encoding: 'utf8' }, (err, copiedFile) => {
          expect(original).toEqual(copiedFile);
          done();
        });
      });
    });
  });
});
