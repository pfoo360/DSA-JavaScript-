// const insertionSort = (a) => {
//   if (a.length <= 1) return a;

//   for (let i = 1; i < a.length; i++) {
//     let numberToInsert = a[i];
//     for (let j = i - 1; j >= 0; j--) {
//       let sortedElement = a[j];
//       if (numberToInsert < sortedElement) {
//         a[j + 1] = sortedElement;
//       } else if (numberToInsert > sortedElement) {
//         a[j + 1] = numberToInsert;
//         break;
//       }
//     }
//   }
// };

const insertionSort = (a) => {
  for (let i = 1; i < a.length; i++) {
    let numberToInsert = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > numberToInsert) {
      a[j + 1] = a[j];
      j = j - 1;
    }
    a[j + 1] = numberToInsert;
  }
};

const a = [-6, 20, 8, -2, 4];
insertionSort(a);
console.log(a); //[ -6, -2, 4, 8, 20 ]

//O(n^2)
