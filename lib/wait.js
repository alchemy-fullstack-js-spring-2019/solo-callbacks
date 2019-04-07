const wait = (time, callback) => setTimeout(callback, time);

const again = (time, callback) => setInterval(callback, time);

module.exports = { wait, again };
