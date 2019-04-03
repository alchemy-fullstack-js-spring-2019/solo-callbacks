const {
    readFile,
    writeFile
} = require('fs');


function copy(src, dst, callback) {
    readFile(src, 'utf8', (err, data) => {
        if(err) throw err;
        writeFile(dst, data, err => {
            if(err) throw err;
            else {
                callback();
            }
        });
    });
}

module.exports = copy;






