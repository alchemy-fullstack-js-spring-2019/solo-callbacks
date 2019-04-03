const fs = require('fs');


fs.writeFile('writing.txt', 'I am writing, used data', 'utf8', (err) => {
  if(err) throw err;
  console.log('The file has been saved!');
});

