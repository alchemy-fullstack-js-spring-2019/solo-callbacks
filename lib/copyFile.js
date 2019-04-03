const fs = require('fs');

fs.readFile('./1_callbacks.md', 'utf8', (err, data) => {
  if(err) throw err;
  fs.writeFile('new_1_callbacks.md', `${data}`, 'utf8', (err) => {
    if(err) throw err;
    console.log('The file has been saved!');
  });
});
