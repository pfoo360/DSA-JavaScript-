//a non-linear data structure that consists of finite number of vertexes (nodes) connected by edges
//trees are a specific type of graph data structure
//difference between trees and other graphs is that graphs do not have hierarchy
//two types of graphs
//    directed- edges have direction
//    undirected- edges are bidirectional
//graph usage
//    Google maps
//    social media sites (show mutual connections betwen users)
//graph representation
//    adjacency matrix- a 2D array of size V*V where V is the number of vertexes in the graph
//        each row and column represent a vertex
//        if the value of any element say, matrix[i][j] is 1, it represents that there is an edge connecting vertex i and vertex j
//    adjacency list- vertices are stored in a map like data structure and every vertex stores a list of its adjacent vertices
//with an adjacency list
//    we only need to store the values for the edges that exist
//    storage wise, this is way more efficient
//    inserting and finding adjacent nodes is constant time
//    allows you to store additional values with an edge (such as weight of edge)
//with adjacency matrix
//    we store values irrespective of whether an edge exists or not
//    inserting and finding adjacent nodes is linear time
//    store additional values externally

//graph: a <=> b <=> c

const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];
console.log(matrix[0][1]); //1; represents a's relationship to b

const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};
console.log(adjacencyList["A"]); //[ 'B' ]; represents who is connected to vertex A
