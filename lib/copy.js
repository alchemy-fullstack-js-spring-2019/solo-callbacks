const fs = require('fs');

function copy(source, copied) {
  fs.readFile(source, 'utf8', (err, data) => {
    if(err) throw err;
    const toCopy = data;
  
    fs.writeFile(copied, toCopy, 'utf8', (err) => {
      if(err) throw err;
      return;
    });
  
  });
}

module.exports = copy;
