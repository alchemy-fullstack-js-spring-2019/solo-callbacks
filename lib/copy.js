const fs = require('fs');

function copy(src, dst, callback) {
  //src is where I read from
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);
    //dst is where i write to
    fs.writeFile(dst, data, callback); 
  });
}

module.exports = copy;
