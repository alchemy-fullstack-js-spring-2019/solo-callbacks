const fs = require('fs');

function readJSON(src, callback) {
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);
    const json = JSON.parse(data);
    callback(null, json);
  });
  console.log('I am a jsonFs read function');
}

function writeJSON(src, data, callback) {
  //console.log('I am a jsonFs write function');
  const strData = JSON.stringify(data);
  fs.writeFile(src, strData, callback);
}

module.exports = {
  readJSON,
  writeJSON
};
