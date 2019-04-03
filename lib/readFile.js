const fs = require('fs');

fs.readFile('1_callbacks.md', (err, data) => {
  if(err) throw 'wat';
  console.log(data);
});
