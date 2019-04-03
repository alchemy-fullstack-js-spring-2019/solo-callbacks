const fs = require('fs');

// const {
//   readFile
// } = require('../lib/readFile.js');

// const {
//   writeFile
// } = require('../lib/writeFile.js');

function copy(src, dst, callback) {
//reading from src

  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);
    //dst is where I write to
    fs.writeFile(dst, data, callback);
    // fs.writeFile(dst, data, err => {
    //   if(err) return callback(err);
    //   callback();
    // });
  });    
}

// fs.readFile('./lib/1_callbacks.md', { encoding: 'utf8' }, (err, data) => {
//   if(err) throw err;
//   // console.log(data);
//   fs.writeFile('./lib/srssbsnss.txt', data, (err) => {
//     if(err) throw err;
//   });
// });

module.exports = {
  copy,
};
