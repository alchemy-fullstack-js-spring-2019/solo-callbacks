// prints the text after waiting 2 seconds
// setTimeout(() => {
//   console.log('OHHH, callbacks?');
// }, 2000);

// prints the text after waiting 1 second
// setTimeout(() => {
//   console.log('OHHH, callbacks?');
// }, 1000);

//prints the text every 1 second forever
// setInterval(() => {
//   console.log('OHHH, callbacks?');
// }, 1000);

function wait(ms, callback) {
  setTimeout(callback, ms);
}

module.exports = { wait };
