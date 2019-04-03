const fs = require('fs');

function readJSON(pathToFile, callback) {

  fs.readFile(pathToFile, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);
    const string = JSON.parse(data);
    callback(string);
  });
}

module.exports = readJSON;
