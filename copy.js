const fs = require('fs');

function copy(src, dst, callback){
    fs.readFile(src, 'utf8', (err, data)=>{
        if(err){
            console.log(err);
        }
        const sourceData = data;
        fs.writeFile(dst, sourceData, (err)=>{
            if(err){
                console.log(err);
            }
            fs.readFile(src, 'utf8', callback);
        });
    });

}



module.exports = copy;
