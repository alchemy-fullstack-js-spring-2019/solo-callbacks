const fs = require('fs');

function copy(src, dst) {
  fs.readFile(src, 'utf8', (err, data) => {
    if(err) throw err;
    const toCopy = data;
  
    fs.writeFile(dst, toCopy, 'utf8', (err) => {
      if(err) throw err;
      return;
    });
  
  });
}

// copy fn needs callback as third param

module.exports = copy;
