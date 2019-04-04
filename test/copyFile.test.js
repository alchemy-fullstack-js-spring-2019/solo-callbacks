const copyFile = require('../lib/copyFile');



describe('reads a file and writes a file to a new location', () => {
  it('can copy a file', done => {
    copyFile('../1_callbacks.md', 'new-new-copy.txt', done);
  });

});

