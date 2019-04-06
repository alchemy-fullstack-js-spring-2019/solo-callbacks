const { copy } = require('../lib/copy');
const fs = require('fs');

describe('copy function tests', ()=> {
    afterEach(done=> {
        fs.unlink('./writingCopy.txt', done);
    });

    it('will copy the contents of a file', done => {
        copy('./writing.txt', './writingCopy.txt', err => {
            expect(err).toBeUndefined();
            fs.readFile('./writing.txt', 'utf8', (err, original => {
                fs.readFile('./writingCopy.txt', 'utf8', (err, copiedFile => {
                    expect(original).toEqual(copiedFile);
                    done();
                }));
            }));
        });
    });
});


//maybe test to see if the files are the same?
