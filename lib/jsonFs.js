const fs = require('fs');

function readJSON(pathToFile, callback) {
  fs.readFile(pathToFile, 'utf8', (err, data) => {
    console.log(data);
    if(err) throw err;
  });
}

module.exports = readJSON;
