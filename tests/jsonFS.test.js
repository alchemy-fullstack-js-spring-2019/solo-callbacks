const fs = require('fs');
const { readJSON, writeJSON } = require('../lib/jsonFs');

describe('write json', () => {
  afterEach((done) => {
    fs.unlink('./newJSON.json', (err) => {
      done();
    });
  });
  it('reads a json to file', done => {
    readJSON('./test.json', (err, data) => {
      expect(err).toBeFalsy();
      const newData = JSON.stringify(data);
      const parsedJSON = JSON.parse(newData);
      expect(parsedJSON).toBe(data);
      writeJSON('./newJSON.json', parsedJSON, (err) => {
        expect(err).toBeFalsy();
        fs.readFile('./newJSON.json', 'utf8', (err, data) => {
          expect(err).toBeFalsy();
          expect(newData).toEqual(data);
          done();
        });
      });
    });
  });
//   it('writes a json file', done => {
//     writeJSON('./newJson, ')
//   });
});
