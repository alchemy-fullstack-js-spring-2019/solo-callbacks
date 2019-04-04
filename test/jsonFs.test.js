const readJSON = require('../lib/jsonFs');
const fs = require('fs');

describe('reads string from json', () => {
  it('writes a json file to a string', done => {
    const object = { key1: 'value-1', key2: 'value-2' };
    const json = JSON.stringify(object);
    fs.writeFile('./test.json', json, { encoding: 'utf8' }, () => {
      readJSON('./test.json', (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toEqual(object);
        done();
      });
    });
  });
  it('writes a json file from an object', done => {
    const object = { key: 'value', key2: 'value2' };
    writeJSON('./test.json', object, (err, writeData) => {
      expect(err).toBeFalsy();
      readJSON('./test.json', (err, readData) => {
        expect(writeData).toEqual(readData);
        done();
      });
    });
  });
});
