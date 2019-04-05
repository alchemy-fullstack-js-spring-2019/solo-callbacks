const {
  readFile,
  writeFile
} = require('fs');

readFile('./1_callbacks.md', 'utf8', (err, data) => {
  if(err) throw err;
  writeFile('./lib/writing-copy.txt', data, err => {
    if(err) throw err;
    console.log('done');
  });
});
