const fs = require('fs');

function copy(src, dst, callback){
    fs.readFile(src, 'utf8', (err, data)=>{
        const sourceData = data;
        fs.writeFile(dst, sourceData, ()=>{      
            fs.readFile(src, 'utf8', callback);
        });
    });

}



module.exports = copy;
