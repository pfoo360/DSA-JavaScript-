//given an UNDIRECTED GRAPH with weighted edges, a MST is a subset of the edges in the graph which connects all vertices together (w/o creating any cycles) while minimizing total edge cost
//Prim's is a greedy MST algorithm
//works well on dense grapgs
//    on dense graphs, Prim's meets or improves on the time bounds of its rivals (Kruskal's, etc.)
//when it comes to finding the minimum spanning forest on a disconnected graph, Prim's can't do this easily
//    the algorithm must be run on each connected component individually
//lazy Prim's: O(E*log(E))
//eager Prim's: O(E*log(V))
//Overview
//    maintain a min Priority Queue that sorts edges based on min edge cost
//        will be used to determine the next node to visit and the edge used to get there
//     start algorithm on any node s. Mark s as visited and iterate over all edges of s, adding them to the PQ
//    while the PQ is not empty and MST has not been formed, dequeue the next cheapest edge from the PQ
//        if the node it points to has already been visited skip and poll again
//        otherwise mark the current node as visited and add the selected edge to the MST
//iterate over the new current node's edges and add all its edges to the PQ
//        do not add edges to the PQ if it points to an already visited node

class MinHeap {
  constructor() {
    this.heap = [];
  }
  display() {
    console.log(this.heap);
  }
  peek() {
    return this.heap[0];
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  insert(vertex) {
    this.heap.push(vertex);

    let i = this.heap.length - 1;
    while (
      i > 0 &&
      this.heap[Math.floor((i - 1) / 2)].weight > this.heap[i].weight
    ) {
      let parent = Math.floor((i - 1) / 2);

      let temp = this.heap[parent];
      this.heap[parent] = this.heap[i];
      this.heap[i] = temp;
      i = parent;
    }
  }
  poll() {
    if (this.heap.length === 1) return this.heap.pop();

    let res = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.minHeapify(0);

    return res;
  }
  minHeapify(index) {
    if (this.heap.length === 1) return;

    let left = index * 2 + 1;
    let right = index * 2 + 2;
    if (left >= this.heap.length || right >= this.heap.length) return;

    if (
      this.heap[index].weight > this.heap[left].weight &&
      this.heap[left].weight <= this.heap[right].weight
    ) {
      let temp = this.heap[index];
      this.heap[index] = this.heap[left];
      this.heap[left] = temp;

      this.minHeapify(left);
    } else if (
      this.heap[index].weight > this.heap[right].weight &&
      this.heap[right].weight < this.heap[left].weight
    ) {
      let temp = this.heap[index];
      this.heap[index] = this.heap[right];
      this.heap[right] = temp;

      this.minHeapify(right);
    }
  }
  decreaseKey(i, newValue) {
    if (i > this.heap.length - 1) return;
    if (this.heap[i] <= newValue) return;

    this.heap[i] = { ...this.heap[i], weight: newValue };

    while (
      i !== 0 &&
      this.heap[Math.floor((i - 1) / 2)].weight > this.heap[i].weight
    ) {
      let parent = Math.floor((i - 1) / 2);

      let temp = this.heap[parent];
      this.heap[parent] = this.heap[i];
      this.heap[i] = temp;
      i = parent;
    }
  }
  deleteKey(index) {
    if (index > this.heap.length - 1) return;

    this.decreaseKey(index, this.heap[0] - 1);
    this.poll();
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    //for undirect graphs
    this.adjacencyList[vertex1].push({ to: vertex2, weight });
    this.adjacencyList[vertex2].push({ to: vertex1, weight });
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex, "->", [...this.adjacencyList[vertex]]);
    }
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v.node !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v.node !== vertex1
    );
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    this.adjacencyList[vertex].forEach((adjacentVertex) =>
      this.removeEdge(vertex, adjacentVertex.node)
    );

    delete this.adjacencyList[vertex];
  }
}

function createGraph() {
  const graph = new WeightedGraph();
  graph.addEdge(0, 1, 10);
  graph.addEdge(0, 2, 1);
  graph.addEdge(0, 3, 4);
  graph.addEdge(1, 2, 3);
  graph.addEdge(1, 4, 0);
  graph.addEdge(2, 3, 2);
  graph.addEdge(2, 5, 8);
  graph.addEdge(3, 5, 2);
  graph.addEdge(3, 6, 7);
  graph.addEdge(4, 5, 1);
  graph.addEdge(4, 7, 8);
  graph.addEdge(5, 6, 6);
  graph.addEdge(5, 7, 9);
  graph.addEdge(6, 7, 12);
  //graph.display();
  // // 0 -> [
  // //   { to: 1, weight: 10 },
  // //   { to: 2, weight: 1 },
  // //   { to: 3, weight: 4 }
  // // ]
  // // 1 -> [
  // //   { to: 0, weight: 10 },
  // //   { to: 2, weight: 3 },
  // //   { to: 4, weight: 0 }
  // // ]
  // // 2 -> [
  // //   { to: 0, weight: 1 },
  // //   { to: 1, weight: 3 },
  // //   { to: 3, weight: 2 },
  // //   { to: 5, weight: 8 }
  // // ]
  // // 3 -> [
  // //   { to: 0, weight: 4 },
  // //   { to: 2, weight: 2 },
  // //   { to: 5, weight: 2 },
  // //   { to: 6, weight: 7 }
  // // ]
  // // 4 -> [
  // //   { to: 1, weight: 0 },
  // //   { to: 5, weight: 1 },
  // //   { to: 7, weight: 8 }
  // // ]
  // // 5 -> [
  // //   { to: 2, weight: 8 },
  // //   { to: 3, weight: 2 },
  // //   { to: 4, weight: 1 },
  // //   { to: 6, weight: 6 },
  // //   { to: 7, weight: 9 }
  // // ]
  // // 6 -> [
  // //   { to: 3, weight: 7 },
  // //   { to: 5, weight: 6 },
  // //   { to: 7, weight: 12 }
  // // ]
  // // 7 -> [
  // //   { to: 4, weight: 8 },
  // //   { to: 5, weight: 9 },
  // //   { to: 6, weight: 12 }
  // // ]

  return graph;
}

function prims() {
  const graph = createGraph();
  const numOfNodes = 8;
  const numOfEdgesInMST = numOfNodes - 1;

  const priorityQueue = new MinHeap();
  const visitedNodes = new Set();
  const MST = [];
  //start with node 0
  //mark node 0 as visited
  let from = 0;
  visitedNodes.add(from);
  //add all edges of node 0 to PQ
  graph.adjacencyList[0].forEach((edge) =>
    priorityQueue.insert({ from, ...edge })
  );
  //while PQ is not empty and MST not formed
  while (!priorityQueue.isEmpty() && MST.length !== numOfEdgesInMST) {
    //dequeue the next cheapest edge from PQ
    const edge = priorityQueue.poll();
    // console.log(edge);
    // console.log(visitedNodes);

    //if edge points to a node that has NOT been visited, mark the node as visited
    if (!visitedNodes.has(edge.to)) {
      visitedNodes.add(edge.to);
      MST.push(edge);
      //add edges to priority queue which point to unvisited nodes
      from = edge.to;
      graph.adjacencyList[from].forEach((edge) => {
        if (!visitedNodes.has(edge.to)) {
          priorityQueue.insert({ from, ...edge });
        }
      });
    }
  }
  console.log("Minimum spanning tree", MST);
  // [
  //   { from: 0, to: 2, weight: 1 },
  //   { from: 2, to: 3, weight: 2 },
  //   { from: 3, to: 5, weight: 2 },
  //   { from: 5, to: 4, weight: 1 },
  //   { from: 4, to: 1, weight: 0 },
  //   { from: 5, to: 6, weight: 6 },
  //   { from: 4, to: 7, weight: 8 }
  // ]

  // [
  //   { node: 2, weight: 1 },
  //   { node: 3, weight: 2 },
  //   { node: 5, weight: 2 },
  //   { node: 4, weight: 1 },
  //   { node: 1, weight: 0 },
  //   { node: 6, weight: 6 },
  //   { node: 7, weight: 8 }
  // ]
}

prims();
