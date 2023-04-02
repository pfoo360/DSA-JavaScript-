//Dijkstra's algorithm is a Single Source Shortest Path algorithm for graphs with non-negative weighted edges
//    means you need to specify a starting node for the algorithm
//    means Dijkstra's can tell you the shortest path between starting node and all other nodes in the graph
//    non-negative edge weights is imposed to ensure that once a node has been visisted its optimal distance canNOT be improved
//    non-negative edge weights enables Dijkstra's to act in a greedy manner- always selects the next most promising node
//time complexity is typically O(E*log(V))
//    competitive against other shortest path algorithms
//algorithm overview
//    maintain a 'dist' array where the distance to every node is positive infinity. Mark the distance to the start node 's' to be 0.
//    maintain a PQ of key-value pairs of (node_index, distance_weight) which tell you which node to visit next based on the sorted min weight value
//    insert (s, 0) into the PQ and loop while PQ is not empty, pulling out the next promising value
//    iternate over all edges outwards from the current node and relax each edge, appending new key-value pair to the PQ for every relaxation

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
    let smallest = index;

    if (
      left < this.heap.length &&
      this.heap[index].weight > this.heap[left].weight
    ) {
      smallest = left;
    }
    if (
      right < this.heap.length &&
      this.heap[smallest].weight > this.heap[right].weight
    ) {
      smallest = right;
    }
    if (smallest !== index) {
      let temp = this.heap[index];
      this.heap[index] = this.heap[smallest];
      this.heap[smallest] = temp;
      this.minHeapify(smallest);
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
    //for direct graphs
    this.adjacencyList[vertex1].push({ to: vertex2, weight });
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex, "->", [...this.adjacencyList[vertex]]);
    }
  }
}

const createGraph = () => {
  const graph = new WeightedGraph();
  graph.addEdge(0, 1, 4);
  graph.addEdge(0, 2, 1);
  graph.addEdge(1, 3, 1);
  graph.addEdge(2, 1, 2);
  graph.addEdge(2, 3, 5);
  graph.addEdge(3, 4, 3);
  //graph.display();
  // 0 -> [ { to: 1, weight: 4 }, { to: 2, weight: 1 } ]
  // 1 -> [ { to: 3, weight: 1 } ]
  // 2 -> [ { to: 1, weight: 2 }, { to: 3, weight: 5 } ]
  // 3 -> [ { to: 4, weight: 3 } ]
  // 4 -> []
  return graph;
};

const dijkstra = () => {
  const graph = createGraph();
  //maintain a 'dist' array where the distance to very node is positive infinity
  const dist = [];
  for (let i = 0; i < 5; i++) {
    dist[i] = Infinity;
  }
  //mark the distance to the start node (node 0) to be 0
  const startNode = 0;
  dist[startNode] = 0;

  //PQ of (node_index, weight)- tells us which node to visit next based on the sorted min cost value
  const priorityQueue = new MinHeap();

  //insert start node with a cost of 0 into the PQ
  //if we start at node 0, then the cost to visit node 0 is 0
  priorityQueue.insert({ to: 0, weight: 0 });

  //while PQ is not empty
  while (!priorityQueue.isEmpty()) {
    //pull out the next most promising (smallest weight) entry from PQ
    const node = priorityQueue.poll();
    //console.log(node);

    //iterate over all edges outwards from the current node
    graph.adjacencyList[node.to].forEach((edge) => {
      //calculate the total distance from current node to next node
      const totalDistance = dist[node.to] + edge.weight;

      //if the total distace to next node is the best distance (cost less) then replace it in the dist array
      //also add this to the priority queue
      //every time we find a better distance we insert that information into the priority queue
      if (dist[edge.to] > totalDistance) {
        dist[edge.to] = totalDistance;
        priorityQueue.insert({ to: edge.to, weight: totalDistance });
      }
    });
    //console.log("updatedDistArr", dist);
    //priorityQueue.display();
  }
  console.log(dist); //[ 0, 3, 1, 4, 7 ]
};

dijkstra();
