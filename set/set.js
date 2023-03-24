const set = new Set([1, 2, 3]);
set.add(4);

console.log(set.has(4)); //true

for (const item of set) {
  console.log(item);
} //1 2 3 4

console.log(set.size); //4

set.delete(3);

set.clear();

//sets do not maintain insertion order; an item inserted first does not necessarily mean it is the first element in a set
//searching elements or deleting elements in set is faster compared to arrays
