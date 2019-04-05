const fs = require('fs');
const { readJSON, writeJSON } = require('../lib/jsonFs');

describe('jsonFs function', () => {
  afterEach(done => {
    fs.unlink('./json.txt', done);
  });

  it('can read a json file', done => {
    const json = {
      name: 'leslie',
      age: 25
    };

    fs.writeFile('./json.txt', JSON.stringify(json), () => {
      readJSON('./json.txt', (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toEqual(json);
        done();
      });
    });
  });

  it('can write a json file', done => {
    const json = {
      name: 'leslie',
      age: 25
    };

    writeJSON('./json.txt', json, err => {
      expect(err).toBeFalsy();

      readJSON('./json.txt', (err, data) => {
        expect(data).toEqual(json);
        done();
      });
    });
  });
});
