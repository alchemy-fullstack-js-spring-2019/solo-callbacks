const copy = require('../lib/copy.js');
const fs = require('fs');

describe('copy function', () => {
  const src = './2_fs.md';
  const dst = './2_fs-copy.md';
  afterEach(done => {
    fs.unlink(dst, done);
  });
  it('copies the contents of a file to a new location', done => {
    copy(src, dst, (err) => {
      if(err) throw err;
      
      fs.readFile(src, { encoding: 'utf8' }, (err, original) => {
        fs.readFile(dst, { encoding: 'utf8' }, (err, copied) => {
          expect(original).toEqual(copied);
          done();

        });
      });
    });

    
  });
});
