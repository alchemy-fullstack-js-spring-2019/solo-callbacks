const fs = require('fs');

fs.readFile('../2_fs.md', { encoding: 'utf8' }, (err, data) => {
    fs.writeFile('LAB-copy.md', data, err => {
        if(err) throw err;
    });
});
