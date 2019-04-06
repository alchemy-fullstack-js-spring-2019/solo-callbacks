const fs = require('fs');

fs.readFile('./writing.txt', 'utf8', (err, data) => {
    fs.writeFile('./LAB-copy.md', data, (err) => {
        if(err) {
            throw err;
        }
        console.log('its copied!');  
    });
});
