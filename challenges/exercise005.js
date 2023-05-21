

export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	
	const arrayLength = nums.length;
	const foundResult = nums.indexOf(n);

	if(foundResult >= arrayLength-1 || foundResult === -1) return null;

	return nums[foundResult+1]
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	const searchParams = ['0','1']
	const strAsArray = [...str];
	let results = {};
	searchParams
		.forEach
			(sp => {
				results[sp]=strAsArray.filter(st => st === sp).length
			})

	return results;
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	return parseFloat(n.toString().split('').reverse().join(""));
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	return arrs.map(arr => arr.reduce(sum)).reduce(sum);

	function sum(accumulator,next){
		return accumulator + next;
	}
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	const last = arr[arr.length-1];
	const first = arr[0];

	arr[0] = last;
	arr[arr.length-1] = first;
	return arr;
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	const objValues = Object.values(haystack);
	const searchTermLowerCased = searchTerm.toLowerCase();
	return objValues.some(v => {
		if(typeof v === 'string'){
			return v.toLowerCase().includes(searchTermLowerCased)
		}
	})
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');

	const map = new Map();
	const strNoSpecialChars = str.replace(/[^a-zA-Z0-9 ]/g, '');
	
	strNoSpecialChars.split(" ").forEach((s) => {
		s = s.toLowerCase();
		if(map.has(s)){
			map.set(s, map.get(s)+1);
		}else{
			map.set(s ,1);
		}
	})

	return Object.fromEntries(map);
};