const { readJSON, writeJSON } = require('../lib/jsonFs');
const fs = require('fs');

describe('Read and Write JSON Tests', ()=> {
    
  afterEach(done => {
    fs.unlink('../cooljson', done);
  });

  it('will read a JSON file', done => {
    const json = { name: 'cool name' };
    const stringJSON = JSON.stringify(json);
    fs.writeFile('../cooljson', stringJSON, () => { //since we are not testing this, we dont need it to throw an error
      readJSON('../cooljson', (err, data) => { //(error OR data will be returned)
        expect(err).toBeFalsy();
        expect(data).toEqual(json);
        done();
      });
    });
  });
  it('will write a JSON file', done => {
    const json = { name: 'cool name' };
    writeJSON('../cooljson', json, err => {
      expect(err).toBeFalsy();

      readJSON('../cooljson', (err, data) => {
        expect(data).toEqual(json);
        done();
      });
    });
  });
});
