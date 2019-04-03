const fs = require('fs');

fs.readFile('./1_callbacks.md', 'utf8', (err, data) => {
    if(err) throw err;
    fs.writeFile('1_callbacks-copy.md', data, 'utf8', (err) => {
        if(err) throw err;
    });
});
