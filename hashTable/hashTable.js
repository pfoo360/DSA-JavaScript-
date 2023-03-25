//store key value pairs in a fixed sized array
//hashing function accepts the string key, converts it into a hash code using a defined logic and then maps it into a numeric index that is within the bounds of the array
//use index to store value
//same hashing function is used to retrieve the value given a key
//main operations
//    Set to store a key-value pair
//    Get to retrieve a value given its key
//    Remove to delete a key-value pair
//used where constant time lookup and insertion are required
//    database indexing
//    caches

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i in key) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }
  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
  display() {
    this.table.map((val, i) => {
      if (val) console.log(i, val);
    });
  }
}

const table = new HashTable(50);

table.set("name", "Bruce");
table.set("age", 25);
table.display(); //1 25    17 Bruce
console.log(table.get("name")); //Bruce
table.remove("name");
table.display(); //1 25
