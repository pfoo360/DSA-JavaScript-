//is a sequential collection of elements that follows FIFO (first in first out)
//first element inserted into queue is first element to be removed
//supports 2 main operations
//    enqueue: adds an element to the rear/tail of the collection
//    dequeue: removed an element from the front/head of the collection
//for when you have to process in an orderly fashion
//    CPU task scheduling
//    callback queue in JavaScript runtime

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }

  //these are just misc helper functions
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) return this.items[0];

    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty()); //true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size()); //3
queue.print(); //10,20,30
console.log(queue.dequeue()); //10
console.log(queue.peek()); //20
