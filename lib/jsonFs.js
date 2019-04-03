const fs = require('fs');

function readJSON(pathToFile, callback) {
    fs.readFile(pathToFile, { encoding: 'utf8' }, (err, data) => {
        if(err) return callback(err);
        const parsed = JSON.parse(data);
        callback(null, parsed);
    });
}

function writeJSON(pathToFile, obj, callback) {
    const stringified = JSON.stringify(obj);
    fs.writeFile(pathToFile, stringified, err => {
        callback(err);
    });
}

module.exports = { readJSON, writeJSON };
