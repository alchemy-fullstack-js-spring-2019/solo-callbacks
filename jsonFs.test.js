const fs = require('fs');
const { readJSON } = require('./jsonFs');
const { writeJSON } = require('./jsonFs');


describe('jsonFs', () => {
    it('readJSON(pathToFile, callback)', done => {

        const pathToFile = './package.json';
        readJSON(pathToFile, (err, data) => {
            if(err) {
                throw err;
            }
            const jsonData = data;
            const jsonObject = JSON.parse(jsonData);
            const jsonString = JSON.stringify(jsonObject);
           
            fs.writeFile('./copiedJSON', jsonString, (err) => {
                expect(err).toBe(null);
        
                readJSON('./copiedJSON', (err, data) => {
                    if(err) {
                        throw err;
                    }
                    expect(data).toBe(jsonString);
                    done();
                });
            });
        });
    });
    it('writeJSON(pathToFile, obj, callback)', done =>{
        const writePath = './copiedJSON';
       
        const obj = { title:'fruits' };
        const jsonString = JSON.stringify(obj);
        writeJSON(writePath, jsonString, (err, data)=>{
            if(err){
                console.log(err);
            }
            console.log('writejson callback data', data);        
            const readObject = data;
            expect(readObject).toBe(jsonString);
            done();
        });
    });
  
});


