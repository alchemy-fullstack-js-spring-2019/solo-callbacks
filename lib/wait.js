setTimeout(() => {
  /*eslint-disable-next-line*/
  console.log('OHHH, callbacks?');
}, 2000);

setTimeout(() => {
  /*eslint-disable-next-line*/
  console.log('OHHH, callbacks?');
}, 1000);

setInterval(() => {
  /*eslint-disable-next-line*/
  console.log('OHHH, callbacks?');
}, 1000);

function wait(ms, callback) {
  setTimeout(callback, ms);
}

module.exports = { wait };
