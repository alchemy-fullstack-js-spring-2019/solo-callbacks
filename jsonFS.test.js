const fs = require('fs');

const { readJSON } = require('./jsonFS');

describe('jsonFS', () => {
  afterEach(done => {
    fs.unlink('./jsonfile.txt', done);
  });

  it('can read a json file', done => {
    const pet = {
      name: 'stitch',
      breed: 'mutt'     
    };

    fs.writeFile('./jsonfile.txt', JSON.stringify(pet), () => {
      readJSON('./jsonfile.txt', (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toEqual(pet);
        done();
      });
    });
  });
});
