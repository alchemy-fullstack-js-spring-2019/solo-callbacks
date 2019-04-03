const fs = require('fs');

fs.readFile('./2_fs.md', 'utf8', (err, data) => {
  if(err) throw err;
  const toCopy = data;

  fs.writeFile('./copy.txt', toCopy, 'utf8', () => {
    return;
  });

});

