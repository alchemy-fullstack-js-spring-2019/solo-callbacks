const copyFile = require('../lib/copyFileFn.js');

describe('copy function', () => {
  it('invoke the copy function to copy a file', done => {
    let copy = null;
    const copiedFile = copyFile('./1_callbacks.md', './1_callbacksCopy.md');

    const fs = require('fs');
    fs.readFile('./1_callbacks.md', { encoding: 'utf8' }, (err, data) => {
      if(err) throw err;
      copy = data;
    });
    
    console.log(copiedFile);
    console.log(copy);
    expect(copiedFile).toEqual(copy);
    done();
  });
});
