const linearSearch = (a, t) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === t) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); //2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); //4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); //-1

//O(n)
