const fs = require('fs');

function readJSON(pathToFile, callback) {
    fs.readFile(pathToFile, 'utf8', (err, json) => {
        if(err) return callback(err);
        const parsedJSON = JSON.parse(json);
        callback(null, parsedJSON);
    });
}

function writeJSON(pathToFile, json, callback) {
    const stringJSON = JSON.stringify(json);
    fs.writeFile(pathToFile, stringJSON, callback);
}

module.exports = { readJSON, writeJSON };
