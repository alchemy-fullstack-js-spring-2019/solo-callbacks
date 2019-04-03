setTimeout(() => {
  console.log('I wonder what would happen if I tried a callback');
}, 500);

const words = [
  'WOW', 
  'AMAZE',
  'STRONG',
  'BEAUTYINESS',
  'ADJECTIVE'
];

let num = 0;

setInterval(() => {
  console.log(`SUCH ${words[num]}`);
  num++;
  if(num > 4) {
    num = 0;
  }
}, 1000);


