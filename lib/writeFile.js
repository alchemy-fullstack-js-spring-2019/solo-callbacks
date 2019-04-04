const fs = require('fs');
const data = 'I am writing!';

fs.writeFile('newFile.js', data, (err) => {
  if(err) throw err;
});
