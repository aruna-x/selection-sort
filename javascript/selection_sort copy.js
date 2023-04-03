function selectionSort(arr) {
  // let res = [];
  // let lowest;
  // let len = arr.length;
  // for (let i=0; i<len; i++) {
  //   lowest = arr[0];
  //   for (let j=1; j<arr.length; j++) {
  //     if (arr[j] < lowest) {
  //       lowest = arr[j];
  //     }
  //   }
  //   res.push(lowest);
  //   arr.splice(arr.indexOf(lowest), 1);
  // }
  // return res;

  // or ...
  let res = [];

  while (arr.length>0) {
    let min = Math.min(...arr);
    let ind = arr.indexOf(min);

    res.push(min);
    arr.splice(ind,1);
  }
  return res;
}

if (require.main === module) {
  console.log("Expecting: []");
  console.log("=>", selectionSort([]));

  console.log("Expecting: [1]");
  console.log("=>", selectionSort([1]));

  console.log("Expecting: [-1, 2, 2, 5]");
  console.log("=>", selectionSort([2, -1, 5, 2]));

  console.log("Expecting: [1, 2, 3, 4, 5]");
  console.log("=>", selectionSort([5, 4, 3, 2, 1]));

  console.log("Expecting: [2, 2]");
  console.log("=>", selectionSort([2, 2]));

  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  const longInput = [];
  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

/**
 * Problem: sort an array using selection sort: repeatedly find lowest value and place in sorted array
 * 
 * Naive solution: n^2
 * iterate over the array n times to find each lowest value
 * 
 * Anything faster? ... merge sort? lol
 * 
 */