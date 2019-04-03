const fs = require('fs');

const { readJSON } = require('./jsonFS');

describe('readJSON', () => {
  it('turns JSON into a string', () => {
    const testString = {
      'test': 'string to be strung'      
    };
    const json = JSON.stringify(testString);
    
    // readJSON('./1_callbacks.md', callback);
  });
});
