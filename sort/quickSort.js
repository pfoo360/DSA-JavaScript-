const quickSort = (a) => {
  if (a.length < 2) {
    return a;
  }
  let pivot = a[a.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] < pivot) {
      left.push(a[i]);
    } else right.push(a[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const a = [8, 20, -2, 4, -6];
console.log(quickSort(a)); //[ -6, -2, 4, 8, 20 ]

//worse case: O(n^2)
// when array is already sorted; instead of partitioning your array into smaller arrays, we end up partitioning
//the array into an empty array and a full array. You end up comparing with every other element

//avg case: O(nlogn)
// we recursively divide the array into smaller arrays O(logn) and we also have a for loop O(n)
