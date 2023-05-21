export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	return nums.map(n => Math.pow(n,2));
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	return words.map(camelCaseMapper).join("");


	function camelCaseMapper(word, index){
		if(index === 0){
			return word.toLowerCase();
		}
		return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
	}
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	return people.reduce((a, p) => a + p.subjects.length, 0);
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	return menu.flatMap(m => m.ingredients).includes(ingredient)
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');

	const uniqueArr1 = [...new Set(arr1)]
	const uniqueArr2 = [...new Set(arr2)]
	const arrayOfTwo = [uniqueArr1, uniqueArr2]
	
	return checkDuplicates(arrayOfTwo[0], arrayOfTwo[1]).sort();

	
	function checkDuplicates(arr1, arr2){
		let results = arr1.filter(arr1Item => arr2.includes(arr1Item))
		return results;
	}
}


