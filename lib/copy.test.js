const copy = require('./copy');


describe('copy function', () => {
  copy('./text.txt', 'new-text.txt', err => {
    expect(err).toBeFalsy();
  });
});
