const fs = require('fs');

fs.readFile('./1_callbacks.md', 'utf8', (err, data) => {
  if(err) throw err; 
  
  fs.writeFile('copy.txt', data, err => {  //path, text, error
    if(err) throw err;
    console.log('done');
  });
});
