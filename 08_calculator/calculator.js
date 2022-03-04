const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (arr) {
	return arr.reduce((total, items) => {
		return total + items;
	}, 0);
};

const multiply = function (arr) {
	return arr.reduce((product, items) => {
		return product * items;
	}, 1);
};

const power = function (num1, num2) {
	let product = 1;
	for (let i = 1; i <= num2; i++) {
		product *= num1;
	}
	return product;
};

const factorial = function (num) {
	if (num === 0) {
		return 1;
	}
	return factorial(num - 1) * num;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
