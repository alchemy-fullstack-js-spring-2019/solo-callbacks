const fs = require('fs');

function copy(readFrom, writeTo, callback){
    fs.readFile(readFrom, { encoding: 'utf8' }, (err, data) => {
        if(err) return callback(err);
        fs.writeFile(writeTo, data, err => {
            if(err) callback(err);
            callback();
        });
    });
}

module.exports = {
    copy
};
