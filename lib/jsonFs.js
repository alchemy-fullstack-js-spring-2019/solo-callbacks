const fs = require('fs');

function readJSON(pathToFile, callback) {
  fs.readFile(pathToFile, 'utf8', (err, data) => {
    if(err) return callback(err);

    const json = JSON.parse(data);
    callback(null, json);
  });
}

function writeJSON(pathToFile, data, callback) {
  const dataStringified = JSON.stringify(data);
  fs.writeFile(pathToFile, dataStringified, callback);
}

module.exports = {
  readJSON,
  writeJSON
};
