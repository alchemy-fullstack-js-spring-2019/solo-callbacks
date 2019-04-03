const { holdIt } = require('./wait.js');
const { wait } = require('./wait.js');


describe('waits then runs callback', () => {
  it('waits a bit then invokes callback', done => {
    function callback(){return 'wait wait print'; }
    expect(callback()).toEqual('wait wait print');
    holdIt(1000, callback);
    done();
  });

  it('waits a bit then invokes callback', done => {
    wait(1000, () => {
      done();
    });
  });

});
