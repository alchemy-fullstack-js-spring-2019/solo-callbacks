const { fs } = require('fs');

describe('copy file function', () => {
    afterEach(() => {
        fs.unlink;
    });
    it('use copy file logic to creat reusable function', () => {
        const result = copy('../writing.txt', '../copy-file.txt', (err) => {
            if(err) throw err;
            
        });
        expect(result).toEqual();
    });
});
