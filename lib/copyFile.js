const fs = require('fs');

fs.readFile('./1_callbacks.md', { encoding: 'utf8' }, (err, data) => {
  if(err) {
    throw err;
  }
  fs.writeFile('./1_callbacks-copy.md', data, (err) => {
    if(err) throw err;
  });
});
