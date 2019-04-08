const fs = require('fs');

fs.writeFile('writing.txt', 'test write test write', err => {
  if(err) throw err;
  console.log('done');
});
