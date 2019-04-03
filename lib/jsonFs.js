const fs = require('fs');

//want to get the json data and parse it
function readJSON(pathToFile, callback) {
    fs.readFile(pathToFile, 'utf8', (err, data)=> {
        if(err) return callback(err);
        const parsedJSON = JSON.parse(data);
        callback(null, parsedJSON);
    });
}

function writeJSON(pathToFile, data, callback) {
    const jsonString = JSON.stringify(data);
    fs.writeFile(pathToFile, jsonString, err => {
        callback(err);
    });
}
module.exports = { readJSON, writeJSON };
