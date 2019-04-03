const { readJSON } = require('./jsonFs');

describe('read JSON', () => {
  test('reads JSON string to a file', (done) => {
    const result = readJSON('JSON.txt', 'stuff', done); 
    expect(result).toEqual(JSON.stringify('stuff'));   
  });
});
