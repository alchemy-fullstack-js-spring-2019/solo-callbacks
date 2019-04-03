const fs = require('fs');

fs.readFile('./1_callbacks.md', { encoding: 'utf8' }, (err, data) => {
  if(err) throw err;
  fs.writeFile('./1_callbacks-copy.md', data, { encoding: 'utf8' }, (err) => {
    if(err) throw err;
    console.log('The file has been saved!');
  });
});
