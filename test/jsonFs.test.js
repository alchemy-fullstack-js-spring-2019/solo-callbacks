const fs = require('fs');

const { readJson } = require('../lib/jsonFs'); 


describe('write json to file', () => {
  it('stringify json', () => {
    fs.readFile('../package.json', { encoding: 'utf8' }, (err, data) => {
      data.toString(data);
    });

  });
});
