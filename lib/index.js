setTimeout(() => {
  console.log('oh callback');
}, 2000);

setInterval(() => {
  console.log('oh callback');
}, 2000);

function wait(ms, callback) {
  setTimeout(callback, ms);
}

module.exports = wait;
