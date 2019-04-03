const fs = require('fs');

const readFile = require('./readFile');
const writeFile = require('./writeFile');

fs.readFile('./1_callbacks.md', 'utf8', (err, data) => {
    fs.writeFile('writing2.txt', data, (err) => {
        if(err) throw err;
    });
});






