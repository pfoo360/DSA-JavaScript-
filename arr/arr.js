const array = [1, 2, 3, 4];

array.push(5); //adds to end of array
array.unshift(0); // adds to front of array

console.log(array); //[ 0, 1, 2, 3, 4, 5 ]

array.pop(); //deletes last element in array
array.shift(); //deletes first element in array

console.log(array); //[ 1, 2, 3, 4 ]

//insert or remove from end of array: O(1)
//insert or remove from beginning of array: O(n) bc index has to be reset for every remaining element in the array
//accessing element in array: O(1)
//searching for element in array: O(n)
//push and pop: O(1)
//shift, unshift, concat, splice, slice: O(n)
//forEach, map, filter, reduce: O(n)
