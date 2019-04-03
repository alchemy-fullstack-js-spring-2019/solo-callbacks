const { readJSON, writeJSON } = require('../lib/jsonFs.js');
const fs = require('fs');

describe('read a json', () => {
  it('test readJson', () => {
    const obj = { message: 'hi' };
    const json = JSON.stringify(obj);
    fs.writeFile('./jsonTest.txt', json, (err) => {
      if(err) throw err;
      readJSON('./jsonTest.txt', (err, data) => {
        if(err) throw err;
        expect(data).toEqual(JSON.parse(json));
      });
    });
  });
  
  it('test writeJson', () => {
    const obj = { message: 'hi' };
    writeJSON('./jsonWriteTest.txt', obj, () => {
      readJSON('./jsonWriteTest.txt', (err, data) => {
        if(err) throw err;
        expect(data).toEqual(obj);
      });
    });
  });
});
