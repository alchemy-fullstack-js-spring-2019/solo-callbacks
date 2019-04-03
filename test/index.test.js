const { Wait } = require('../lib/index.js');

describe('wait function', () => {
    it('waits a n amount of second before invokin callback', done => {
        Wait(1000, () => {
            done();
        });
    });
});
