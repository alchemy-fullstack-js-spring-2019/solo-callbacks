const copy = require('../lib/copy.js');
const fs = require('fs');


describe('copy whole file function', () => {
  afterEach(() => {
    fs.unlink('./writing_copy3.txt', (err) => {
      if(err) throw err;
    });
  });

  it('copy a file', (done) => {
    copy('./writing.txt', './writing_copy3.txt', (err) => {
      expect(err).toBeFalsy();
      fs.readFile('./writing.txt', 'utf8', (err, data) => {
        if(err) throw err;
        if(data) {
          done();
        }
      });
    });
  });
});
