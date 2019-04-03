const fs = require('fs');

module.exports = function copy(src, dst, callback) {
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) throw err;
    fs.writeFile(dst, data, { encoding: 'utf8' }, (err) => {
      if(err) throw err;
      console.log('The file has been saved!');
      callback();
    });
  });
};
