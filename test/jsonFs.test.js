const fs = require('fs');
const { readJSON, writeJSON } = require('../lib/jsonFs');

describe('jsonFs', () => {
  afterEach(done => {
    fs.unlink('./myJSON', done);
  });

  it('Read json file', done => {
    const dog = {
      name: 'oso',
      type: 'border collie'
    };
    fs.writeFile('./myJSON', JSON.stringify(dog), () => {
      readJSON('./myJSON', (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toEqual(dog);
        done();
      });
    });
  });

  it('Write json file', done => {
    const dog = {
      name: 'oso',
      type: 'border collie'
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
