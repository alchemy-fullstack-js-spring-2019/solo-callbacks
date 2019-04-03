const fs = require('fs');

fs.readFile('./1_callbacks.md', 'utf8', (err, data) => {
  if(err) throw err;
  
  fs.writeFile('write.txt', data, err => {
    if(err) throw err;
    console.log('done');
  });
});
