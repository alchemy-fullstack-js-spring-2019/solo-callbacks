const { readJSON, writeJSON } = require('../lib/jsonFs');
const fs = require('fs');

describe('jsonFs', () => {
    afterEach(done => {
        fs.unlink('sampleJSON.txt', done);
    });

    it('writes json to file', done => {
        const sampleJSON = {
            'name': 'solo-callbacks',
            'version': '1.0.0',
            'description': '',
            'main': 'index.js',
            'scripts': {
                'test': 'jest --verbose',
                'test:watch': 'npm run test -- --watch',
                'start': 'node lib/index.js'
            }
        };
        
        const sampleString = JSON.stringify(sampleJSON);

        fs.writeFile('sampleJSON.txt', sampleString, (err) => {
            expect(err).toBeFalsy();
            readJSON('sampleJSON.txt', (err, data) => {
                expect(data).toEqual(sampleJSON);
                done();
            });
        });
    });

    it('can write a json file', done => {
        const sampleJSON = {
            'name': 'solo-callbacks',
            'version': '1.0.0',
            'description': '',
            'main': 'index.js',
            'scripts': {
                'test': 'jest --verbose',
                'test:watch': 'npm run test -- --watch',
                'start': 'node lib/index.js'
            }
        };

        writeJSON('sampleJSON.txt', sampleJSON, err => {
            expect(err).toBeFalsy();
            readJSON('sampleJSON.txt', (err, data) => {
                expect(data).toEqual(sampleJSON);
                done();
            });
        });
    });
});
