setTimeout(() => {
}, 2000);


function wait(ms, callback) {
  setTimeout(callback, ms);
}

module.exports = wait;

