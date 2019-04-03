const fs = require('fs');
const copy = require('../lib/copy');

describe('copy file', () => {
    afterEach(() => {
        fs.unlink('copied.txt', () => {});
    });
    it('copies a file from src to dest', done => {
        copy('./2_fs.md', 'copied.txt', err => {
            expect(err).toBeFalsy();
            fs.readFile('./2_fs.md', { encoding: 'utf8' }, (err, original) => {
                fs.readFile('copied.txt', { encoding: 'utf8' }, (err, copiedFile) => {
                    expect(original).toEqual(copiedFile);
                    done();
                });
            });
        });
    });
});
