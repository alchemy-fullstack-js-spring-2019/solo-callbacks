const fs = require('fs');
const { readJSON, writeJSON } = require('../lib/jsonFS.js');

describe('jsonFS', () => {
  afterEach(done => {
    fs.unlink('./jsonfile.txt', done);
  });

  it('can read a json file', done => {
    const dog = {
      name: 'spot',
      age: 15
    };
    fs.writeFile('./jsonfile.txt', JSON.stringify(dog), () => {
      readJSON('./jsonfile.txt', (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toEqual(dog);
        done();
      });
    });
  });

  it('can write a json file', done => {
    const dog = {
      name: 'spot',
      age: 15
    };

    writeJSON('./jsonfile.txt', dog, err => {
      expect(err).toBeFalsy();

      readJSON('./jsonfile.txt', (err, data) => {
        expect(data).toEqual(dog);
        done();
      });
    });
  });
});
