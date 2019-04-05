const copyFile = require('../lib/copyFile');
const fs = require('fs');


describe('reads a file and writes a file to a new location', () => {
  
  beforeEach(() => {
    fs.writeFile('./test.txt', 'string', err => {
      if(err) throw err;
    });
  });
  afterEach(done => {
    fs.unlink('./test.txt', () => {
      fs.unlink('./test-copy.txt', done);
    });
  });
  it('can copy a file', done => {
    copyFile('./test.txt', './test-copy.txt', (err, data) => {
      expect(err).toBeFalsy();
      fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, original) => {
        fs.readFile('./test-copy.txt', { encoding: 'utf-8' }, (err, copy) => {
          expect(copy).toEqual(original);
          done();
        });
      });
    });
  });
});


