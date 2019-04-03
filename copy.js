const fs = require('fs');
function copy(src, dst, callback) {
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);
    fs.writeFile(dst, data, err => { //vs callback
      if(err) return callback(err);
      callback();
    });
  });
  //pass cb an error if applicable
  //pass it nothing if not
}

module.exports = copy;
