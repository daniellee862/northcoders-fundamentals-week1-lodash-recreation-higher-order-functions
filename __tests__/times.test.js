const times = require("../times");

describe('times', () => {
    // return empty array

    // check function call

    // invoke function n times

    // check for non-mutation

    test('return empty array', () => {
        expect(times(0)).toEqual([]);
    }); 
    test('check function call', () => {
        const newtimes = (empArr) => {
            empArr.push('Hello');
        }
        expect(times(1, newtimes)).toEqual(['Hello']);
    });
    test('invoke multiple times', () => {
        const newtimes = (empArr) => {
            empArr.push('Hello');
        }
        const multiTimes = 3;
        expect(times(multiTimes, newtimes)).toEqual(['Hello', 'Hello', 'Hello']);
    });
    test("check for new value", () => {
        const multiTimes = 3;
        const value = times(multiTimes);
        expect(value).not.toBe(multiTimes);
    });
    test('check for non-mutation', () => {
        const multiTimes = 3;
        const newtimes = (empArr) => {
            empArr.push('Hello');
        }
        times(multiTimes, newtimes);
        expect(multiTimes).toEqual(3);
      });
}); 
