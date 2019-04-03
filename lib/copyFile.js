const fs = require('fs');

//read file, name it this, encode it like this, and THEN...
fs.readFile('./2_fs.md', 'utf8', (err, data) => {
    fs.writeFile('LAB-copy.md', data, (err) => {
        if(err) {
            throw err;
        }
        console.log('its copied!');  
    });
});
