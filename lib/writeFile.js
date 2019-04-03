const fs = require('fs');

fs.writeFile('writing.txt', 'I am writing!\n', err => {
    if(err) throw err;
    console.log('done writing');
});
