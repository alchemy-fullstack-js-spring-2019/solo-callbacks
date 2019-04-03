const copy = require('./copy');
const fs = require('fs');

describe('copy function', () => {
  afterEach(done => {
    fs.unlink('./copyFunction.md', done);
  });

  it('can copy a file,', done => {
    copy('./1_callbacks.md', './copyFunction.md', err=> {
      
      expect(err).toBeFalsy();
      fs.readFile('./1_callbacks.md', 'utf8', (err, original) => {
        fs.readFile('./copyFunction.md', 'utf8', (err, copiedFile) => {
          expect(original).toEqual(copiedFile);
          done();
        });
      });
    });
  });
});

