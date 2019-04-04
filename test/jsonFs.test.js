const fs = require('fs');
const { readJSON, writeJSON } = require('../lib/jsonFs');

describe('JSON TEST', () => {
  afterEach(done => {
    fs.unlink('./json.txt', done);
  });
  it('readFile', (done) => {
    const json = JSON.stringify({ name: 'buster' });
    fs.writeFile('./json.txt', json, () => {
      readJSON('./json.txt', (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toEqual(JSON.parse(json));
        done();
      });
    });
  });

  it('writeFile', done => {
    const obj = { name: 'boobi miles' };
    writeJSON('./json.txt', obj, err => {
      expect(err).toBeFalsy();
      
      readJSON('./json.txt', (err, data) => {
        expect(data).toEqual(obj);
        done();
      });
    });
  });
});
