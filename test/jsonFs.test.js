const fs = require('fs');
const { readJSON, writeJSON } = require('../lib/jsonFs');

describe('readJSON tests', () => {
  const dst = './json-test.txt';

  it('Given a path and callback read json', done => {
    const orig = [
      { data: 'Data to be written' },
      { data: 'Data to be written' },
      { data: 'Data to be written' }
    ];

    const jsonString = JSON.stringify(orig);
    fs.writeFile(dst, jsonString, { encoding: 'utf8' }, err => {
      if(err) throw err;
    });

    readJSON(dst, (err, data) => {
      
      expect(err).toBeFalsy();
      expect(data).toEqual(orig);

      done();
    });
  });

  afterEach(done => {
    fs.unlink(dst, done);
  });

});

describe('writeJSON tests', () => {
  const dst = './json-test.txt';
  it('given path, obj, and callback write JSON', done => {
    const obj = {
      name: 'chris',
      other: 'none',
      misc: 5
    };

    writeJSON(dst, obj, () => {
      readJSON(dst, (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toEqual(obj);
        done();
      });
    });

  });

  afterEach(done => {
    fs.unlink(dst, done);
  });

});

describe('Errors', () => {
  it('readJSON returns err if file doesn\'t exist', done => {
    readJSON('bad-file-path.text', (err, data) => {
      expect(err).toBeTruthy();
      expect(data).toBeFalsy();
      done();
    });
  });
});
