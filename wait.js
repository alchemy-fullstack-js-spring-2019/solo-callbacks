
// setInterval(() => {
//   console.log('OHHHH, callbacks?');
// }, 1000);

function wait(delay, callback) {
  setTimeout(callback, delay);
}

module.exports = { wait };
