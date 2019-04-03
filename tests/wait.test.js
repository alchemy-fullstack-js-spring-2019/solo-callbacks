const wait = require('../lib/wait');

describe('callbacks', () => {
    it('waits one second and invokes a callback', done => {
        wait(2000);
        done();
    });
});
