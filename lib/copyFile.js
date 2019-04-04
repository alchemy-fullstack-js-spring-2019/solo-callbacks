const fs = require('fs');


function copyFile(src, des, callback) {
  //callback is just letting users do something in the copy
  //pass callback an error if we errored
  //pass nothing if we didnt

  fs.readFile(src, { encoding: 'utf-8' }, (err, data) => {
    if(err) throw err;
    fs.writeFile(des, data, err => {
      if(err) throw err;
      console.log('done!');
      callback();
      
    });
  });
}

module.exports = copyFile;


