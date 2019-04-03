const fs = require('fs');
const copy = require('../lib/copy');

describe('copy function', () => {
  afterEach((done) => {
    fs.unlink('./oneMoreFile.txt', (err) => {
      done();
    });
  });
  it('copies a file', done => {
    copy('./newFile.js', './oneMoreFile.txt', err => {
      expect(err).toBeFalsy();
      fs.readFile('./newFile.js', 'utf8', (err, originalData) => {
        fs.readFile('./oneMoreFile.txt', 'utf8', (err, copiedData) => {
          expect(originalData).toBe(copiedData);
          done();
        });
      });
    });
  });
});
