const wait = require('../lib/wait');

describe('wait function', () => {
    it('waits 1 second then invokes callback', done => {
        wait(1000, () => {
            done();
        });
    });
});
