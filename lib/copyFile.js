const fs = require('fs');

function copy(src, dst, callback) {
  
  fs.readFile('./1_callbacks.md', 'utf8', (err, data) => {
    if(err) {
      return callback(err);
    }
    fs.writeFile('./lib/writing-copy.txt', data, err => {
      if(err) {
        return callback(err);
      }
    });
  });
}

copy();
