const fs = require('fs');

fs.readFile('./1_callbacks.md', { encoding: 'utf8' }, (err) => {
    if(err) throw err;
});



