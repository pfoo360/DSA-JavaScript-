const fibonacciRecursive = (n) => {
  if (n < 2) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

console.log(fibonacciRecursive(0)); //0
console.log(fibonacciRecursive(1)); //1
console.log(fibonacciRecursive(6)); //8

//O(2^n)
