const fs = require('fs');

function readJSON(path, callback) {
  fs.readFile(path, { encode: 'utf8' }, (err, data) => {
    if(err) throw err;
    callback(null, JSON.parse(data));
  }); 
}

function writeJSON(path, object, callback) {
  const strungOut = JSON.stringify(object);
  fs.writeFile(path, strungOut, err => {
    if(err) throw err;
    callback(err);
  });
}

module.exports = { readJSON, writeJSON };
