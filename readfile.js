const fs = require('fs');

fs.readFile('./1_callbacks.md', 'utf8', (err, data) => {
  if(err) throw err;  // could use {encoding: 'utf8' } instead, does the same thing
  console.log(data);
});
