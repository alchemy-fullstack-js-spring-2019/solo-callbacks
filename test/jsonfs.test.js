const fs = require('fs');
const { readJSON } = require('../lib/jsonfs');

describe('json', () => {


  it('writes and reads JSON', done => {
    const json = JSON.stringify({ name: 'Timmothy', age: 23 });
    fs.writeFile('./json.txt', json, 'utf8', () => {
      readJSON('./json.txt', data => {
        expect(data).toEqual(json);
        done();
      });
    });
  });
});
