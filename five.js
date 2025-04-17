// program to implement stack data structure

class Stack{
    constructor(){
       this.item=[];
    }

     // add element to the stack
    add(element){
      return this.item.push(element)
    }
    // remove element from the stack
    remove(){
        if(this.item.length>0){
            return this.item.pop();
        }
    }
   // view the last element
    peek(){
        return this.item[this.item.length-1]
    }

    // check if the stack is empty
    isEmpty(){
        return this.item.length==0
    }

    // the size of the stack
    size(){
        return this.item.length;
    }

    // empty the stack
    clear(){
        return this.item.length=[];
    }
    firstitemdelete(){
        return this.item.shift();
    }
   
    firstitemadd(element){
        return this.item.unshift(element)
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.item);

stack.remove();
console.log(stack.item);

console.log(stack.peek());
console.log(stack.isEmpty());

console.log(stack.size());
stack.firstitemadd("YY");
console.log(stack.item);

stack.firstitemdelete();
console.log(stack.item);




stack.clear();
console.log(stack.item);