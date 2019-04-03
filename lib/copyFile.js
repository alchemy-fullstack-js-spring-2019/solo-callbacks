const fs = require('fs');

// Without encoding option, we see a buffer object in the console (see readFile.js)
fs.readFile('1_callbacks.md', { encoding: 'utf8' }, (err, data) => {
  if(err) throw 'efffff';
  fs.writeFile('1_callbacks-copy.md', data, err => {
    if(err) throw 'frickety frack';
    console.log(data);
  });
});
