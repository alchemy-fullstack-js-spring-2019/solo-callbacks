const fs = require('fs');
const { readJSON } = require('../lib/jsonFs');

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
    afterEach(() => {
        fs.unlink('json-string.txt', () => {});
    });
    it('better work', done => {
        const stringified = JSON.stringify(sampleJSON);
        fs.writeFile('json-string.txt', stringified, err => {
            if(err) throw err;
            const result = readJSON('json-string.txt', (err, result) => {
                if(err) throw err;
                expect(result).toEqual(sampleJSON);
                done();
            });
        });
    });
});
