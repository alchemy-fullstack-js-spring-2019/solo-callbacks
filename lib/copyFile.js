const fs = require('fs');

fs.readFile('../2_fs.md', 'utf8', (err, data) => {
    fs.writeFile('LAB-copy.md', data, () => {
    });
});
