const { copy } = require('../lib/copyFile.js');
const fs = require('fs');

describe('copy function', () => {
  afterEach(done =>{ 
    fs.unlink('./lib/destinatin.md', done);
  });

  it('can copy a file', done => {
    copy('./lib/sample.md', './lib/destinatin.md', err => {
      expect(err).toBeFalsy();
      fs.readFile('./lib/sample.md', { encoding: 'utf8' }, (err, original) => {
        fs.readFile('./lib/destinatin.md', { encoding: 'utf8' }, (err, copiedFile) => {
          expect(original).toEqual(copiedFile);
          done();
        });
      });      
      
    });
  });
});
