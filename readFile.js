const fs = require('fs');

fs.readFile('./1_callbacks.md','utf8', (err, data) => {
    if(err){
        throw err
    }
})

function readFile(readFrom){
    fs.readFile(readFrom,'utf8', (err, data) => {
        return data;
    })   
}

module.exports = readFile;