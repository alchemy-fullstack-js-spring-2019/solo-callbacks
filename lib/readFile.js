const fs = require('fs'); 

fs.readFile('./1_callbacks.md', (err, data) => {
  console.log(data, 'hi');
});
