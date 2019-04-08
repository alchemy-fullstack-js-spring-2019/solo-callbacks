const fs = require('fs');

fs.readFile('./1_callbacks.md', 'utf8', (err, data) => {
  if(err) throw err;
  // eslint-disable-next-line no-console
  console.log(data);
});

