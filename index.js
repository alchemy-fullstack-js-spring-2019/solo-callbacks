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
