const fs = require('fs');

module.exports = function readJSON(path, callback) {
  fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if(err) throw err;
    callback(JSON.parse(data));
  });
};
