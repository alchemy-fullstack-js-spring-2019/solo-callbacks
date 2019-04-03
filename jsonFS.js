const fs = require('fs');

function readJSON(pathToFile, callback) {
  fs.readFile(pathToFile, 'utf8', (err, data) => {
    if(err) throw err;
    callback(data);
  });
}

module.exports = { readJSON };
