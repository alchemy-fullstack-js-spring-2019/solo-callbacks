function timeOutOneSec() {
  setTimeout(function() {
    console.log('Just a second!');
  }, 1000);
}

timeOutOneSec();

function everyDangSecond() {
  setInterval(function() {
    console.log('Don\'t forget me');
  }, 1000);
}

everyDangSecond();

function timeOut() {
  setTimeout(function() {
    console.log('OHHHH, callbacks?');
  }, 2000);
}

timeOut();
