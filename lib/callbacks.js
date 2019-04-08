// Set timeout after 2 seconds:
setTimeout(function() {
  console.log('OHHHH, callbacks in 2 seconds?');
}, 2000);

// Set timeout after 1 second:
setTimeout(function() {
  console.log('OHHHH, callbacks in 1 second?');
}, 1000);

// Set timeout every second:
setInterval(function() {
  console.log('OHHHH, calling back every 1 second forever!');
}, 1000);

