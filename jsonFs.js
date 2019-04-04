const fs = require('fs');

function readJSON(src, callback) {
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);
    const json = JSON.parse(data);
    callback(null, json);
  });
}

function writeJSON(src, data, callback) {
  const strData = JSON.stringify(data);
  fs.writeFile(src, strData, callback);
}

module.exports = {
  readJSON,
  writeJSON
};
