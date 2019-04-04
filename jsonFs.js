const fs = require('fs');

function readJSON(pathToFile, callback){
    fs.readFile(pathToFile, 'utf8', callback)
}

function writeJSON(pathToFile, obj, callback){
    fs.writeFile(pathToFile, obj, ()=>{
        readJSON(pathToFile, callback)
    })   
}



module.exports = {
    readJSON,
    writeJSON
}


