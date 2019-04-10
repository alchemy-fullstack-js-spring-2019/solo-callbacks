const fs = require('fs');

fs.writeFile('./writing.txt', "Hello, I am writing!", err => {
  if (err) throw err;
  console.log('Done.');
});
