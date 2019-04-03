const fs = require('fs');

function readJSON(pathToFile, callback){
  fs.readFile(pathToFile, 'utf8', (err, data) => {
    if(err) throw err;
    callback(JSON.parse(data));    
  });
}

function writeJSON(pathToFile, obj, callback){
  const stringified = JSON.stringify(obj);

  fs.writeFile(pathToFile, stringified, (err) => {
    if(err) throw err;
    callback();
  });
}


module.exports = { 
  readJSON,
  writeJSON 
};

