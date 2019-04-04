const fs = require('fs');

function readJson(path, callback) {
  fs.readFile(path, { encoder: 'utf8' }, (err, data) => {
    if(err) return callback(err);

    const json = JSON.parse(data);
    callback(null, json);

  });
}

function writeJson(path, data, callback) {
  const things = JSON.stringify(data);
  fs.writeFile(path, things, callback);
}

module.exports = {
  readJson,
  writeJson
};

// fs.readFile('../package.json', (err, data) => {
//   data.toString(data);
//   fs.writeFile('./jsonString.json', data, err => {
//     if(err) throw err;
//   });
//   console.log(data, 'hi');
// });




