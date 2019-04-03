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
            
    //write file
    //set up your object again
    //similar but use writeFile
    //save it to myJSON
    
    //callback - err
    //readJSON inside writeFile
    //expect data to equal dog
    //done
    });
});

