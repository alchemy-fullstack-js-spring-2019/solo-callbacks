const fs = require('fs');

function copy(src, dst, callback) {
  fs.readFile(src, 'utf8', (err, data) => {
    if(err) throw err;
  
    fs.writeFile(dst, data, 'utf8', (err) => {
      if(err) throw err;
      return;
    });
    callback();
  });
  
}

// copy fn needs callback as third param

module.exports = copy;
