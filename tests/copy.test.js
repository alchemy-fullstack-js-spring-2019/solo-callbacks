const copy = require('../lib/copyFile');

describe('copy function', () => {
    it('copies a file', () => {
        const expected = '../copy.txt';
        const result = copy('../1_callbacks.md', '../copy.txt', callback);
        expect(result.equals(expected)).toBe(true);
    });
});
