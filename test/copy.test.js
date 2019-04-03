const copyFile = require('../lib/copy');
const fs = require('fs');

describe('copy function', () => {
  it('copies logic to a reusable and testable fn', done => {
    copyFile('../1_callbacks.md', '../1_callbacks-copy.md', (err) => {
      expect(err).toBeUndefined;
      // read the copied file
      fs.readFile('../1_callbacks.md', { encoding: 'utf8' }, (err, original) => {
        fs.readFile('../1_callbacks-copy.md', { encoding: 'utf8' }, (err, copiedFile) => {
          expect(original).toEqual(copiedFile);
          done();
        });
      });
    });
  });
});
