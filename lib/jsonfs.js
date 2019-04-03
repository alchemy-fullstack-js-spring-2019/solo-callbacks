const fs = require('fs');

function readJSON(pathToFile, callback) {
  fs.readFile(pathToFile, 'utf8', (data) => {
    return data;
  });
  callback();
}

module.exports = { readJSON };
