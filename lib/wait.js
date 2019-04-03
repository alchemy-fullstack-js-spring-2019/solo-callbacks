// setTimeout(() => {
//   console.log('Hello.');
// }, 2000);

// setTimeout(() => {
//   console.log('Hello.');
// }, 1000);

// setInterval(() => {
//   console.log('Hello.');
// }, 1000);

function wait(ms, callback) {
  setTimeout(callback, ms);
}

module.exports = wait;
