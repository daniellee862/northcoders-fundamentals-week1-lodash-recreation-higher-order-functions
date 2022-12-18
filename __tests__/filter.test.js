const filter = require("../filter");

//example
/* var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
   
  _.filter(users, function(o) { return !o.active; });
  // => objects for ['fred'] */

describe("filter tests", () => {
  //pass in empty array return undefined
  //pass in one object, callback function and return one object
  //pass in multiple objects, return both falsey and truthy from callback func and return filtered array
  //test for input mutation
  //test for a 'new' output value

  //my callback function
  //   const nightClub = (drinkers) => {
  //     for (let i = 0; i < drinkers, length; i++) {
  //       if (drinkers[i].age > 18) {
  //         return drinkers[i];
  //       }
  //     }
  //   };

  const nightClub = (drinkers, vip) => {
    for (let i = 0; i < drinkers.length; i++) {
      if (drinkers[i].age > 18) {
        vip.push(drinkers[i]);
      }
    }
  };

  //data
  const drinkers = [
    { person: "chad", age: 15, favdrink: "lager" },
    { person: "stacey", age: 32, favdrink: "cider" },
  ];

  // ARRANGE
  // ACT
  // ASSERT

  test("  send in empty array get back undefined", () => {
    // ARRANGE
    const drinkers = [];

    // ACT
    // ASSERT
    expect(filter(drinkers, nightClub)).toEqual(undefined);
  });

  test("pass in one argument, a callback function and return one object", () => {
    // ARRANGE
    const drinkers = [{ person: "stacey", age: 32, favdrink: "cider" }];

    const nightClub = (drinkers, vip) => {
      for (let i = 0; i < drinkers.length; i++) {
        if (drinkers[i].age > 18) {
          vip.push(drinkers[i]);
        }
      }
    };

    // ACT
    // ASSERT
    expect(filter(drinkers, nightClub)).toEqual([
      { person: "stacey", age: 32, favdrink: "cider" },
    ]);
  });

  test("pass in multiple objects, return both falsey and truthy from callback func and return filtered array", () => {
    // ARRANGE
    const drinkers = [
      { person: "stacey", age: 32, favdrink: "cider" },
      { person: "chad", age: 15, favdrink: "lager" },
      { person: "daniel", age: 14, favdrink: "pims" },
      { person: "fran", age: 25, favdrink: "bourbon" },
      { person: "agnes", age: 26, favdrink: "vodka" },
    ];

    const nightClub = (drinkers, vip) => {
      for (let i = 0; i < drinkers.length; i++) {
        if (drinkers[i].age > 18) {
          vip.push(drinkers[i]);
        }
      }
    };

    // ACT
    // ASSERT
    expect(filter(drinkers, nightClub)).toEqual([
      { person: "stacey", age: 32, favdrink: "cider" },
      { person: "fran", age: 25, favdrink: "bourbon" },
      { person: "agnes", age: 26, favdrink: "vodka" },
    ]);
  });

  test("check for non-mutation", () => {
    // ARRANGE
    const drinkers = [
      { person: "stacey", age: 32, favdrink: "cider" },
      { person: "chad", age: 15, favdrink: "lager" },
      { person: "daniel", age: 14, favdrink: "pims" },
      { person: "fran", age: 25, favdrink: "bourbon" },
      { person: "agnes", age: 26, favdrink: "vodka" },
    ];

    const nightClub = (drinkers, vip) => {
      for (let i = 0; i < drinkers.length; i++) {
        if (drinkers[i].age > 18) {
          vip.push(drinkers[i]);
        }
      }
    };

    filter(drinkers, nightClub);

    // ACT
    // ASSERT
    expect(drinkers).toEqual([
      { person: "stacey", age: 32, favdrink: "cider" },
      { person: "chad", age: 15, favdrink: "lager" },
      { person: "daniel", age: 14, favdrink: "pims" },
      { person: "fran", age: 25, favdrink: "bourbon" },
      { person: "agnes", age: 26, favdrink: "vodka" },
    ]);
  });
});
