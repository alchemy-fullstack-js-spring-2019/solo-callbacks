const fs = require('fs');

fs.readFile('./1_callbacks.md', 'utf8', (err, data) => {
  console.log(data);
  if(err) throw err;
});
