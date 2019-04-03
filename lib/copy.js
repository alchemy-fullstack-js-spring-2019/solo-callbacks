const { readFile, writeFile } = require('fs');

function copy(src, dst, callback) {
  // src is where I read from
  readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);

    // dst is where I write to
    // also can write like below
    // writeFile(dst, data, callback);
    writeFile(dst, data, err => {
      // pass callback an error if we errored
      if(err) return callback(err);

      // pass callback nothing if we are good
      callback();
    });
  });
}

module.exports = { copy };
