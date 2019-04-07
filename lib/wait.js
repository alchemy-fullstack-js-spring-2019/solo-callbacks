setTimeout(() => { console.log('test'); }, 1000);

function wait(time, callback) {
  setTimeout(callback, time);
}

module.exports = wait;
