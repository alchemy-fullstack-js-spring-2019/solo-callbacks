const fs = require('fs');
const { 
  readJSON,
  writeJSON
} = require('../lib/jsonFs');

describe('read JSON function', () => {
  afterEach(done => {
    fs.unlink('./myJSON', done);
  });

  it('reads JSON file', done => {
    const dog = {
      name: 'fido',
      age: 5
    };

    fs.writeFile('./myJSON', JSON.stringify(dog), () => {
      readJSON('./myJSON', (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toEqual(dog);
        done();
      });
    });
  });

  it('can write JSON file', () => {
    const dog = {
      name: 'fido',
      age: 5
    };

    writeJSON('./myJSON', dog, err => {
      expect(err).toBeFalsy();
      readJSON('./myJSON', (err, data) => {
        expect(data).toEqual(dog);
        done();
      });
    });
  });
});
