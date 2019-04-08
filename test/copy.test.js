const copy = require('../lib/copy');
const fs = require('fs');

describe('copy function', () => {
    it('copies', done => {
        copy('writing.txt', 'test.txt', err => {
            expect(err).toBeUndefined();
            fs.readFile('writing.text', 'utf8', (err, original) => {
                fs.readFile('test.text', 'utf8', (err, copiedFile) => {
                    expect(original).toEqual(copiedFile);
                    done();
                });
            });
        });
    });
    afterEach(done => {
        fs.unlink('test.txt', done);
    });
});
