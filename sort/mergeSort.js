const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (left, right) => {
  const sortedArr = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
};

const a = [8, 20, -2, 4, -6];
console.log(mergeSort(a)); //[ -6, -2, 4, 8, 20 ]

// [ 8 ] [ 20 ]
// [ 4 ] [ -6 ]
// [ -2 ] [ -6, 4 ]
// [ 8, 20 ] [ -6, -2, 4 ]
// [ -6, -2, 4, 8, 20 ]

//O(nlogn)
