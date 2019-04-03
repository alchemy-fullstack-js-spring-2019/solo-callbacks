const fs = require('fs');

function readJSON(pathToFile, callback) {
    fs.readFile(pathToFile, { encoding: 'utf8' }, (err, data) => {
        if(err) return callback(err);
        const parsed = JSON.parse(data);
        callback(err, parsed);
        return parsed;
    });
}

module.exports = { readJSON };
