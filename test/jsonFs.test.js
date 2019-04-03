const fs = require('fs');
const readJSON = require('../lib/jsonFs');

describe('readJSON tests', () => {
  const dst = './json-test.txt';

  it('Given a path and callback read json', done => {
    const string = 'Data to be written';
    const jsonString = JSON.stringify(string);
    fs.writeFile(dst, jsonString, { encoding: 'utf8' }, err => {
      if(err) throw err;
    });

    readJSON(dst, data => {
      
      expect(data).toBe(string);

      done();
    });
  });

  afterEach(() => {
    fs.unlink(dst, err => {
      if(err) throw err;
    });
  });
  
});
