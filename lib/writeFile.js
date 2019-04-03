const fs = require('fs');

const data = 'I am a string to be saved?';

fs.writeFile('writing.txt', data, (err) => {
    if(err) throw err;
    console.log('File has been saved');
});
