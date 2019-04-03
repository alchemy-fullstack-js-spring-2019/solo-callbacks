const fs = require('fs');

fs.writeFile('./lib/writing.txt', 'I am writing', (err) => {
  if(err) throw err;
});
