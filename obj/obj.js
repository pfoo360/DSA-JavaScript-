const obj = {
  name: "Bruce",
  age: 25,
  sayName: function () {
    console.log(this.name);
  },
};

delete obj.age;

obj.sayName();

//insert: O(1)
//remove: O(1)
//access: O(1)
//search: O(n)
//Object.keys(): O(n)
//Object.values(): O(n)
//Object.entries(): O(n)
