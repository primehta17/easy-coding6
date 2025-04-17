//without Passing Parameter to setTimeout

setTimeout(()=>{
   console.log("hello in 3 sec")
},3000)

function notpara(){
   console.log("Hello from setTime")
}

setTimeout(notpara,5000)


// Passing Parameter to setTimeout
setTimeout((c,m)=>{
   console.log("Hello ",c,m)
},4000,"cap","map");

function greet(x,y){
    console.log(x);
    console.log(y)
}
setTimeout(greet,2000,"hulk","batman")
