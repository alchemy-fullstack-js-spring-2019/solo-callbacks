const fs = require('fs');

fs.readFile('./2_fs.md', 'utf8', (err, data) => {
  if(err) throw err;

  fs.writeFile('./copyfile.md', data, 'utf8', (err) => {
    if(err) throw err;
    return;
  });

});

