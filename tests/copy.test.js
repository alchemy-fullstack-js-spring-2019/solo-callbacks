const copy = require('../lib/copyFile');
const fs = require('fs');
const { readFile } = require('fs');

describe('copy function', () => {
    afterEach(() => {
        fs.unlink('./writing3.txt', (err) => {
            if(err) throw err;
        });
    });
    it('copies a file and invokes a callback', done => {
        const dst = './writing3.txt';
        copy('./writing.txt', dst, err => {
            expect(err).toBeFalsy();
        });
        readFile(dst, 'utf8', (err, data) => {
            expect(err).toBeFalsy();
            expect(data).toEqual('I am writing!!!');
            done();
        });
    });
});
