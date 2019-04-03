const fs = require('fs');

function readJSON(pathToFile, callback) {
  fs.readFile(pathToFile, { encoding: 'utf8' }, (err, data) => {
    if(err) throw err;
    const parsedJSON = JSON.parse(data);
    callback(err, parsedJSON);
  });
}

module.exports = readJSON;
