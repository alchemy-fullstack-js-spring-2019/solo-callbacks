const {
    readFile,
    writeFile
} = require('fs');


function copy(src, dst, callback) {
    readFile(src, 'utf8', (err, data) => {
        if(err) return callback(err);
        writeFile(dst, data, callback);
    });
}

module.exports = copy;






