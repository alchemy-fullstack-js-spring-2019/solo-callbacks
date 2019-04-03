const copy = require('../lib/copy.js');
const fs = require('fs');

describe('copy function', () => {
  const src = './2_fs.md';
  const dst = './2_fs-copy.md';
  afterEach(() => {
    fs.unlink(dst, (err) => {
      if(err) throw err;
    });
  });
  it('copies the contents of a file to a new location', done => {
    copy(src, dst, (err) => {
      if(err) throw err;
      
      fs.readFile(dst, { encoding: 'utf8' }, (err, data) => {
        if(err) throw err;
        expect(data).toEqual(expect.any(String));
        done();
      });
    });

    
  });
});
