const fs = require('fs');

function copy(src, dest, callback) {
    fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
        const stuff = data;
        if(err) return callback(err);
        fs.writeFile(dest, stuff, (err) => {
            callback(err);
        });
    });
    callback();
}

module.exports = copy;
