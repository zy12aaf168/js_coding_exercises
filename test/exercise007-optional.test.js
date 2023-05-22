import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  } from "../challenges/exercise007-optional";

describe('sumDigits', () => {
    test('throws an error if n is undefined', () => {
      expect(() => sumDigits()).toThrow('n is required');
    });
  
    test('returns the sum of digits in an array of positive numbers', () => {
      expect(sumDigits([1, 2, 3])).toBe(6);
      expect(sumDigits([9, 8, 7])).toBe(24);
      expect(sumDigits([5, 5, 5, 5])).toBe(20);
    });
  
    test('returns the sum of digits in an array of negative numbers', () => {
      expect(sumDigits([-1, -2, -3])).toBe(-6);
      expect(sumDigits([-9, -8, -7])).toBe(-24);
      expect(sumDigits([-5, -5, -5, -5])).toBe(-20);
    });
  
    test('returns 0 if the array is empty', () => {
      expect(sumDigits([])).toBe(0);
    });
  
    test('returns the number itself if the array contains a single element', () => {
      expect(sumDigits([0])).toBe(0);
      expect(sumDigits([42])).toBe(42);
      expect(sumDigits([-10])).toBe(-10);
    });
  
    test('returns the sum of digits in an array of mixed positive and negative numbers', () => {
      expect(sumDigits([1, -2, 3, -4])).toBe(-2);
      expect(sumDigits([9, -8, -7, 6])).toBe(0);
      expect(sumDigits([-5, 5, -5, 5])).toBe(0);
    });
  });

  describe('createRange', () => {
    test('throws an error if start is undefined', () => {
      expect(() => createRange(undefined, 5)).toThrow('start is required');
    });
  
    test('throws an error if end is undefined', () => {
      expect(() => createRange(1, undefined)).toThrow('end is required');
    });
  
    test('creates a range with step 1 by default', () => {
      expect(createRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
      expect(createRange(-3, 2)).toEqual([-3, -2, -1, 0, 1, 2]);
    });
  
    test('creates a range with a specified step', () => {
      expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
      expect(createRange(-5, 5, 3)).toEqual([-5, -2, 1, 4]);
      expect(createRange(1, 10, 3)).toEqual([1, 4, 7, 10]);
    });
  
    test('returns an array with a single element when start and end are equal', () => {
      expect(createRange(0, 0)).toEqual([0]);
      expect(createRange(7, 7)).toEqual([7]);
    });
  });


describe('getScreentimeAlertList', () => {
  const john = "john_doe";
  const beth = "beth_1234";
  const sam = "sam_j_1989";
  const users = [
    {
      username: beth,
      name: "Beth",
      screenTime: [
        { date: "2019-05-01", usage: { mapMyRun:4, twitter: 30, instagram: 22, facebook: 40 } },  //96
        { date: "2019-05-02", usage: { mapMyRun:0, twitter: 56, instagram: 40, facebook: 31 } },  //127
        { date: "2019-05-03", usage: { mapMyRun:10, twitter: 2, instagram: 15, facebook: 19 } },  //46
        { date: "2019-05-04", usage: { mapMyRun:22, twitter: 10, instagram: 8, facebook: 61 } },  //101
      ]
    },
    {
      username: sam,
      name: "Sammy",
      screenTime: [
        { date: "2019-05-01", usage: { mapMyRun:0, whatsApp: 0, facebook: 0, safari: 10 } },  //10
        { date: "2019-05-02", usage: { mapMyRun:0, twitter: 40, instagram: 20, facebook: 40  } },  //16
        { date: "2019-05-03", usage: { mapMyRun:0, whatsApp: 0, facebook: 0, safari: 31 } },  //31
      ]
    },
    {
      username: "john_doe",
      name: "John Doe",
      screenTime: [
        { date: "2019-05-01", usage: {mapMyRun:17, twitter: 13, instagram: 50, facebook: 20 } },   //100
        { date: "2019-05-02", usage: {mapMyRun:15, twitter: 25, instagram: 20, facebook: 45 } },   //105
        { date: "2019-05-03", usage: {mapMyRun:10, twitter: 10, instagram: 15, facebook: 25 } },   //60
        { date: "2019-05-04", usage: {mapMyRun:0, twitter: 10, instagram: 25, facebook: 40 } },   //75
      ]
    }
  ]
  
  test('should throw an error if users parameter is not provided', () => {
    expect(() => getScreentimeAlertList()).toThrow('users is required');
  });

  test('should throw an error if date parameter is not provided', () => {
    expect(() => getScreentimeAlertList([])).toThrow('date is required');
  });

  test('should return an array of usernames with screentime exceeding 100 minutes and ignore other cases', () => {
    expect(getScreentimeAlertList(users, "2019-05-01")).toEqual([]);
    expect(getScreentimeAlertList(users, "2019-05-02")).toEqual([beth,john]);
    expect(getScreentimeAlertList(users, "2019-05-03")).toEqual([]);
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual([beth]);
  });
});

describe('hexToRGB', () => {
  it('should throw an error if hexStr is undefined', () => {
    expect(() => hexToRGB()).toThrow('hexStr is required');
  });

  it('should convert a hexadecimal color code to an RGB code', () => {
    expect(hexToRGB('#FF1133')).toEqual('rgb(255,17,51)');
  });

  it('should convert a different hexadecimal color code to the corresponding RGB code', () => {
    expect(hexToRGB('#00FF00')).toEqual('rgb(0,255,0)');
  });
});

describe('findWinner', () => {
  test('should throw an error if board is not provided', () => {
    expect(() => {
      findWinner();
    }).toThrow('board is required');
  });

  test('should return "X" if player X has won horizontally', () => {
    const board = [
      ["X", "X", "X"],
      ["0", null, "0"],
      ["X", null, "0"]
    ];
    expect(findWinner(board)).toBe("X");
  });

  test('should return "0" if player 0 has won vertically', () => {
    const board = [
      ["0", "X", null],
      ["0", null, "X"],
      ["0", null, "X"]
    ];
    expect(findWinner(board)).toBe("0");
  });

  test('should return null if there is no winner', () => {
    const board = [
      ["X", "0", null],
      ["0", "X", "0"],
      ["X", null, "0"]
    ];
    expect(findWinner(board)).toBeNull();
  });

  test('should return "X" for a diagonal win', () => {
    const board = [
      ["X", "0", null],
      ["0", "X", "0"],
      [null, null, "X"]
    ];
    expect(findWinner(board)).toBe("X");
  });
});
