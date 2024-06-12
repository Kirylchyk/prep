class Stack {
    constructor (){
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    peek(){
        return this.items[0];
    }

    state(){
        console.log(this.items);
    }

    isEmpty(){

        if (this.items.length === 0){
            console.log("true")
        }
        else (  console.log("false"))
    }
}

const myStack = new Stack;
myStack.add(8);
myStack.add(9);
myStack.add(5);
myStack.state();
console.log(myStack.peek());
myStack.isEmpty();


//queue.unshift(value) -> will add value in the beginning
//queue.shift(value) -> will remove value in the beginning