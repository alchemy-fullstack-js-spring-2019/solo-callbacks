const fs = require('fs');


fs.readFile('./1_callbacks.md', 'utf8', (err, data) => {
    if(err){
        throw err;
    }
    const copiedStuff = data;
    fs.writeFile('./writing.txt', copiedStuff, (err, data) =>{
        if(err){
            throw err;
        }
    
    });

    
});



