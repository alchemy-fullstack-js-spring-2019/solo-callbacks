const fs = require('fs');

function copy(src, dst, callback) {
  fs.readFile(src, 'utf8', (err, data) => {
    if(err) return callback(err);
    fs.writeFile(dst, data, (err) => {
      if(err) {
        callback(err);
      }
      callback();
    });  
  });
}

module.exports = copy;
