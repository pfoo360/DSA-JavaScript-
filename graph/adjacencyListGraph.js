class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    //for undirect graphs
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  display() {
    //O(n)
    // for (let vertex in this.adjacencyList) {
    //   console.log(vertex, "->", [...this.adjacencyList[vertex]]);
    // }

    //O(mn)
    for (let vertex1 in this.adjacencyList) {
      this.adjacencyList[vertex1].forEach((vertex2) => {
        console.log(vertex1, "->", vertex2);
      });
    }
  }
  removeEdge(vertex1, vertex2) {
    //constant time complexity O(1)
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    //time complexity depends on the number of edges as vertices O(n)
    if (!this.adjacencyList[vertex]) return;

    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  hasEdge(vertex1, vertex2) {
    //Set.has() has constant time complexity
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B"); //bc this is an undirected graph, edges A->B and B->A are created
graph.addEdge("B", "C"); //bc this is an undirected graph, edges B->C and C->B are created

graph.display();
// A -> B
// B -> A
// B -> C
// C -> B

console.log(graph.hasEdge("A", "B")); //true
console.log(graph.hasEdge("A", "C")); //false

// graph.removeEdge("A", "B");
// graph.display();
// // B -> C
// // C -> B

graph.removeVertex("B");
graph.display();
//bc we deleted vertex B there is no edges left
// A -> []
// C -> []
