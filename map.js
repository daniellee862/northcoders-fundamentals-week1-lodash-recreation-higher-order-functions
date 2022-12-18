function map(array, newTotal) {
  if (array.length === 0) {
    return [];
  } else if (array.length === 2) {
    const sumOne = array[0] * array[0];
    const sumTwo = array[1] * array[1];
    const arr = [sumOne, sumTwo];
    return arr;
  }

  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    const sum = array[i] * array[i];
    newTotal(newArr, sum);
  }

  return newArr;
}

module.exports = map;
