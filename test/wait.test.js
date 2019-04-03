const wait = require('../lib/wait');

//my test
describe('wait function', () => {
    it('waits a bit then invokes callback', done => {
        function callback(data) {
            expect(data).toBe('peanuts');
            done();
        }

        wait(3000, callback('peanuts'));

    });
});

//ryan's test
describe('wait function', () => {
    it('waits a bit then invokes callback', done => {
        wait(1000, () => {
            done();
        });
    });
    //simplified
    it('waits a bit then invokes callback', done => {
        wait(1000, done);
    });
});
