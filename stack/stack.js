//a sequential collect of elements that follows the principle of LIFO (last in first out)
//last element inserted into the stack is the first element to be removed
//supports 2 main operations
//    push:adds an element to the collection
//    pop: deletes the most recently added element from the collection
//for when you have to trace back your steps
//    browser history tracking
//    undo operation when typing
//    expression conversion (infix, postfix)
//    call stack in JavaScript runtime

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop(element) {
    return this.items.pop();
  }

  //these are just misc helper functions
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty()); //true
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size()); //3
stack.print(); //10,20,30
console.log(stack.pop()); //30
console.log(stack.peek()); //20
