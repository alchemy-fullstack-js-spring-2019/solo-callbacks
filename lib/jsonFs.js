const fs = require('fs');

function readJSON(pathToFile, callback){
  fs.readFile(pathToFile, 'utf8', (err, data) => {
    callback(err, JSON.parse(data));    
  });
}

function writeJSON(pathToFile, obj, callback){
  const stringified = JSON.stringify(obj);

  fs.writeFile(pathToFile, stringified, (err) => {
    callback(err);
  });
}


module.exports = { 
  readJSON,
  writeJSON 
};

