const findSecondLargest = (arr) => {
  let arrWithoutDuplicates = [];
  if (arr.length <= 1) {
    return "podaj więcej wartości";
  } else {
    const sortedArr = arr.slice().sort((a, b) => b - a);

    if (sortedArr[0] === sortedArr[1]) {
      sortedArr.forEach((el) => {
        if (el < sortedArr[0]) {
          arrWithoutDuplicates.push(el);
        }
      });
      return arrWithoutDuplicates[0];
    } else {
      return sortedArr[1];
    }
  }
};
console.log(findSecondLargest([1, 2]));
console.log(findSecondLargest([1, 2, 12, 22, 333, 122, 3, 3, 4, 5, 6, 11]));
console.log(findSecondLargest([1]));
console.log(findSecondLargest([1, 4, 5, 5, 5, 6, 6]));
