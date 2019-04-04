const fs = require('fs'); 

function readJson(path, callback) {
    fs.readFile(path, { encoder: 'utf8'}, (err, data) => { if(err) return callback(err);

        const json = json.parse(data);
        callback(null, json);

    });
}

// fs.readFile('../package.json', (err, data) => {
//   data.toString(data);
//   fs.writeFile('./jsonString.json', data, err => {
//     if(err) throw err;
//   });
//   console.log(data, 'hi');
// });




