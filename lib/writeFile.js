const { 
  writeFile
} = require('fs');

writeFile('./lib/writing.txt', 'I am writing', err => {
  if(err) throw err;
  console.log('done');
});
