const { readJSON } = require('./jsonFs');
const { writeJSON } = require('./jsonFs');
const fs = require('fs');

describe('read JSON', () => {
  test('reads JSON string to a file', (done) => {
    const jsonString = JSON.stringify({ stuff: 'stuff stuff stuff' });
    fs.writeFile('jsonTest.txt', jsonString, (err) => {
      if(err) throw err;
      readJSON('jsonTest.txt', (err, data) => {
        if(err) throw err;
        expect(data).toEqual(JSON.parse(jsonString));   
        done();
      }); 
    });  
  });
});

describe('write JSON', () => {
  test('writes JSON string to a file', (done) => {
    const object = { stuff: 'MOAR STUFFS' };
    writeJSON('jsonTest.txt', object, (err) => {
      if(err) throw err;
      readJSON('jsonTest.txt', (err, data) => {
        if(err) throw err;
        expect(data).toEqual(object);   
        done();
      }); 
    });  
  });
});
