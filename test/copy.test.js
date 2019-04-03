const fs = require('fs');
const copy = require('../lib/copy');

describe('Copy file function test', () => {
  const src = './1_callbacks.md';
  const dst = './1_callbacks-copy2.md';

  it('Given a source, destination and callback', done => {
  
    copy(src, dst, err => {
      if(err) throw err;
      expect(err).toBeFalsy();
      fs.readFile(dst, { encoding: 'utf8' }, (err, orig) => {
        if(err) throw err;
        fs.readFile(src, { encoding: 'utf8' }, (err, copy) => {
          if(err) throw err;
          expect(orig).toEqual(copy);
          done();
        });
      });
    });

  });

  afterEach(done => {
    fs.unlink(dst, done);
  });

});
