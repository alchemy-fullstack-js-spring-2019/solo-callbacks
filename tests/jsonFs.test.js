const readJSON = require('../lib/jsonFs');
const fs = require('fs');

describe('read json function', () => {
    it('reads the json file', done => {
        const dog = {
            name: 'spot',
            age: 10
        };

        fs.writeFile('./myJSON', JSON.stringify(dog), () => {
            readJSON('./myJSON', (err, data) => {
                expect(err).toBeFalsy();
                expect(data).toEqual(dog);
                done();
            })
        });
            
        //use writeFile to write string to file
        //read JSON
    });
});

