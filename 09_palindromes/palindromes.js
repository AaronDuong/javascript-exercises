// const palindromes = function (str) {
// 	let testStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
// 	let length = testStr.length;
// 	let index = length / 2;

// 	let firstHalf = testStr.slice(0, index).split("").reverse().join("");
// 	let secondHalf =
// 		length % 2 !== 0 ? testStr.slice(index + 1) : testStr.slice(index);

// 	return firstHalf === secondHalf;
// };

const palindromes = function (str) {
	let testStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
	let reversedStr = testStr.split("").reverse().join("");
	return testStr === reversedStr;
};

// palindromes("racecar");

// Do not edit below this line
module.exports = palindromes;
