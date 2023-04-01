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
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  display() {
    //O(n);
    for (let vertex in this.adjacencyList) {
      console.log(vertex, "->", [...this.adjacencyList[vertex]]);
    }

    // //O(mn)
    // for (let vertex1 in this.adjacencyList) {
    //   this.adjacencyList[vertex1].forEach((vertex2) => {
    //     console.log(vertex1, "->", vertex2);
    //   });
    // }
  }
  removeEdge(vertex1, vertex2) {
    //O(n)
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

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 3); //bc this is an undirected graph, edges A->B and B->A are created
graph.addEdge("B", "C", 10); //bc this is an undirected graph, edges B->C and C->B are created

graph.display();
// A -> [ { node: 'B', weight: 3 } ]
// B -> [ { node: 'A', weight: 3 }, { node: 'C', weight: 10 } ]
// C -> [ { node: 'B', weight: 10 } ]

graph.removeEdge("A", "B");
graph.display();
// A -> []
// B -> [ { node: 'C', weight: 10 } ]
// C -> [ { node: 'B', weight: 10 } ]

graph.removeVertex("B");
graph.display();
//bc we deleted vertex B there is no edges left
// A -> []
// C -> []
