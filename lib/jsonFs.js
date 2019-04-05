const fs = require('fs');

function readJSON(pathToFile, callback) {
  fs.readFile(pathToFile, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);
    const parsedJSON = JSON.parse(data);
    callback(null, parsedJSON);
  });
}

function writeJSON(path, data, callback) {
  const strData = JSON.stringify(data);
  fs.writeFile(path, strData, callback);
}

module.exports = {
  readJSON,
  writeJSON
};
