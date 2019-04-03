const readJSON = require('../lib/jsonFs');
const fs = require('js');

describe('readJSON', () => {
  it('reads JSON', () => {
    //turn json into string
    const json = JSON.stringify('./test.json');
    //write json to a file
    fs.writeFile('./newTestJson.js', json, (err) => {
      if(err) throw err;
    });
    //invoke readJSON
  });
});
