const fs = require('fs');

function readJSON(pathToFile, callback) {

  fs.readFile(pathToFile, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);
    const obj = JSON.parse(data);
    callback(null, obj);
  });
}

function writeJSON(pathname, obj, callback) {
  const string = JSON.stringify(obj);
  fs.writeFile(pathname, string, { encoding: 'utf8' }, err => {
    callback(err);
  });
}

module.exports = {
  readJSON,
  writeJSON
};
