const fs = require('fs');

function readJSON(pathToFile, callback) {
  fs.readFile(pathToFile, 'utf8', (err, data) => {
    if(err) return callback(err, data);
    callback(err, data);
  });
}

function writeJSON(pathToFile, object, callback) {
  const data = JSON.stringify(object);
  fs.writeFile(pathToFile, data, (err) => {
    if(err) return callback(err);
    callback();
  });
}   

module.exports = { 
  readJSON,
  writeJSON
};
