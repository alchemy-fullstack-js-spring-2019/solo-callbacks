const { readFile, writeFile } = require('fs');

function copy(src, dst, callback) {
  readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);
    writeFile(dst, data, err => {
      if(err) return callback(err);

      callback();
    });
  });
}

module.exports = { copy };
