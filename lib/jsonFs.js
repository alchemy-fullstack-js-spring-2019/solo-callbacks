const fs = require('fs');

function readJson(pathToFile, callback) {
    fs.readFile(pathToFile, { encoding: 'utf-8' }, (err, json) => {
        if(err) return callback(err);
        
        const jsonToString = JSON.parse(json);
        callback(null, jsonToString);
    });
}

function writeJson(path, data, callback){
    const stringData = JSON.stringify(data);
    fs.writeFile(path, stringData, callback);
}

module.exports = {
    readJson,
    writeJson
};
