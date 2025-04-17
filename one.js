// Program to Remove Specific Item From an Array
let arr=[3,44,5,77,6],pos=44,newArr=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]!==pos){
        newArr.push(arr[i]);
    }
}
console.log(newArr);