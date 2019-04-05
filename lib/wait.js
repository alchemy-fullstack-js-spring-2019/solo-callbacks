module.exports = function wait(milliseconds, callback) {
  setTimeout(callback, milliseconds);
};
