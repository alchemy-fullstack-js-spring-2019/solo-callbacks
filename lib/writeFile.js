const fs = require('fs');
fs.writeFile('../write.txt', 'hello', err => {
  if(err) throw err;
  console.log('done');
});
