const bubbleSort = (a) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        swapped = true;
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
      }
    }
  } while (swapped);
};

const a = [8, 20, -2, 4, -6];
bubbleSort(a);
console.log(a); //[ -6, -2, 4, 8, 20 ]

//O(n^2)
//quadratic
