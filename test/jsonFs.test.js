const { readJSON, writeJSON } = require('../lib/jsonFs');
const fs = require('fs');

describe('JSON TEST', () => {
  afterEach(done => {
    fs.unlink('./json.txt');
  });
  it('readFile', (done) => {
    const json = JSON.stringify({ name: 'buster' });
    fs.writeFile('json.txt', json, () => {
      readJSON('json.txt', (err, data) => {
        expect(err).toBeFalsey();
        expect(data).toEqual(JSON.parse(json));
        done();
      });
    });
  });

  it('writeFile', (done) => {
    const obj = { name: 'boobi miles' };
    writeJSON('json.txt', obj, err => {
      expect(err).toBeFalsey();
      readJSON();
      done();
    });
  });
});
