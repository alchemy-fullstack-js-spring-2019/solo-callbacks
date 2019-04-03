const fs = require('fs');

function readJSON(src, callback){
  fs.readFile(src, 'utf8', (err, data) => {
    if(err) return callback(err);
    let parsed = JSON.parse(data);
    callback(null, parsed);
  });
}

function writeJSON(dest, object, callback){
  const data = JSON.stringify(object);
  fs.writeFile(dest, data, (err) => {
    if(err) throw err;
    callback(err);
  });
}

module.exports = { readJSON, writeJSON };



