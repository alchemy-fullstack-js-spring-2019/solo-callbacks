const fs = require('fs');

fs.readFile('./writing.txt', 'utf8', (err, data) => {
  fs.writeFile('./writing_copy.txt', data, (err) => {
    if(err) throw err;
    console.log('saved words');
  });
});
