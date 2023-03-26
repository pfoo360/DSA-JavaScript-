//BT is a tree data structure in which each node has at most 2 children
//    referred to as left child and right child
//BST is a binary tree that has 2 properties
//    the value of each left node must be smaller than the parent node
//    the value of each right node must be greater than the parent node
//BST operations
//    insertion: to add a node to the tree
//    search: to find a node given its value
//    DFS & BFS: to visit all nodes in the tree
//    deletion: to remove a node given its value
//usage
//    searching
//    sorting
//    to implement abstract data types such as lookup tables and priority queues
//in a BST the inorder successor is a node with the least value in its right subtree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(value) {
    return this.searchValue(this.root, value);
  }
  searchValue(root, value) {
    if (!root) {
      return false;
    } else {
      if (value === root.value) {
        return true;
      } else if (value < root.value) {
        return this.searchValue(root.left, value);
      } else {
        return this.searchValue(root.right, value);
      }
    }
  }
  preOrder() {
    this.preOrderDfs(this.root);
  }
  preOrderDfs(root) {
    if (root) {
      console.log(root.value);
      this.preOrderDfs(root.left);
      this.preOrderDfs(root.right);
    }
  }
  inOrder() {
    this.inOrderDfs(this.root);
  }
  inOrderDfs(root) {
    if (root) {
      this.inOrderDfs(root.left);
      console.log(root.value);
      this.inOrderDfs(root.right);
    }
  }
  postOrder() {
    this.postOrderDfs(this.root);
  }
  postOrderDfs(root) {
    if (root) {
      this.postOrderDfs(root.left);
      this.postOrderDfs(root.right);
      console.log(root.value);
    }
  }
  bfs() {
    //use the optimized queue implementation for better time complexity
    const queue = [];
    queue.push(this.root);
    while (queue.length !== 0) {
      const node = queue.shift();
      console.log(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty()); //true
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(10)); //true
console.log(bst.search(5)); //true
console.log(bst.search(15)); //true
console.log(bst.search(999)); //false

bst.preOrder(); //10    5    3    7    15
bst.inOrder(); //3    5    7    10    15
bst.postOrder(); //3    7    5    15    10
bst.bfs(); //10    5    15    3    7

console.log(bst.min(bst.root)); //3
console.log(bst.max(bst.root)); //15

bst.bfs(); //10    5    15    3    7
// bst.delete(3);
// bst.bfs(); //10    5    15    7

// bst.delete(15);
// bst.bfs(); //10    5    3    7

bst.delete(10);
bst.bfs(); //15    5    3    7
