const fs = require('fs');

fs.readFile('./1_callbacks.md', { encoding: 'utf-8' }, (err, data) => {
  if(err) throw err;
  console.log('Read!');
  fs.writeFile('new-copy.txt', data, err => {
    if(err) throw err;
    else console.log('saved!');
  });
});



