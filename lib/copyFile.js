const fs = require('fs');

function copy(src, dst, (err, data) {
  
  src  = fs.readFile('./1_callbacks.md', 'utf8', (err, data) => {
    if(err) throw err;
    return data;
  });
  dst = fs.writeFile('./lib/writing-copy.txt', src, (err) => {
    if(err) throw err;
    return data;
  });
  if(err) throw 'data';
  return data;
}

copy();
