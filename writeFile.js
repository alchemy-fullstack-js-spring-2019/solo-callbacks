const fs = require('fs');

fs.writeFile('writing.txt', 'I am writing!!!', (err) => {
  if(err) throw err;
});

fs.readFile('writing.txt', { encoding: 'utf8' }, (err, data) => {
  if(err) throw err;
  console.log(data);
});


