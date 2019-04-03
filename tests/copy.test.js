const fs = require('fs');
const copy = require('../lib/copy');

describe('copy file', () => {
    afterEach(() => {
        fs.unlink('copied.txt', () => {});
    });
    it('copies a file from src to dest', done => {
        copy('../2_fs.md', 'copied.txt', err => {
            if(err) throw err;
            done();
        });
    });
});
