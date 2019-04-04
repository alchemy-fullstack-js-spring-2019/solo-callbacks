const { copy } = require('./copy');
const fs = require('fs');

describe('copy file function', () => {
  afterEach(done => {
    fs.unlink('./2_callbacks.md', done);
  });

  test('copies file from source to destination', done => {
    copy('./1_callbacks.md', './2_callbacks.md', err => {
      expect(err).toBeFalsy();
      fs.readFile('./1_callbacks.md', { encoding: 'utf8' }, (err, original) => {
        fs.readFile('./2_callbacks.md', { encoding: 'utf8' }, (err, copiedFile) => {
          expect(original).toEqual(copiedFile);
          done();
        });
      });
    });
  });
});
