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
    //O(n) but we generally consider average case complexity instead of worse-case complexity bc collision is usually very minimal and decreased with better hashing functions. Avg complexity is constant
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    //O(n) but we generally consider average case complexity instead of worse-case complexity bc collision is usually very minimal and decreased with better hashing functions. Avg complexity is constant
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }
  remove(key) {
    //O(n) but we generally consider average case complexity instead of worse-case complexity bc collision is usually very minimal and decreased with better hashing functions. Avg complexity is constant
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
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
table.display(); //1 [ [ 'age', 25 ] ]    17 [ [ 'name', 'Bruce' ] ]
table.set("mane", "Clark");
table.display(); //1 [ [ 'age', 25 ] ]    17 [ [ 'name', 'Bruce' ], [ 'mane', 'Clark' ] ]
table.set("name", "Diana");
table.display(); //1 [ [ 'age', 25 ] ]    17 [ [ 'name', 'Diana' ], [ 'mane', 'Clark' ] ]
console.log(table.get("name")); //Diana
table.remove("name");
table.display(); //1 [ [ 'age', 25 ] ]    17 [ [ 'mane', 'Clark' ] ]
