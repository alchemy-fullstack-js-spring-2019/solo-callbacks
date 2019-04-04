const copy = require('./copy');
const fs = require('fs');

//giving a bad destination to read from will crash node :(

describe('copy.test', ()=>{
    it('copy(src, dst, calback)', done=>{
        const src = './1_callbacks.md';
        const dst = './writing.txt';
        copy(src, dst, (err, data)=>{
            if(err){
                console.log(err);
            }
            const cloneData = data;
            fs.readFile(src, 'utf8', (err, data)=>{
                if(err){
                    console.log(err);
                }
                const sourceData = data;
                expect(sourceData).toBe(cloneData);
                done();
            });
        });
    });
});
