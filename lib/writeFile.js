const fs = require('fs');
const words = 'I am writing!!';

fs.writeFile('./writing.txt', words, (err) => {
  if(err) throw err;
  console.log('saved words');
});
