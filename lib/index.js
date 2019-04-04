setTimeout(() => {
    console.log('OHHHH, callbacks?');
}, 2000);

setTimeout(() => {
    console.log('OHHHH, callbacks?');
}, 1000);

setInterval(() => {
    console.log('OHHHH, callbacks?');
}, 1000);

function Wait(ms, callback) {
    setTimeout(callback, ms);
}

module.exports = {
    Wait
};
