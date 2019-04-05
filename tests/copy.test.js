const copy = require('../lib/copyFile');
const fs = require('fs');
const { readFile } = require('fs');

describe('copy function', () => {
    afterEach(done => {
        fs.unlink('./writing3.txt', done);
    });
    it('copies a file and invokes a callback', done => {
        const dst = './writing3.txt';
        const orig = './writing.txt';
        copy(orig, dst, err => {
            expect(err).toBeFalsy();
            readFile(orig, 'utf8', (err, original) => {
                readFile(dst, 'utf8', (err, copiedFile) => {
                    expect(original).toEqual(copiedFile);
                    done();
                });
            });
        });
    });
});
