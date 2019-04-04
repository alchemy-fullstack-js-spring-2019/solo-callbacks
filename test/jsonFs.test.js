const fs = require('fs');
const { readJson, writeJson } = require('../lib/jsonFs.js');

describe('readJson function', () => {
    afterEach(done =>{
        fs.unlink('./crazy.json', done);
    });
    it('takes JSON and returns file with its contents', done => {
        const json = { name: 'fun stuff' };
        const stringJson = JSON.stringify(json);
        fs.writeFile('./crazy.json', stringJson, () => {
            readJson('./crazy.json', (err, data) => {
                expect(err).toBeFalsy;
                expect(data).toEqual(json);
                done();
            });
        });
    });
    it('can write a json file', done => {
        const jsonData = { name: 'yolo' };

        writeJson('./crazy.json', jsonData, err => {
            expect(err).toBeFalsy();
            
            readJson('./crazy.json', (err, data) => {
                expect(err).toBeFalsy();
                expect(data).toEqual(jsonData);
                done();
            });
        });
    });
});
