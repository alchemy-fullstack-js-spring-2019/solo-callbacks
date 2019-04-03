const copy = require('./copy');
const fs = require('fs');

describe('reuseable copy function', () => {
  afterEach(done => {
    fs.unlink('./writing-copy.txt', done);
  });
  it('copies the contents of src and pastes it into dst', done => {
    copy('./1_callbacks.md', './writing-copy.txt', err => {
      expect(err).toBeFalsy;
      //expect error not to happen
      fs.readFile('./1_callbacks.md', { encoding: 'utf8' }, (err, theOriginal) => {
        fs.readFile('./writing-copy.txt', { encoding: 'utf8' }, (err, theCopy) => {
          //read both, test that they match
          expect(theOriginal).toEqual(theCopy);
          done();
        });
      });
    });
  });
});
