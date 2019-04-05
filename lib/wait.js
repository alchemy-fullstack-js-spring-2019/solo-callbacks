function setTimeOut() {
  setTimeout(() => {
    console.log('OHHHH, callbacks!');
  }, 2000);
}


function wait(millSec) {
  setTimeout(() => {
    console.log(`after ${millSec} milliseconds`);
  }, millSec);
}

setTimeOut();
wait(1000);
