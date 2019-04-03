const fs = require('fs');
const copy = require('../lib/copy.js');

describe('copy function', () => {
  afterEach(() => {
    fs.unlink('test/2_fs-copy.md', err => {
      if(err) throw err;
    });
  });

  it('copies a file and places it in specified location', done => {
    copy('2_fs.md', 'test/2_fs-copy.md', err => {
      if(err) throw 'POOP';
      fs.readFile('test/2_fs-copy.md', (err, data) => {
        if(err) throw 'POOP';
        expect.any(data);
        done();
      });
    });

  });
});
