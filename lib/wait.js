function wait(timer) {
    setTimeout(() => console.log('Callbacks!'), timer);
}

module.exports = wait;
