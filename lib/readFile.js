const fs = require('fs');

fs.readFile('./2_fs.md', { encoding: 'utf8' }, (err) => {
  if(err) {
    throw err;
  }
});
