const climbingStaircaseRecursive = (n) => {
  if (n < 3) return n;

  return climbingStaircaseRecursive(n - 1) + climbingStaircaseRecursive(n - 2);
};

console.log(climbingStaircaseRecursive(1));
console.log(climbingStaircaseRecursive(2));
console.log(climbingStaircaseRecursive(3));
console.log(climbingStaircaseRecursive(4));
console.log(climbingStaircaseRecursive(5));

//O(2^n)

const climbingStaircaseIterative = (n) => {
  const numberOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
  }

  return numberOfWays[n - 1];
};

console.log(climbingStaircaseIterative(1));
console.log(climbingStaircaseIterative(2));
console.log(climbingStaircaseIterative(3));
console.log(climbingStaircaseIterative(4));
console.log(climbingStaircaseIterative(5));
//O(n)
