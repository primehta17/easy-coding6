// second max in negative numbers
let arr=[-4,-54,-33,-56,-11],max=-Infinity,secMax=-Infinity;

for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        secMax=max;
        max=arr[i];
  
    }else if(secMax<arr[i] && secMax !==max){
        secMax=arr[i]
    }
    
}
console.log(max);
console.log(secMax);