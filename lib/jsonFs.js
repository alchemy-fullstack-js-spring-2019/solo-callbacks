const fs = require('fs');

function readJSON(pathToFile, callback) {
  fs.readFile(pathToFile, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);
    
    const json = JSON.parse(data);
    
    callback(null, json);
  });
}

function writeJSON(pathToFile, data, callback) {
  const stringData = JSON.stringify(data);
  fs.writeFile(pathToFile, stringData, err => {
    callback(err);
  });
}

module.exports = { readJSON, writeJSON };
