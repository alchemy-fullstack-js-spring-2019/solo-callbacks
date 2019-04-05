const fs = require('fs');

fs.readFile('./lib/write.txt', { encoding: 'utf8' }, (err, data) => {
  if(err) {
    throw err;
  }
  fs.writeFile('./lib/write-copy.txt', data, (err) => {
    if(err) throw err;
  });
});


