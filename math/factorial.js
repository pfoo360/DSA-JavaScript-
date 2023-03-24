const factorial = (n) => {
  let fact = 1;

  for (let i = 2; i <= n; i++) {
    fact *= i;
  }

  return fact;
};

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(5)); //120

//O(n)
