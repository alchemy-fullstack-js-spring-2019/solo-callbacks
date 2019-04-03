const fs = require('fs');
const { readJSON, writeJSON } = require('../lib/jsonFs');

const sampleJSON = {
    'glossary': {
        'title': 'example glossary',
        'GlossDiv': {
            'title': 'S',
            'GlossList': {
                'GlossEntry': {
                    'ID': 'SGML',
                    'SortAs': 'SGML',
                    'GlossTerm': 'Standard Generalized Markup Language',
                    'Acronym': 'SGML',
                    'Abbrev': 'ISO 8879:1986',
                    'GlossDef': {
                        'para': 'A meta-markup language, used to create markup languages such as DocBook.',
                        'GlossSeeAlso': ['GML', 'XML']
                    },
                    'GlossSee': 'markup'
                }
            }
        }
    }
};

describe('readJSON tests', () => {
    afterEach(done => {
        fs.unlink('myJSON.txt', done);
    });
    it('reads JSON from file', done => {
        const stringified = JSON.stringify(sampleJSON);
        fs.writeFile('myJSON.txt', stringified, () => {
            readJSON('myJSON.txt', (err, result) => {
                expect(err).toBeFalsy();
                expect(result).toEqual(sampleJSON);
                done();
            });
        });
    });
    it('writes JSON to file', done => {
        writeJSON('myJSON.txt', sampleJSON, () => {
            readJSON('myJSON.txt', (err, result) => {
                expect(result).toEqual(sampleJSON);
                done();
            });
        });
    });
});
