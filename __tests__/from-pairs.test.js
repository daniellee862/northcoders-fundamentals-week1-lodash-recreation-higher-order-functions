const fromPairs = require("../from-pairs");

//EXAMPLE
// _.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }

//test for no input
//one pair
//two pair

describe("fromPairs tests", () => {
  test("return no value for no input", () => {
    expect(fromPairs([])).toEqual([]);
  });

  test("return object containing key-value pairs", () => {
    //Arrange,
    const data = [["a", 1]];
    //Act,
    //Assert
    expect(fromPairs(data)).toEqual(["a", 1]);
  });

  test("return input value as pairs", () => {
    //Arrange,
    const newData = [
      ["b", 2],
      ["a", 1],
    ];

    //Act,
    //Assert
    expect(fromPairs(newData)).toEqual({ b: 2, a: 1 });
  });
});
