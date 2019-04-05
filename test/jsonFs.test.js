const fs = require('fs');
const { 
  readJSON,
  writeJSON
} = require('../lib/jsonFS');

describe('jsonFs', () => {
  // afterEach(done => {
  //   fs.unlink('../lib/jsonFS', done);
  // });

  it('can read a json file', done => {
    const guy = {
      name: 'bro',
      age: 15
    };
    fs.writeFile('myJSON.txt', JSON.stringify(guy), () => {
      readJSON('myJSON.txt', (err, data) => {
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
    writeJSON('myJSON.txt', guy, err => {
      expect(err).toBeFalsy();

      readJSON('myJSON.txt', (err, data) => {
        expect(data).toEqual(guy);
        done();
      });
    });
  });
});

