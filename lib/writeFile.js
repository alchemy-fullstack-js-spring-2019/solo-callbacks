const fs = require('fs');

const string = 'I am writing a string';

fs.writeFile('writing.txt', string, err => {
  if(err) throw err;
  else console.log('saved!');
});


