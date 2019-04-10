const fs = require('fs');
const { 
  readJSON,
  writeJSON
} = require('../lib/jsonFs');

describe('JSON function', () => {
  afterEach(done => {
    fs.unlink('./myJSON.txt', done);
  });

  it('reads JSON file', done => {
    const dogJson = {
      name: 'fido',
      age: 5
    };

    fs.writeFile('./myJSON.txt', JSON.stringify(dogJson), () => {
      readJSON('./myJSON.txt', (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toEqual(dogJson);
        done();
      });
    });
  });

  it('can write JSON file', done => {
    const dogJson = {
      name: 'fido',
      age: 5
    };

    writeJSON('./myJSON.txt', dogJson, err => {
      expect(err).toBeFalsy();

      readJSON('./myJSON.txt', (err, data) => {
        expect(data).toEqual(dogJson);
        done();
      });
    });
  });
});
