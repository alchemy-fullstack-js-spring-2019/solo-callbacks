const fs = require('fs');

function readJSON(src, callback){
  fs.readFile(src, 'utf8', (err, data) => {
    if(err) throw err;
    callback(data);
  });
}



module.exports = { readJSON };
