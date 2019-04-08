// const fs = require('fs');
const { writeFile } = require('fs');
const text = 'I am writing';


writeFile('./text.txt', text, err => {
  if(err) throw err;
  // eslint-disable-next-line no-console
  console.log('finished');
});




