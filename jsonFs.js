const fs = require('fs');

function readJSON(src, data, callback){
  const jsonString = JSON.stringify(data);
  fs.writeFile(src, jsonString, (err) => {
    if(err) throw err;
    return jsonString;
  });
  callback;
}

module.exports = { readJSON };
