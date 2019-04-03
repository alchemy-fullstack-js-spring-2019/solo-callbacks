const fs = require('fs');

fs.writeFile('./writing.text', 'I am writing!!!', { encoding: 'utf8' }, (err) => {
  if(err) throw err;
  console.log('The file has been saved!');
});
