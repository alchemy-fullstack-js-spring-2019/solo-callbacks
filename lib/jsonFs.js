const fs = require('fs');

function readJSON(pathToFile, callback) {

  fs.readFile(pathToFile, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err, null);
    const obj = JSON.parse(data);
    callback(obj);
  });
}

function writeJSON(pathname, obj, callback) {
  const string = JSON.stringify(obj);
  fs.writeFile(pathname, string, { encoding: 'utf8' }, (err) => {
    if(err) throw err;
  });
  callback();
}




module.exports = {
  readJSON,
  writeJSON
};
