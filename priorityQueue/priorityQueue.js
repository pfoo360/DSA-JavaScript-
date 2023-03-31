//abstract data type that is similar to a normal queue expect that each element has a certain priority
//priority determines the order in which elements are removed from priority queues
//heap is a tree that satisfies the heap invariant (aka heap property)
//    max heap: parent node greater than or equal to children
//    min heap: parent nodes less than or equal to children
//all heaps must be trees- no cycles
//used in
//    certain implementation of Dijkstra's Shortest Path algorithm
//    when you need to dynamically fetch the next best element
//    K'th Largest Element in an array
//    in Huffman coding (often used for lossless data compression)
//    best first search algorithms (such as A*)
//    used in Minimum Spanning Tree algorithms (Prim's)
//priority queues typically implemented with heaps
//    gives best possible time complexity
//binary heap: binary tree that supports the heap invariant
//complete binary tree: a tree in which at every level, except possibly the last, is completely filled and all the nodes are far left as possible


class MinHeap{
  constructor(){
    this.heap = []
  }
  display(){
    console.log(this.heap)
  }
  peek(){
    //O(1)
    return this.heap[0]
  }
  insert(value){
    //O(logN)

    this.heap.push(value)

    //used to fix min heap property
    //perform swap between parent and child if parent is greater than child
    let i = this.heap.length -1
    while(i > 0 && this.heap[Math.floor((i-1)/2)] > this.heap[i]) {
      let parent = Math.floor((i-1)/2)

      let temp = this.heap[parent]
      this.heap[parent] = this.heap[i]
      this.heap[i]=temp
      i = parent
    }
  }
  poll(){
    //O(logN)

    if(this.heap.length === 1) return this.heap.pop()

    let res = this.heap[0]
    this.heap[0] = this.heap[this.heap.length-1]
    this.heap.pop()
    this.minHeapify(0)

    return res
  }
  //sink
  minHeapify(index){
    //O(logN)

    if(this.heap.length === 1) return

    let left = (index*2)+1
    let right = (index*2)+2
    if(left > this.heap.length || right > this.heap.length) return
   
    if(this.heap[index] > this.heap[left] && this.heap[left] <= this.heap[right]){
      let temp = this.heap[index]
      this.heap[index]=this.heap[left]
      this.heap[left]=temp

      this.minHeapify(left)
    }else if(this.heap[index] > this.heap[right] && this.heap[right] < this.heap[left]){
      let temp = this.heap[index]
      this.heap[index] = this.heap[right]
      this.heap[right]=temp

      this.minHeapify(right)
    }

  }
  decreaseKey(i, newValue){
    //O(logN)
    if(i > this.heap.length - 1) return
    if(this.heap[i] <= newValue) return

    this.heap[i] = newValue

    //swim
    while(i !== 0 && this.heap[Math.floor((i-1)/2)] > this.heap[i]){
      let parent = Math.floor((i - 1)/2)

      //swap
      let temp = this.heap[parent]
      this.heap[parent] = this.heap[i]
      this.heap[i] = temp
      i = parent
    }
  }
  deleteKey(index){
    //O(logN)

    if(index > this.heap.length - 1) return

    this.decreaseKey(index, this.heap[0]-1)
    this.poll()

  }
}


let minHeap = new MinHeap()
minHeap.insert(1);
minHeap.insert(5);
minHeap.insert(1);
minHeap.insert(8);
minHeap.insert(6);
minHeap.insert(2);
minHeap.insert(2)
minHeap.insert(13)
minHeap.insert(12)
minHeap.insert(11)
minHeap.insert(7)
minHeap.insert(2)
minHeap.insert(15)
minHeap.insert(3)
minHeap.insert(10)
minHeap.display()
//console.log(minHeap.peek())
console.log(minHeap.poll())
minHeap.display()
console.log(minHeap.poll())
minHeap.display()
minHeap.decreaseKey(6,0)
minHeap.display()
minHeap.deleteKey(12)
minHeap.display()
minHeap.deleteKey(4)
minHeap.display()
