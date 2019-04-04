const fs = require('fs');

function readJSON(path, callback) {
   fs.readFile(path, 'utf8', (err, data) => {
       if(err) return callback(err);
       const json = JSON.parse(data);
       callback(null, json);
   });
};

function writeJSON(path, data, callback) {
    const stringData = JSON.stringify(data);
    fs.writeFile(path, data, err => {
        if(err) return callback(err);
        callback()
    });
};

module.exports = { readJSON, writeJSON };


