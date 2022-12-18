const map = require("../map");

//example
/* function square(n) {
    return n * n;
  }
   
  function map ([4, 8], square);

  // => [16, 64] */

describe("map tests", () => {
  //our map will recieve input numbers
  //empty array
  //input two numbers, return them squared
  //input multiple numbers
  //send in a function
  //test for new return value
  //test for immutability

  test("emptry array returns empty array", () => {
    expect(map([])).toEqual([]);
  });

  test("input two numbers, return them squared", () => {
    const newNum = [4, 8];

    expect(map(newNum)).toEqual([16, 64]);
  });

  test("input lots of numbers", () => {
    const newNum = [1, 2, 3, 4, 5];

    function newTotal(newArr, sum) {
      newArr.push(sum);
    }

    expect(map(newNum, newTotal)).toEqual([1, 4, 9, 16, 25]);
  });

  test("send in a function as a parameter", () => {
    const newNum = [1, 2, 3, 4, 5, 6];

    function newTotal(newArr, sum) {
      newArr.push(sum);
    }

    expect(map(newNum, newTotal)).toEqual([1, 4, 9, 16, 25, 36]);
  });
});
