const map = new Map([
  ["a", 1],
  ["b", 2],
]);

for (const [key, value] of map) {
  console.log(key, value);
} //a 1   b 2

console.log(map.size); //2

map.set("c", 3);

console.log(map.has("a")); //true

map.delete("c");

map.clear();

//objects are unordered whereas maps are ordered
//keys in objects can only be string or symbol type whereas keys in maps can be any type
//an object has a prototype and may contain a few default keys which may collide with your own keys if you are not careful. A map does not contain any keys by default
//objects are not iterable. Maps are iterables
//The number of items in an object must be determined manually. Number of items in a map is readily available via size property in a map
//Maps are restricted to storing data; cannot attach functionality to maps
