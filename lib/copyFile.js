const fs = require('fs');

fs.readFile('./1_callbacks.md', 'utf8', (err, data) => {
  fs.writeFile('anotherNewFile.js', data, (err) => {
    if(err) throw err;
  });  
});
