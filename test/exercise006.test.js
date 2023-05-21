import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("should throw error when arr not supplied", () => {
        expect(() => { sumMultiples() }).toThrow("arr is required");
  })
  test("when array is empty should return an empty array", () => {
        expect(sumMultiples([])).toEqual(0);
  })
  test("when none of the numbers are a multiple of 3 or 5", () => {
        expect(sumMultiples([4, 22, 44, 62, 94])).toEqual(0);
  })
  test("when the numbers are a multiple of 3 or 5", () => {
        expect(sumMultiples([5, 3, 15, 16, 77])).toBe(23);
        expect(sumMultiples([15, 30, 8, 9, 2])).toBe(54);
        expect(sumMultiples([100, 3, 198, 8, 111])).toBe(412);		
  })
});

describe("isValidDNA", () => {
	test("it throws an error if undefined is passed", () => {
		expect(() => { isValidDNA(undefined) }).toThrow("str is required");
	})
	test("should return true for valid DNA", () => {
		expect(isValidDNA('CGTA')).toBe(true);
    expect(isValidDNA('CGTACGTA')).toBe(true);
    expect(isValidDNA('ACGTCGA')).toBe(true);
    expect(isValidDNA('T')).toBe(true);
	});
	test("should return false for invalid DNA", () => {
    expect(isValidDNA('')).toBe(false);
    expect(isValidDNA('CGTAB')).toBe(false);
    expect(isValidDNA('CGTACGGGLBANZ')).toBe(false);
    expect(isValidDNA('CGTA!')).toBe(false);    
	});
});

    ['A', 'T'],
		['T', 'A'],
		['C', 'G'],
		['G', 'C']

describe('getComplementaryDNA', () => {
  test('should return the complementary DNA string', () => {
    expect(getComplementaryDNA('A')).toBe('T');
    expect(getComplementaryDNA('T')).toBe('A');
    expect(getComplementaryDNA('C')).toBe('G');
    expect(getComplementaryDNA('G')).toBe('C');

    expect(getComplementaryDNA('ACTG')).toBe('TGAC');
    expect(getComplementaryDNA('CGTA')).toBe('GCAT');
    expect(getComplementaryDNA('ATCGATCG')).toBe('TAGCTAGC');
  });

  test('should return empty values for invalid dnas', () => {
    expect(getComplementaryDNA('')).toBe('');
    expect(getComplementaryDNA('CGTAXYZ')).toBe('');
    expect(getComplementaryDNA('CGTA CGTA')).toBe('');
  });

  test('should throw an error for undefined input', () => {
    expect(() => getComplementaryDNA(undefined)).toThrow('str is required');
  });
});

describe('isItPrime', () => {
  test('should return true for the smallest prime number (2)', () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(97)).toBe(true);
    expect(isItPrime(13)).toBe(true);
  });

  test('should return false for a non-prime number (50)', () => {
    expect(isItPrime(50)).toBe(false);
    expect(isItPrime(100)).toBe(false);
  });
});

describe('createMatrix', () => {
  test('should throw an error if n is not provided', () => {
    expect(() => createMatrix()).toThrow('n is required');
  });

  test('should return an empty matrix when n is 0', () => {
    expect(createMatrix(0, 'foo')).toEqual([]);
  });

  test('should return a matrix of size 1x1 when n is 1', () => {
    expect(createMatrix(1, 'foo')).toEqual([['foo']]);
  });

  test('should return a matrix of size 3x3 filled with "foo"', () => {
    const expectedMatrix = [
      ['foo', 'foo', 'foo'],
      ['foo', 'foo', 'foo'],
      ['foo', 'foo', 'foo'],
    ];
    expect(createMatrix(3, 'foo')).toEqual(expectedMatrix);
  });

});

describe('areWeCovered', () => {

  test('throws an error if `staff` parameter is undefined', () => {
    expect(() => areWeCovered(undefined, 'Monday')).toThrow('staff is required');
  });

  test('throws an error if `day` parameter is undefined', () => {
    expect(() => areWeCovered([{ name: 'Sally', rota: ['Monday', 'Tuesday'] }], undefined)).toThrow('day is required');
  });

  test('returns true when there are at least 3 staff members scheduled for the given day', () => {
    const staffRotas = [
      { name: 'Sally', rota: ['Monday', 'Tuesday', 'Wednesday', 'Friday' ] },
      { name: 'Pedro', rota: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'] },
      { name: 'Foo', rota: ['Monday', 'Wednesday', 'Friday'] },
      { name: 'Bar', rota: ['Wednesday'] },
      
    ];
    areWeCovered(staffRotas, 'Monday');
    expect(areWeCovered(staffRotas, 'Monday')).toBe(true);
    expect(areWeCovered(staffRotas, 'Wednesday')).toBe(true);
    expect(areWeCovered(staffRotas, 'Tuesday')).toBe(false);    
    expect(areWeCovered(staffRotas, 'Thursday')).toBe(false);
  });
});