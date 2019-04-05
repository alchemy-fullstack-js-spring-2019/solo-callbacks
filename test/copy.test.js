const fs = require('fs');
const copy = require('../lib/copy.js');

afterEach(() => {
  fs.unlink('./new_writing.txt', (err) => {
    if(err) throw err;
  });
});

describe('copy', () => {
  it('test copy function', done => {
    copy('./writing.txt', './new_writing.txt', err => {
      expect(err).toBeFalsy();
      fs.readFile('./writing.txt', { encoding: 'utf8' }, (err, original) => {
        fs.readFile('./new_writing.txt', { encoding: 'utf8' }, (err, copied) => {
          expect(original).toEqual(copied);
          done();
        });
      });
    });
  });
});



