const fs = require('fs');

fs.readFile('./2_fs.md', { encoding: 'utf8' }, (err, data) => {
  if(err) throw err;
  fs.writeFile('2.2_fs.md', data, (err) => {
    if(err) throw err;
    console.log('Check your new file writing.txt');
  });
});
    
fs.copyFile('./2_fs.md', '2_fs-copy.md', (err) => {
  if(err) throw err;
  console.log('2_fs.md was copied to 2_fs-copy.md');
});
