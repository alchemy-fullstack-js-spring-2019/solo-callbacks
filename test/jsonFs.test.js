const readJSON = require('../lib/jsonFS');
const fs = require('fs');

describe('jsonFs', () => {
  it('can read a json file', done => {
    const guy = {
      name: 'bro',
      age: 15
    };
    fs.writeJSON('./lib/myJson', JSON.stringify(guy), () => {
      readJSON('./lib/myJSON', (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toEqual(guy);
        done();
      });
    });
  });
});
