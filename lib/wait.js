function wait(ms, callback){
  setTimeout(callback, ms);
}

wait(1000, (() => console.log('one second')));

module.exports = {
  wait
};

setInterval(() => {
  console.log('dog');
}, 1000);