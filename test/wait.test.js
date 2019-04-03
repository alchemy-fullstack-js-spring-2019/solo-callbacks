const { wait } = require('../lib/wait');

describe('wait function', ()=> {
    it('waits then invokes a callback', done => {
        wait(2000, () => {
            done();
        });
        //or can do wait(1000, done);
    });
});
