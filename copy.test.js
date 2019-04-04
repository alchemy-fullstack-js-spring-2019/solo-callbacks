const copy = require('./copy');
const fs = require('fs');




describe('copy.test', ()=>{
    afterEach(done => {
        fs.unlink('./writing.txt', done);
        
    });

    it('copy(src, dst, calback)', done=>{
        const src = './1_callbacks.md';
        const dst = './writing.txt';
        copy(src, dst, (err, data)=>{
            if(err){
                throw err;
            }
            const cloneData = data;
            fs.readFile(src, 'utf8', (err, data)=>{
                const sourceData = data;
                expect(sourceData).toBe(cloneData);
                done();
            });
        });
    });
});
