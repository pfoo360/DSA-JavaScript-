//the size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element
//also referred to as circular buffer of ring buffer
//follows FIFO principle
//will reuse the empty block created during the dequeue operation
//a circular queue is great when working with queues of fixed maximum size
//supports 2 main operations
//    enqueue: adds an element to the rear/tail of the collection
//    dequeue: removed an element from the front/head of the collection
//used when you have a fixed size queue
//    clock
//    streaming data
//    traffic lights

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }

    return item;
  }
  peek() {
    if (!this.isEmpty()) return this.items[this.front];

    return null;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty()); //true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.isFull()); //true
queue.print(); //10 20 30 40 50

console.log(queue.dequeue()); //10
console.log(queue.peek()); //20
queue.print(); //20 30 40 50
queue.enqueue(60);
queue.print(); //20 30 40 50 60 <- 20 is at the front of the queue even tho 60 is the element inserted at index 0
