const binarySearch = (a, t) => {
  if (a?.length === 0) return -1;
  let leftIndex = 0;
  let rightIndex = a.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (a[middleIndex] === t) return middleIndex;

    if (a[middleIndex] > t) {
      rightIndex = middleIndex - 1;
    }

    if (a[middleIndex] < t) {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
};

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); //4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); //3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); //-1

//O(log(n))
