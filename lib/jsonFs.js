const fs = require('fs');

function readJSON(path, callback) {
  fs.readFile(path, { encode: 'utf8' }, (err, data) => {
    if(err) throw err;
    callback(null, JSON.parse(data));
  }); 
}

module.exports = readJSON;
