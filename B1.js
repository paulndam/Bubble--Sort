// Bubble sort

// function that takes an unsorted array and returns a sorted array

function bubbleSort(array) {
  let noSwapping;
  // start looping with variable called i at the end of the array moving towards the begining
  for (let i = array.length; i > 0; i--) {
    noSwapping = true;
    // do an inner loop with a variable called j from beginning until i - 1
    for (let j = 0; j < i - 1; j++) {
      //console.log(array, array[j], array[j + 1])
      // if array[j] is greater than array[j+1] swap those two values
      if (array[j] > array[j + 1]) {
        //then swap

        //swapII(array, j, j + 1);
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        noSwapping = false;
      }
    }
    if (noSwapping) {
      break;
    }
  }
  return array;
}

console.log(bubbleSort([4, 5, 9, 1, 3, 6, 2, 11, 14, 10, 15]));
console.log(
  bubbleSort([
    29,
    8,
    16,
    40,
    50,
    13,
    5,
    15,
    28,
    31,
    36,
    38,
    49,
    35,
    27,
    24,
    26,
    19,
    14,
    34,
  ])
);

// Second Approach

function bSort(array) {
  const swap = (array, element1, element2) => {
    [array[element1], array[element2]] = [array[element2], array[element1]];
  };

  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

console.log(bSort([4, 5, 9, 1, 3, 6, 2, 11, 14, 10, 15]));
console.log(
  bSort([
    29,
    8,
    16,
    40,
    50,
    13,
    5,
    15,
    28,
    31,
    36,
    38,
    49,
    35,
    27,
    24,
    26,
    19,
    14,
    34,
  ])
);

function swapII(array, element1, element2) {
  const temp = array[element1];
  array[element1] = array[element2];
  array[element2] = temp;
}
