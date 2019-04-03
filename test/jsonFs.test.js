const fs = require('fs');
const { readJSON } = require('../lib/jsonFs');

describe('jsonFs function', () => {
  it('can read a json file', done => {
    const json = {
      name: 'leslie',
      age: 25
    };

    fs.writeFile('./json.txt', JSON.stringify(json), () => {
      readJSON('./json.txt', (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toEqual({ name: 'leslie', age: 25 });
        done();
      });
    });
  });
});
