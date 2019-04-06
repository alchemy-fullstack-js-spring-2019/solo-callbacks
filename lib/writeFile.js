const fs = require('fs');

fs.writeFile('writing.txt', 'I am a cool string!', (err) => {
    if(err) {
        throw err;
    } 
    console.log('file written!');
});

