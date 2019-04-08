const copy = require('../lib/copy');
const fs = require('fs');

describe('copy a file', () => {
  it('copies a file', done => {
    copy('./1_callbacks.md', './1_callbacks-copy.md', err => {
      expect(err).toBeFalsy();

      fs.readFile('./1_callbacks.md', 'utf8', (err, src) => {
        fs.readFile('./1_callbacks-copy.md', 'utf8', (err, dest) => {
          expect(src).toEqual(dest);
          done();
        });
      });
    });
  });
});
