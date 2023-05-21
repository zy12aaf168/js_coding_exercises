// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (typeof word !== 'string' || word.length === 0) throw new Error('word is required');

	const upperCasedFirstLetter = word.charAt(0).toUpperCase();

	return upperCasedFirstLetter.concat(word.slice(1));
	// Add your code here!
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined || firstName.length === 0) throw new Error('firstName is required');
	if (lastName === undefined || firstName.length === 0) throw new Error('lastName is required');
	return `${firstName.charAt(0)}.${lastName.charAt(0)}`;
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');

	const vatAmountToAdd = originalPrice * (vatRate / 100) ;
	return parseFloat((originalPrice + vatAmountToAdd).toFixed(2));
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	return parseFloat((originalPrice * ((100 - reduction) / 100)).toFixed(2));
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	let midRightIndex = (Math.round(str.length / 2));
	let middleRightCharacter = str.charAt(midRightIndex);
	let middleCharacter = str.charAt(midRightIndex - 1);

	if(str.length % 2 == 0){
		return `${middleCharacter}${middleRightCharacter}`
	}
	return middleCharacter
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	return word.split("").reverse().join("");

}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	return words.map(reverseWord);
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	return users.filter(u => u.type === "Linux").length;
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	const sum = scores.reduce((a, b) => a + b);

	return parseFloat((sum / scores.length).toFixed(2));
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	else if(n % 3 === 0 && n % 5 === 0){
		return "fizzbuzz";
	}else if(n % 3 === 0){
		return "fizz";
	}else if(n % 5 === 0){
		return "buzz";
	}
	return n;
}
