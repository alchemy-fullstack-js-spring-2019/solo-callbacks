const fs = require('fs');

fs.readFile('./1_callbacks.md', 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data);
});

fs.writeFile('copyFile.txt', './1_callbacks.md', (err) => {
  if(err) throw err;
  console.log('1_callbacks.md was copied');
});
