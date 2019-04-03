const fs = require('fs');

// readFile is a function that takes a path
// buffer is an array of binary/hex codes

// fs.readFile('./1_callbacks.md', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

fs.readFile('./1_callbacks.md', { encoding: 'utf8' }, (err, data) => {
  if (err) throw err;
  console.log(data);
});
