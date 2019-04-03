const fs = require('fs');

module.exports = function readJSON(pathToFile, callback) {
  fs.readFile(pathToFile, 'utf8', (err, data) => {
    if(err) return callback(err);
    let parsed = JSON.parse(data);
    callback(null, parsed);
  });
};

module.exports = function writeJSON(pathToFile, obj, callback) {
  fs.writeFile(pathToFile, 'utf8', (err, data) => {
    if(err) throw err;
    // let parsed = JSON.parse(data);
    callback(err);
  });
};
