// Display a Text Once Every 1 Second(setInterval())
// setInterval(function, milliseconds);
setInterval(()=>{
    console.log("Hello every second")
},1000);

// Display Time Every 5 Seconds
function showTime(){
    let date= new Date();
    let todaydate=date.toLocaleDateString();
    console.log(todaydate);
    // let time=date.toLocaleTimeString();
    // console.log(time);
}

setInterval(showTime,4000);

//clearTimInterval
// syntax:clearInterval(intervalID);
// program to stop the setInterval() method after five times

let count = 0;

let interval=setInterval(()=>{
    count+=1;
    if(count==5){
        clearInterval(interval)
    }
    let date = new Date();
    let time = date.toLocaleTimeString();
    console.log(time);
    
},2000);

//pass additional arguments to the setInterval() method
//syntax:setInterval(function, milliseconds, parameter1, ....paramenterN);
setInterval((a,b)=>{
   console.log("Hello",a,b)
},3000,"QWER","TYI")

