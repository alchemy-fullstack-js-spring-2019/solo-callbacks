const fs = require('fs');

function readJSON(pathToFile, callback) {
  fs.readFile(pathToFile, 'utf8', (err, data) => {
    if(err) return callback(err);

    callback(null, data);
  });
}

module.exports = { readJSON };
