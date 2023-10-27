function bubbleSort(arr) {
  let len = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

let unsortedArray = [5, 3, 1, 8, 6, 2, 7, 4];
let sortedArray = bubbleSort(unsortedArray.slice()); // Create a copy to keep the original array intact

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
