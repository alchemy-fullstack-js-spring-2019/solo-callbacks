const fs = require('fs');
fs.writeFile('./lib/write.txt', 'I am writing!!', (err) => {
  if(err) throw err;
  console.log('done');
});

// fs.writeFile('PATH you're making, data(MESSAGE), err)
