const fs = require('fs');
const copy = require('../lib/copy');

describe('Copy file function test', () => {
  const src = './1_callbacks.md';
  const dst = './1_callbacks-copy2.md';

  it('Given a source, destination and callback', done => {
  
    copy(src, dst, err => {
      if(err) throw err;
      
      expect(fs.readFile(dst, { encoding: 'utf8' }, (err, data) => {
        if(err) throw err;
        return data;
      })).toEqual(fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
        if(err) throw err;
        return data;
      }));

      done();
    });

  });

  afterEach(() => {
    fs.unlink(dst, err => {
      if(err) throw err;
      // console.log(`${dst} was deleted`);
    });
  });

});
