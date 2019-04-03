const fs = require('fs');
const copy = require('../lib/copy');

describe('copy file', () => {
    it('copies a file from src to dest', done => {
        copy('../2_fs.md', 'copied.txt', () => {
            done();
        });
    });
});
