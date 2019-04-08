function copyFile(readFrom, writeTo, callback) {
  const fs = require('fs');
  fs.readFile(readFrom, { encoding: 'utf8' }, (err, data) => {
    fs.writeFile(writeTo, data, err => {
      if(err) throw err;
      callback();
      return data;
    });  
  });
}

module.exports = { copyFile };

