//a linear data structure that includes a series of connected nodes
//each node consists of a data value and a pointer that points to the next node
//list elements can be easily inserted or removed without reallocation or reorganization of the entire structure
//random access of elements is not feasible and accessing an element has linear time complexity O(n)
//supports 3 main operations
//    insertion: to add an element at the beginning, end or at a given index in the list
//    deletion: remove an item given its index or value
//    search: to find an element given its value
//can be used to implement stacks and queues
//    all applications of stacks and queues are applications of linked lists
//    image viewer; you can look at photos continuously in a slideshow

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    //O(1) bc does not depend on how many other elements there are on the list
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    //console.log(this.head);
    this.size++;
  }
  append(value) {
    //O(n)
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next !== null) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
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

const list = new LinkedList();
console.log(list.isEmpty()); //true
console.log(list.getSize()); //0

list.prepend(10); //{ value: 10, next: null }
list.prepend(20); //{ value: 20, next: { value: 10, next: null } }
list.prepend(30); //{value: 30, next: { value: 20, next: { value: 10, next: null } } }

list.print(); //30 20 10

list.append(40);
list.print(); //30 20 10 40

list.insert(50, 2);
list.print(); //30 20 50 10 40

list.removeFrom(2);
list.print(); //30 20 10 40

console.log(list.removeFrom(10)); //null

list.removeValue(10);
list.print(); //30 20 40

console.log(list.search(30)); //0
console.log(list.search(20)); //1
console.log(list.search(100)); //-1

list.reverse();
list.print(); //40 20 30
