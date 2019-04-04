function holdIt(time, callback){
  setTimeout(() => {
    callback();
  }, time);
}

function wait(ms, callback){
  setTimeout(callback, ms);
}


module.exports = { holdIt, wait };
