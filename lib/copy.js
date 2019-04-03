const fs = require('fs');

function copy(src, dest, callback) {
    fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
        if(err) return callback(err);
        fs.writeFile(dest, data, callback);
    });
}

module.exports = copy;
