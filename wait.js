
// setInterval(() => {
//   console.log('OHHHH, callbacks?');
// }, 1000);

function wait(delay, callback) {
  setTimeout(callback, 1000);
}

module.exports = { wait }
