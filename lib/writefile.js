const fs = require('fs');

fs.writeFile('./message.txt', 'I am writing!!!', 'utf8', (err) => {
  if(err) throw err;
  return;
});
