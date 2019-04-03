const {
  readFile,
  writeFile
} = require('fs');

readFile('./1_callbacks.md', 'utf8', (err, data) => {
  if(err) throw err;
  
  writeFile('callbacks-copy.md', data, err => {
    if(err) throw err;
    console.log('done');
  });
});
