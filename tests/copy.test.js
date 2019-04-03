const copy = require('../lib/copyFile');
const fs = require('fs');
const { readFile } = require('../lib/readFile.js');

describe('copy function', () => {
    it('copies a file and invokes a callback', done => {
        copy('../writing.txt', '../writing3.txt', err => {
            expect(err).toBeFalsy();
        });
        fs.readFile('../writing3.txt', 'utf8', (err, data) => {
            expect(err).toBeFalsy();
            expect(data).toEqual('I am writing!!!');
        });
        done();
    });
});
