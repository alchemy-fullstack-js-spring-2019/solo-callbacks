const fs = require('fs');

function copy(src, dst, callback) {
    fs.readFile(src, 'utf8', (err, data) => {
        if(err) return callback(err);
        fs.writeFile(dst, data, (err) => {
            if(err) return callback(err);
            callback();
        });
        //can be simplified to fs.writeFile(dst,data,callback);
    });
}

module.exports = { copy };
