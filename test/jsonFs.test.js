const fs = require('fs');

const { readJson } = require('../lib/jsonFs'); 
 
describe('json functions', () => {
  it('reads JSON', done => {
    const thing = {
      name: 'anything',
      type: 'something'
    };
    fs.writeFile(',/things.', JSON.stringify(thing), () => {
      readJson('./things', (err, data) => {
        expect(err).toBeFalsy();
        expect(data).ToEqual(thing);
        done();
      });
    });
  
  });

});

