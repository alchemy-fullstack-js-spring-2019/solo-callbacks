const fs = require('fs');

function copy(source, destination, callback) {
    fs.readFile(source, 'utf8', (err, data) => {
        if(err) return callback(err);
        fs.writeFile(destination, data, 'utf8', (err) => {
            if(err) return callback(err);
            callback();
        });
    });
}

module.exports = copy;

