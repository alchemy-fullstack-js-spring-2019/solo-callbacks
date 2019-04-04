const { fs, writeFile } = require('fs');

const data = 'I am writing!!!';

fs.writeFile('writing.txt', data, (err) => {
  if(err) throw err;
  console.log('Check your new file writing.txt');
});

writeFile('writing-2.txt', 'Writes your new content to writing-2.txt file', (err) => {
  if(err) throw err;
  console.log('Check your new file writing-2.txt');
});
