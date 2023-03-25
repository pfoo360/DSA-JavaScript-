class Node {
  constructor(value) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

//missing: removeFrom(index), removeValue(value), search(value), reverse
class DoublyLinkedList {
  constructor() {
    this.tail = null;
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
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront() {
    if (this.isEmpty()) return null;
    const removedValue = this.head.value;
    this.head = this.head.next;

    this.size--;
    return removedValue;
  }
  removeFromEnd() {
    if (this.isEmpty()) return null;

    const removedValue = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    this.size--;
    return removedValue;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      const node = new Node(value);
      let prevNode = this.head;
      let prevNodeIndex = 0;

      while (prevNodeIndex < index - 1) {
        prevNode = prevNode.next;
        prevNodeIndex++;
      }

      const nextNode = prevNode.next;

      node.next = nextNode;
      nextNode.previous = node;

      node.previous = prevNode;
      prevNode.next = node;

      this.size++;
    }
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
  printReverse() {
    if (this.isEmpty()) {
      console.log("List is empty.");
    } else {
      let curr = this.tail;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.previous;
      }
      console.log(listValues);
    }
  }
}

const list = new DoublyLinkedList();

list.append(20);
list.append(30);
list.prepend(10);
list.print(); //10 20 30

list.insert(40, 3);
list.print(); //10 20 30 40
list.insert(35, 3);
list.print(); //10 20 30 35 40

list.printReverse(); //40 35 30 20 10
list.removeFromFront();
list.print(); //20 30 35 40

list.removeFromEnd();
list.print(); //20 30 35
