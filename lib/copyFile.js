const { readFile, writeFile } = require('fs');

readFile('./1_callbacks.md', 'utf8', (err, data) => {
  if(err) throw err;

  writeFile('copyFile.txt', data, 'utf8', (err) => {
    if(err) throw err;
    console.log('1_callbacks.md was copied');
  });
});

