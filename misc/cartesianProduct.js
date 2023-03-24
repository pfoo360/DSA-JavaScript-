const cartesianProduct = (arr) => {
  if (arr.length < 2) return arr;

  let [arrOne, arrTwo, ...rest] = arr;
  let cartProd = [];

  if (arr.length < 3) {
    for (let i = 0; i < arrOne.length; i++) {
      for (let j = 0; j < arrTwo.length; j++) {
        cartProd.push([].concat(arrOne[i], arrTwo[j]));
      }
    }

    return cartProd;
  }

  return cartesianProduct([cartesianProduct([arr[0], arr[1]]), ...rest]);
};

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const arr3 = [6, 7, 8];
const arr4 = [9, 10, 11];
console.log(cartesianProduct([arr1, arr2, arr3, arr4]));
