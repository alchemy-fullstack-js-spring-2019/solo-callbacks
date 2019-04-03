const fs = require('fs');

function copy(src, dest, callback) {
    fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
        const stuff = data;
        if(err) return callback(err);
        fs.writeFile(dest, stuff, (err) => {
            callback(err);
        });
    });
}

copy('../2_fs.md', 'please-work.txt', () => {console.log('copy fn');});

module.exports = copy;
