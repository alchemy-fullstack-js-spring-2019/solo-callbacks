const fs = require('fs');
const { 
  readJSON,
  writeJSON
} = require('../lib/writeFile');

describe('jsonFs', () => {
  // afterEach(done => {
  //   fs.unlink('../lib/jsonFS', done);
  // });

  it('can read a json file', done => {
    const guy = {
      name: 'bro',
      age: 15
    };
    fs.writeFile('./lib/jsonFS', JSON.stringify(guy), () => {
      readJSON('./lib/jsonFS', (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toEqual(guy);
        done();
      });
    });
  });

  it('can write a json file', done => {
    const guy = {
      name: 'bro',
      age: 15
    };
    writeJSON('../lib/jsonFS', guy, err => {
      expect(err).toBeFalsy();

      readJSON('../lib/jsonFS', (err, data) => {
        expect(data).toEqual(guy);
        done();
      });
    });
  });
});

