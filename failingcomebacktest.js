const copyToLocation = require('./copy');
const readFile = require('./readFile');
const fs = require('fs');

//giving a bad destination to read from will crash node :(
describe('COPY.JS**', () => {


    afterEach(done => {
        fs.unlink('./writing.txt', (err) => {
            done(err);
        });
    });

    it('check destination contains stuff from src', done => {
        const readFrom = './1_callbacks.md';
        const copyTo = './writing.txt';
        copyToLocation(readFrom, copyTo, ()=>{
            const sourceContent = readFile(readFrom);
            const destinationContent = readFile(copyTo);
            console.log('3$^$$^$%#$%#', destinationContent);
            expect(sourceContent).toBe(destinationContent);
            done();
        });
    
        
    });

    it('read a file from existing path and copy it to another location, throw error when path is wrong', done => {
        const readFrom = './1_callbacks.m';
        const copyTo = './writing.txt';
        copyToLocation(readFrom, copyTo, (err) => {
            expect(err).toBeDefined();
            done();
        });

    });
});


