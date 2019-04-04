const fs = require('fs');

function copy(src, dst, callback){
  fs.readFile(src, 'utf8', (err, data) => {
    if(err) callback(err);
    fs.writeFile(dst, data, (err) => {
      if(err) callback(err);
      callback(null);
    });
  });
}

module.exports = { copy };
