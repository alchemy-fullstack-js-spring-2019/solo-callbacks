const { readJSON, writeJSON } = require('../lib/jsonFs');
const fs = require('fs');

describe('jsonFs', () => {

  it('json read function', done => {
    const json = JSON.stringify({ result: true, count: 42 });
    fs.writeFile('./json-file.txt', json, { encoding: 'utf8' }, (err) => {
      readJSON('./json-file.txt', data => {
        expect(data).toEqual({ result: true, count: 42 });
        done();
      });
    });
  });

  it('json write funciton', done => {
    writeJSON('./json-write-file.txt', { result: true, count: 42 }, () => {
      fs.readFile('./json-write-file.txt', { encoding: 'utf8' }, (err, data) => {
        expect(data).toEqual('{"result":true,"count":42}');
        done();
      });
    });
  });
});
