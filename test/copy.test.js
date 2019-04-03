const { copy } = require('../lib/copy.js');
const fs = require('fs');
describe('copy file function', () => {
    it('use copy file logic to creat reusable function', done => {
        afterEach(done => {
            fs.unlink('./copy-file.txt', done);
        });
        copy('./writing.txt', './copy-file.txt', (err) => {
            expect(err).toBeUndefined();
            fs.readFile('./writing.txt', { encoding: 'utf8' }, (err, original) => {
                fs.readFile('./copy-file.txt', { encoding: 'utf8' }, (err, copiedFile) => {
                    expect(original).toEqual(copiedFile);
                    done();
                });
            });
        });
    });
});
