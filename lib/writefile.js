const fs = require('fs');

fs.writeFile('./lib/message.txt', 'I am writing!!!', 'utf8', () => {
  return;
});
