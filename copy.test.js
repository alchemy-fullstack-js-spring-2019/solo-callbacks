const copyToLocation = require('./copy');
const readFile = require ('./readFile');

//giving a bad destination to read from will crash node :(
describe('COPY.JS**',()=>{
    it('read a file from existing path and copy it to another location, throw error when path is wrong', done=>{
        const readFrom = './1_callbacks.m';
        const copyTo = './writing.txt';  
        copyToLocation(readFrom,copyTo, (err)=>{
            expect(err).toBeDefined();      
            done();
        });  
      
    })
})


describe('COPY.JS**',()=>{
    it('check destination contains stuff from src', ()=>{
        const readFrom = './1_callbacks.md';
        const copyTo = './writing.txt';  
        copyToLocation(readFrom, copyTo);
        const sourceContent = readFile(readFrom);
        const destinationContent = readFile(copyTo);
        expect(sourceContent).toBe(destinationContent);
    })
})
 