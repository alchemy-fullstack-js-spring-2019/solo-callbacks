const fs = require('fs');   // can do const { writeFile } = require('fs') and then remove fs from start of line 3

fs.writeFile('writing.txt', 'test write test write', err => {  //path, text, error
  if(err) throw err;
  console.log('done');
});
