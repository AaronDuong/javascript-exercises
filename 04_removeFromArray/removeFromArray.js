// const removeFromArray = function (arr) {
// 	const [, ...targetItems] = arguments;
// 	let newArr = [...arr];

// 	for (let target of targetItems) {
// 		newArr = newArr.filter((item) => item !== target);
// 	}
// 	return newArr;
// };

const removeFromArray = function (...args) {
	const array = args[0];
	// console.log(array);
	// console.log(args);
	return array.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
