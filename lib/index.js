function timeOutOneSec() {
  setTimeout(function() {
    console.log('Just a second!');
  }, 1000);
}

timeOutOneSec();

function timeOut() {
  setTimeout(function() {
    console.log('OHHHH, callbacks?');
  }, 2000);
}

timeOut();
