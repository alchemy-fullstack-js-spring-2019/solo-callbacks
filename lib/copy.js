const fs = require('fs');
console.log('something');

function copy('./text.txt/new-text.txt', callback) {
    readFile('./text.txt', (err, data) => {
    writeFile('./new-text.txt', data, err => {
          if(err) throw err;
          
        });
      });

}

module.exports = copy;
