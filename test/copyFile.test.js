const copyFile = require('../lib/copyFile');
const fs = require('fs');


describe('reads a file and writes a file to a new location', () => {
  afterEach(done => {
    fs.unlink('../1_callbacks-copy.md', done);
  });
  it('can copy a file', done => {
    copyFile('../1_callbacks.md', '../1_callbacks-copy.md', err => {
      expect(err).toBeFalsy();
      fs.readFile('../1_callbacks.md', { encoding: 'utf-8' }, (err, original) => {
        fs.readFile('../1_callbacks-copy.md', { encoding: 'utf-8' }, (err, copy) => {
          expect(copy).toEqual(original);
        });
      });
    });
  });
});


