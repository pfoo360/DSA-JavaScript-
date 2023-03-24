const binarySearchRecursive = (a, t) => {
  return search(a, t, 0, a.length - 1);
};

const search = (a, t, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) return -1;

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (a[middleIndex] === t) return middleIndex;

  if (a[middleIndex] < t) return search(a, t, middleIndex + 1, rightIndex);
  if (a[middleIndex] > t) return search(a, t, leftIndex, middleIndex - 1);
};

console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 10)); //4
console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 6)); //3
console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 20)); //-1

//O(log(n))
