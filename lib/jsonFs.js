const fs = require('fs');

function readJSON(src, callback) {
  fs.readFile(src, (err, data) => callback(err, JSON.parse(data)));
}

function writeJSON(dst, data, callback) {
  fs.writeFile(dst, JSON.stringify(data), callback);
}

module.exports = {
  readJSON,
  writeJSON
};
