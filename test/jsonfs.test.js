const fs = require('fs');
const { readJSON } = require('../lib/jsonfs');

describe('json', () => {
  
  it('writes and reads JSON', done => {
    const jsonObj = { name: 'Timmothy', age: 23 };
    const json = JSON.stringify(jsonObj);
    fs.writeFile('./json', JSON.stringify(jsonObj), () => {
      readJSON('./json', (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toEqual(json);
        done();
      });
    });
  });
});
