const fs = require('fs');

function readJSON(path, callback) {
  fs.access(path, fs.F_OK, (err) => {
    if(err) {
      callback(err, null);
      return;
    }

    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if(!err) {
        callback(null, JSON.parse(data));
      } else {
        callback(err, null);
      }
    });
    
  });
}

function writeJSON(path, obj, callback) {
  const jsonString = JSON.stringify(obj);
  fs.writeFile(path, jsonString, { encoding: 'utf8' }, err => {
    if(err) throw err;
    callback();
  });
}

module.exports = {
  readJSON,
  writeJSON
};
