const fs = require('fs');

const readFile = require('./readFile');
const writeFile = require('./writeFile');


function copy(src, dst, callback) {
    fs.readFile(src, 'utf8', (err, data) => {
        if(err) throw err;
        fs.writeFile(dst, data, (err) => {
            if(err) throw err;
            else {
                callback();
            }
        });
    });
}

module.exports = copy;






