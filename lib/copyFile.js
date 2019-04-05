const fs = require('fs');


function copyFile(src, des, callback) {
  fs.readFile(src, { encoding: 'utf-8' }, (err, data) => {
    if(err) return callback(err, null);
    fs.writeFile(des, data, err => {
      if(err) return callback(err, null);
      callback(err, data);
    });
  });
}

module.exports = copyFile;


