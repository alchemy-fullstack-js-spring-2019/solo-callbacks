const { 
  readJSON,
  writeJSON
} = require('./jsonFs');

const fs = require('fs');


describe('JSON methods', () => {
  afterEach(done => {
    fs.unlink('./myJSON', done);
  });
  it('can read a JSON file', () => {
    const dog = {
      name: 'spot',
      age: 15
    };
    fs.writeFile('./myJSON', JSON.stringify(dog), () => {
      readJSON('./myJSON', (err, data) => {
        expect(err).toBeFalsy;
        expect(data).toEqual(dog);
        //done();
      });
    });
  });
  it('can write a JSON file', done => {
    const dog = {
      name: 'spot',
      age: 15
    };
    fs.writeFile('./myJSON', JSON.stringify(dog), () => {
      writeJSON('./myJSON', (err, data) => {
        expect(err).toBeFalsy;
        expect(data).toEqual(dog);
        done();
      });
    });
  });
});
