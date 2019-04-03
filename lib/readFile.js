const fs = require('fs');

fs.readFile('../2_fs.md', { encoding: 'utf8' }, (err, data) => {
    if(err) throw err;
    // eslint-disable-next-line no-console
    console.log(data);
});
