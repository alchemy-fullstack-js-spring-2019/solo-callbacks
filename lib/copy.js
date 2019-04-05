const fs = require('fs');

function copyFile(src, dst, callback) {
  fs.copyFile(src, dst, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);
    fs.writeFile(dst, data, callback);
  });
}

module.exports = copyFile;
