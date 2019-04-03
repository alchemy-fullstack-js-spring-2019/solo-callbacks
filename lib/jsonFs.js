const fs = require('fs');

function readJSON(path, callback) {
   fs.readFile(path, 'utf8', (err, data) => {
       if(err) return callback(err);
       const json = JSON.parse(data);
       callback(null, json);
   });
};

function writeJSON(path, data, callback) {
    //stringify
    //write file to make new file
    //invoke callback, pass err
}

module.exports = readJSON;



