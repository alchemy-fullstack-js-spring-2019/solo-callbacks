const fs = require('fs');

fs.writeFile('./writing.txt', 'I am writing!!!', (err)=>{
    expect(err).toBe(null);
});

