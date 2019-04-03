const readJSON = require('../lib/jsonFs.js');
const fs = require('fs');

describe('readJSON function', () => {
  const json = { this:'is', a:'test' };
  const src = './practice.txt';
  afterEach(done => {
    fs.unlink(src, done);
  });
  it('reads a JSON from a file', done => {
    const jsonString = JSON.stringify(json);
    fs.writeFile(src, jsonString, (err) => {
      if(err) throw err;
      readJSON(src, (err, read) => {
        expect(read).toEqual(json);
        done();
      });
    });
    
  });
});
