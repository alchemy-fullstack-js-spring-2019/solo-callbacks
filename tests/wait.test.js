const wait = require('../lib/wait');

describe('wait function', () => {
    it('waits one second and invokes a callback', done => {
        wait(1000, () => done());      
    });
});
