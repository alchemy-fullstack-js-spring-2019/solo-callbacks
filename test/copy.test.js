const fs = require('fs');
const copy = require('../lib/copy');

describe('COPY FUNCTION', () => {
  it('copy a file', done => {
    copy('./2_fs.md', '2_fs-copy.md', err => {
      expect(err).toBeUndefined();
      
      fs.readFile('./2_fs.md', { encoding: 'utf8' }, (err, original) => {
        fs.readFile('./2_fs-copy.md', { encoding: 'utf8' }, (err, copiedFile) => {
          expect(original).toEqual(copiedFile);
          done();
        });
      });    
    });
  });
});
