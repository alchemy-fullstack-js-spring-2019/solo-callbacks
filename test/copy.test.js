const fs = require('fs');
const copy = require('../lib/copy.js');

afterEach(() => {
  fs.unlink('./new_writing.txt', (err) => {
    if(err) throw err;
  });
});

describe('copy', () => {
  it('test copy function', done => {
    copy('./writing.txt', './new_writing.txt', () => {
      expect(fs.readFile('./writing.txt', 'utf8', (err, data) => {
        if(err) throw err;
        return data;
      }))
        .toBe(fs.readFile('./new_writing.txt', 'utf8', (err, data) => {
          if(err) throw err;
          return data;
        }));
      done();
    });
  });
});



