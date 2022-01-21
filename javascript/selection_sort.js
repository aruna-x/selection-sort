// Basically bubble sort! :)

function selectionSort(arr) {
  if (arr.length <= 1){
    return arr;
  }
  for (let i=0;i<arr.length-1;i++){
    if (arr[i]>arr[i+1]){
      let head = arr.slice(0,i);
      let tail = arr.slice(i+2);
      arr = [...head, arr[i+1], arr[i], ...selectionSort(tail)];
    }
  }
  return orderChecker(arr) ? arr : selectionSort(arr);
}

function orderChecker(arr){
  let res = true;
  for (let i=0;i<arr.length-1;i++){
    if (arr[i]>arr[i+1]) {
      res = false;
    }
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
 * 1. paraphrase
 * 
 * Sort array of ints from lowest to highest. Return: array.
 * 
 * 2. tests
 * 
 * (Above)
 * 
 * 3. pseudocode
 * 
 * Funnel results into a new array.
 * Option: add first element to array.
 * take the second and compare to the first. Place.
 * take the third, traverse array, and place *before* if num is equal to or greater than.
 * 
 * O(n^2)
 * 
 * 4. code
 * 5. refactor
 * 6. optimize
 */