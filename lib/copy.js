const fs = require('fs');


function copy(path, destination, callback) {
  fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);
    fs.writeFile(destination, data, err => {
      if(err) return callback(err);
          
    });
  });



}

module.exports = copy;
