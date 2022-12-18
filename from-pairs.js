function fromPairs(pairArr) {
  if (pairArr.length == 0) {
    return [];
  }

  if (pairArr.length == 1) {
    return pairArr[0];
  }

  // flatten array
  // spread syntax to create an object

  //   const flatArray = pairArr.flat();

  const obj = Object.fromEntries(pairArr);

  return obj;
  //
}

module.exports = fromPairs;
