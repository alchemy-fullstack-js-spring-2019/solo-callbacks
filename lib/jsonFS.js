const fs = require('fs');

function readJSON(path, callback) {
  fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);
    const json = JSON.parse(data);
    callback(null, json);
  });
}

module.export = readJSON;
