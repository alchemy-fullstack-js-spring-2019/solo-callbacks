const fs = require('fs');

fs.readFile('./2_fs.md', 'utf8', (err, data) => {
  if(err) throw err;
  const toCopy = data;

  fs.writeFile('./copyfile.txt', toCopy, 'utf8', (err) => {
    if(err) throw err;
    return;
  });

});

