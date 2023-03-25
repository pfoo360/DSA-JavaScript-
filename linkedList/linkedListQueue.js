class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    //O(1)
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    //O(1)
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront() {
    //O(1)
    if (this.isEmpty()) return null;
    const removedValue = this.head.value;
    this.head = this.head.next;
    this.size--;
    return removedValue;
  }
  removeFromEnd() {
    //O(n)
    if (this.isEmpty()) return null;

    const removedValue = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return removedValue;
  }
  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.tail = this.head;
    this.head = prev;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is empty.");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

//FIFO: insert from one end, remove from the other end
//treat inserting at end as enqueue operation
//treat removing node from start as dequeue operation
class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }
  dequeue() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}

const queue = new LinkedListQueue();
console.log(queue.isEmpty()); //true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.getSize()); //3
queue.print(); //10 20 30

console.log(queue.dequeue()); //10
queue.print(); //20 30
console.log(queue.peek()); //20
