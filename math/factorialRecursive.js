const factorialRecursive = (n) => {
  if (n < 2) return 1;
  return n * factorialRecursive(n - 1);
};

console.log(factorialRecursive(0)); //1
console.log(factorialRecursive(1)); //1
console.log(factorialRecursive(5)); //120
console.log(factorialRecursive(6)); //720

//O(n)
