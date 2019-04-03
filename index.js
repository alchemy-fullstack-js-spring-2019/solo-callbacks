//***** */set timeout
function timeout(time){
    setTimeout(()=>{
        console.log('hi')
       },time)
}
timeout(1000);
timeout(2000);

function interval(interval){
    setInterval(()=>{
        console.log('interval')
    },interval)
}
//comment out to prevent infinite loop
//interval(100);

//******* wait a bit


//create wait and wait.test.js for next part

