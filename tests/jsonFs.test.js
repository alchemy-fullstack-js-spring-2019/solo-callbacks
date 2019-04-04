const readJSON = require('../lib/jsonFs');
const writeJSON = require('../lib/jsonFs');
const fs = require('fs');

describe('read json function', () => {
    it('reads the json file', done => {
        const dog = {
            name: 'spot',
            age: 10
        };
        fs.writeFile('./myJSON', JSON.stringify(dog), () => {
            const dog = {
                name: 'spot',
                age: 10
            };
            readJSON('./myJSON', (err, data) => {
                expect(err).toBeFalsy();
                expect(data).toEqual(dog);
                done();
            })
        });
    });
    it('writes to a new json file', done => {
        const dog = {
            name: 'spot',
            age: 10
        };
        writeJSON('./myJSON', dog, err => {
            expect(err).toBeFalsy();

            readJSON('./myJSON', (err, data) => {
                expect(data).toEqual(dog);
                done();
            });
        });
    });
});

