const fs = require('fs');

const { readJSON } = require('./jsonFS');

describe('readJSON', () => {
  it('turns JSON into a string', () => {
    const testString = {
      test: 'string to be strung'      
    };

    const json = JSON.stringify(testString);
    fs.writeFile('jsonfile.txt', json, err => {
      if(err) throw err;
      // console.log('done');
      readJSON('./jsonfile.txt', (err, data) => {
        expect(data).toEqual(json);
      });
    });


    // invoke the readJSON function and expect the written json
  });
});
