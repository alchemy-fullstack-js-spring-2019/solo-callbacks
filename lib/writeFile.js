const fs = require('fs');
fs.writeFile('./lib/write.txt', 'I am writing!!', (err) => {
  if(err) throw err;
});
