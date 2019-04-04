const copy = require('../lib/copy');
const fs = require('fs');

describe('copy function', () => {
  it('can copy a file', done => {
    copy('./1_callbacks.md', './copy.txt', err => {
      expect(err).toBeFalsy();
      fs.readFile('./1_callbacks.md', { encoding: 'utf8' }, (err, original) => {
        fs.readFile('./copy.txt', { encoding: 'utf8' }, (err, copiedFile) => {
          expect(original).toEqual(copiedFile);
          done();
        });
      }); 
    });
  });
});
