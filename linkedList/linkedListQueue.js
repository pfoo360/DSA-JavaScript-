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
  insert(value, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let curr = this.head;
      let currIndex = 0;
      while (currIndex < index - 1) {
        curr = curr.next;
        currIndex++;
      }
      node.next = curr.next;
      curr.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) return null;
    let removedNode;
    //removing head node is O(1)
    //removing a node in general is O(n)
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let curr = this.head;
      let currIndex = 0;
      while (currIndex < index - 1) {
        curr = curr.next;
        currIndex++;
      }
      removedNode = curr.next;
      curr.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
  removeValue(value) {
    if (this.isEmpty()) return null;
    //removing head node is O(1)
    //removing a node in general is O(n)
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let curr = this.head;
      while (curr.next !== null && curr.next.value !== value) {
        curr = curr.next;
      }
      //if while loop exits, one of two things happened
      //1)pointer has stopped at node previous to the node that has to be removed (so there exists a node that has to be removed)
      if (curr.next !== null) {
        const removedNode = curr.next;
        curr.next = removedNode.next;
        this.size--;
        return removedNode.value;
      } else {
        return null;
      }
    }
  }
  search(value) {
    if (this.isEmpty()) return -1;

    let currIndex = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return currIndex;
      curr = curr.next;
      currIndex++;
    }
    return -1;
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
