const fs = require('fs');

function copyToLocation(readFrom, destination, callBack){
    fs.readFile(readFrom, 'utf8', (err, data) => {
        if(err){
            return callBack(err);
            // throw err
        }
        const stuffToWrite = data;
        fs.writeFile(destination, stuffToWrite, (err) =>{
            if(err){
                return callBack(err);
                //throw err
            }       
        });
    });
}
module.exports = copyToLocation;




