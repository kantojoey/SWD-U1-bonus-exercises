/** ANONYMOUS FUNCTIONS */

// Here's a standard utility function
function getRandomNumber(max, min = 0) {
	return Math.round(Math.random() * (max - min));
}

// TODO: Rewrite the function above as an anonymous function stored in constant
const randomNumber = function(max, min = 0){
	return Math.round(Math.random()* (max - min));
};

// TODO: Use simplified syntax to streamline the anonymous function to a single line of code
const randomizedNumber = (max, min = 0) => Math.round(Math.random() * (max-min));

// TODO: Test each of the three functions by printing their return values to the console
// console.log(getRandomNumber(4));
// console.log(randomNumber(4));
// console.log(randomizedNumber(4));


// Some test data
let someAddress = {
	street: '123 Main Street',
	city: 'St. Louis',
	state: 'MO',
	zip: '63101',
};

// Traditional function syntax
function formatAddress(address) {
	return `
${address.street}
${address.city}, ${address.state} ${address.zip} 
    `;
}

// TODO: Rewrite the function above as an arrow function,
// stored in a constant, getFormattedAddress
// Make it multi-line with curly braces and the return keyword
const getFormattedAddress = function(address){
	return `
${address.street}
${address.city}, ${address.state} ${address.zip}
	`
};


// TODO: Write it again, this time streamlined on one line
const oneLineAddress = (address) => `${address.street} \n${address.city}, ${address.state} ${address.zip}`;


// TODO: Use the test data someAddress above to run all three functions
// console.log(formatAddress(someAddress));
// console.log(getFormattedAddress(someAddress));
// console.log(oneLineAddress(someAddress));



// HIGHER-ORDER FUNCTIONS

let numbers = [2, 4, 6, 7, 8, 11, 16, 17, 20];

// TODO: .map() takes an array and returns a different array with new elements
// The function you pass in will be executed for each element
// The original array is not mutated!
// console.log(numbers.map(num => num*3));
// console.log(numbers.map(function(num){
// 	return num*10;
// }));



// TODO: .forEach() works like a for loop — nothing is returned
// but you can do anything you want for each element one at a time
// Does not mutate original array
function mutateArray(arr, operation){
	let result = [];
	for (let item of arr){
		result.push(operation(item));
	}
	return result;
}
// let squared = mutateArray(numbers, num => num*num);
// console.log(squared);

// TODO: .filter() returns a new array with only the elements you want
// You give it a boolean condition to apply to each element
// Does not mutate original array
let evens = numbers.filter(num => num%2 === 0);

let odds = numbers.filter(function(num){
	return num % 2 !== 0;
})
// console.log(evens);
// console.log(odds);

// TODO: .reduce() returns a single value and is best for 
// use cases such as adding up numbers or building a string
let summation = numbers.reduce((total, num) => total + num, 0);
// The general format for .reduce() requires (AccumulatorValue, CurrentValue) => (operation), InitialValue;

let chars = "Labubu".split('');
let word = chars.reduce((string, char) => string + char, '');

// console.log(summation);
// console.log(word);


/* WORKING WITH ARRAYS OF OBJECTS */

let fruits = [
	{
		type: 'apple',
		variety: 'Gala',
		color: 'red',
	},
	{
		type: 'apple',
		variety: 'Granny Smith',
		color: 'green',
	},
	{
		type: 'orange',
		variety: 'Navel',
		color: 'orange',
	},
	{
		type: 'kiwi',
		variety: null,
		color: 'brown and green',
	},
];

// TODO: Use a higher-order array method to add a quantity 
// property to each object in the array above
// Print the array to see the results afterward

fruits.map(fruit => fruit.quantity = null);
// console.log(fruits);
// Important to note .map() won't mutate your array but rather create a new array. However, it does work
// with mutating objects so in this case, it is fine to use. Otherwise, use .forEach()


// TODO: Use .map to make a copy of the array above and its contents
// Print the original array and the new array
// Do an identity check on the arrays Do an identity check on the same object from each array
// let fruitsCopy = [...fruits];
// console.log("This is the original array:");
// console.log(`\n`, fruits);
// console.log("This is the copied array:");
// console.log("\n", fruitsCopy);

// console.log("Are the arrays equal?:", (fruits === fruitsCopy));
// console.log("Are the objects equal?:", fruits[1] === fruitsCopy[1]);


// What happens if you don't use the spread operator to return a new object?
let fruitsCopies = fruits;
// console.log(fruitsCopies);
// console.log(fruitsCopies === fruits);

// If you modify one, you modify both
fruits[0].type = "banana";
// console.log(fruitsCopies);
