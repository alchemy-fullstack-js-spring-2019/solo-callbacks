const fs = require('fs');

fs.readFile('./1_callbacks.md', { encoding: 'utf8' }, (err, data) => {
  if(err) throw err;
  fs.writeFile('new_1_callbacks.md.txt', `${data}`, err => {
    if(err) throw err;
    console.log('The file has been saved!');
  });
});

