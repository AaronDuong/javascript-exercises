const people = [
	{
		name: "Carly",
		yearOfBirth: 1066,
	},
	{
		name: "Ray",
		yearOfBirth: 1962,
		yearOfDeath: 2011,
	},
	{
		name: "Jane",
		yearOfBirth: 1912,
		yearOfDeath: 1941,
	},
];

const findTheOldest = function (people) {
	const sorted = people.sort((a, b) => {
		const currentA =
			a.yearOfDeath === undefined ? new Date().getFullYear() : a.yearOfDeath;
		const currentB =
			b.yearOfDeath === undefined ? new Date().getFullYear() : b.yearOfDeath;
		const personA = currentA - a.yearOfBirth;
		const personB = currentB - b.yearOfBirth;
		return personA - personB;
	});
	return sorted.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
