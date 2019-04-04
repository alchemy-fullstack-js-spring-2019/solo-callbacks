const fs = require('fs');

fs.writeFile('./writing.txt', 'I am writing!!!',(err)=>{
    console.log(err);
    //issue is not here
});

