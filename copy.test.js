const { copy } = require('./copy');
const fs = require('fs');

describe('copy file function', () => {
  afterEach(() => {
    fs.unlink('./2_calbacks.md', (err) => {
      if(err) throw err;
      return ('./2_callbacks.md was deleted');
    });
  });
  
  test('copies file from source to destination', (done) => {
    copy('./1_callbacks.md', './2_calbacks.md', done);
  });

});
