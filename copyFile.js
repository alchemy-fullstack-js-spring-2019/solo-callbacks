const fs = require('fs');

fs.readFile('./1_callbacks.md', 'utf8', (err, data) => {
  fs.writeFile('LAB-copy.md', data, (err) => {
    if(err) throw err;
  });
});

fs.readFile('LAB-copy.md', 'utf8', (err, data) => {
  console.log(data);
  if(err) throw err;
});


