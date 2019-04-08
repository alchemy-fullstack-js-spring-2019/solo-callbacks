const data = new Uint8Array(Buffer.from('Hello Node.js'));
const fs = require('fs');

fs.writeFile('./lib/srssbsnss.txt', data, (err) => {
  if(err) throw err;
});
