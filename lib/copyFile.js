const fs = require('fs');

const readFile = require('./readFile');
const writeFile = require('./writeFile');


function copy(src, dst, callback) {
    fs.readFile(src, 'utf8', (err, data) => {
        fs.writeFile(dst, data, (err) => {
            if(err) throw err;
        });
    });
    callback();
}

module.exports = copy;






