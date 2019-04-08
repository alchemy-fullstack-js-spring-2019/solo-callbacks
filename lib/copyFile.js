const { writeFile, readFile } = require('fs');

readFile('./1_callbacks.md', (err, data) => {
  if(err) throw err;
  writeFile('./new-file.md', data, err => {
    if(err) throw err;
    
  });
});


  
