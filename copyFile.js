const fs = require('fs');



fs.readFile('./1_callbacks.md','utf8', (err, data) => {
    if(err){
        throw err
    }
    const copiedStuff = data
    console.log('receaved data&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', copiedStuff);
    fs.writeFile('./writing.txt', copiedStuff, (err, data) =>{
        if(err){
            throw err
        }
    
    })

    
})



