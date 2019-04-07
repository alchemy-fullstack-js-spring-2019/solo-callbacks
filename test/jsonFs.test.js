const fs = require('fs');
const { readJSON, writeJSON } = require('../lib/jsonFs.js');

describe('readJSON', () => {
  const expected = {
    name: 'Tommy',
    month: 'April',
    key: 'Value'
  };

  it('reads a json file and returns the object', done => {
    readJSON('./lib/data', (err, data) => {
      expect(err).toBeFalsy();
      expect(data).toEqual(expected);
      done();
    });
  });
});

describe('writeJSON', () => {
  const dst = './test/data';
  const input = {
    state: 'Oregon',
    year: 2019,
    phone: 'Samsung'
  };

  afterEach(done => {
    fs.unlink(dst, done);
  });

  it('creates a json file from an object', done => {
    writeJSON(dst, input, err => {
      expect(err).toBeFalsy();

      readJSON(dst, (err2, data) => {
        expect(err2).toBeFalsy();
        expect(data).toEqual(input);
        done();
      });
    });
  });
});
