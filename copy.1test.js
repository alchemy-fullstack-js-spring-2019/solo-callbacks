const copy = require('../lib/copy');

describe('copy a file', () => {
  it('copies a file', () => {

    const original = ('./message.txt');
    const copied = ('./new.txt');

    expect(copy(original)).toEqual(copy(copied));

  });
});
