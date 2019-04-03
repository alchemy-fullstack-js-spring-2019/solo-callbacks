const readJSON = require('../lib/jsonFs');
const fs = require('fs');

describe('jsonFs', () => {

  it('json function', done => {
    const json = JSON.stringify({ result: true, count: 42 });
    fs.writeFile('./json-file.txt', json, { encoding: 'utf8' }, (err) => {
      if(err) throw err;
      readJSON('./json-file.txt', data => {
        expect(data).toEqual({ result: true, count: 42 });
        done();
      });
    });
  });
});
