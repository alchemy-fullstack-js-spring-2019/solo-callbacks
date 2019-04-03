const readJSON = require('../lib/jsonFs');
const fs = require('fs');

describe('read json function', () => {
    it('reads the json file', done => {
        const filePath = '../package.json';
        readJSON(filePath, err => {
            expect(err).toBeFalsy();
            fs.writeFile(filePath, './newfile.txt', err => {
                readJSON('./newfile.txt', err => {
                    expect(filePath).toEqual('./newfile.txt');
                    done();
                });
            });
        });
            
        //use writeFile to write string to file
        //read JSON
    });
});

