const fs = require('fs');

function readJSON(pathToFile, callback){
    fs.readFile(pathToFile, 'utf8', callback)
}

function writeJSON(writePath, obj, callback){
    fs.writeFile(writePath, obj, ()=>{
        readJSON(writePath, callback)
    })   
}
module.exports = {
    readJSON,
    writeJSON
}


