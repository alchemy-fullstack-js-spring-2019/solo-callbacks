const { copyFile } = require('../lib/copyFileFn.js');
const fs = require('fs');

describe('copyFile function tests', ()=> {
  afterEach(done=> {
    fs.unlink('./1_callbacksCopy.md', done);
  });

  it('will copyFile the contents of a file', done => {
    copyFile('./1_callbacks.md', './1_callbacksCopy.md', err => {
      expect(err).toBeUndefined();
      fs.readFile('./1_callbacks.md', 'utf8', (err, original => {
        fs.readFile('./1_callbacksCopy.md', 'utf8', (err, copiedFile => {
          expect(original).toEqual(copiedFile);
          done();
        }));
      }));
    });
  });
});
