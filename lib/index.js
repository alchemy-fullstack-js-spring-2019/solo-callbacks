// fire a callback in 2 seconds

setTimeout(() => {
  console.log('OHHH, calbacks?');
}, 2000);

// 1 second
setTimeout(() => {
  console.log('OHHH, calbacks?');
}, 1000);

// every 1 second continually
setInterval(() => {
  console.log('OHHH, calbacks?');
}, 1000);
