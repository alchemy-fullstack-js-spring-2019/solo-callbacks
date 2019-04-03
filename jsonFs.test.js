const { readJSON } = require('./jsonFs');
const { writeJSON } = require('./jsonFs');
const fs = require('fs');

describe('read JSON', () => {
  test('reads JSON string to a file', (done) => {
    const jsonString = JSON.stringify({ stuff: 'stuff stuff stuff' });
    fs.writeFile('jsonTest.txt', jsonString, (err) => {
      if(err) throw err;
      readJSON('jsonTest.txt', (data) => {
        expect(data).toEqual(jsonString);   
        done();
      }); 
    });  
  });
});

describe('write JSON', () => {
  test('writes JSON string to a file', (done) => {
    const jsonString = JSON.stringify({ stuff: 'stuff stuff stuff' });
    fs.writeFile('jsonTest.txt', jsonString, (err) => {
      if(err) throw err;
      readJSON('jsonTest.txt', (data) => {
        expect(data).toEqual(jsonString);   
        done();
      }); 
    });  
  });
});
