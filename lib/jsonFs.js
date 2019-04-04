const fs = require('fs');

function readJSON(pathToFile, callback) {
  fs.readFile(pathToFile, 'utf8', (err, data) => {
    if(err) return callback(err);
    let parsed = JSON.parse(data);
    callback(null, parsed);
  });
}

function writeJSON(pathToFile, obj, callback) {
  let objData = JSON.stringify(obj);
  fs.writeFile(pathToFile, objData, err => {
    if(err) throw err;
    callback(err);
  });
}

module.exports = {
  readJSON,
  writeJSON
};
