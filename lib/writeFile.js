/* eslint-disable no-console */
const fs = require('fs');
fs.writeFile('writing.txt', 'I made a file!', err => {
  if(err) throw 'oh nos';
  console.log('YEET');
});
