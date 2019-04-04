const fs = require('fs');

function readJSON(path, callback) {
  fs.readFile(path), { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);
    const json = JSON.parse(data);
    callback(null, json);
  };
}

function writeJSON(path, data, callack) {
  const strData = JSON.stringify(data);
  fs.write(path, strData, err => {
    callack(err);
  });
}

module.exports = {
  readJSON,
  writeJSON
};
