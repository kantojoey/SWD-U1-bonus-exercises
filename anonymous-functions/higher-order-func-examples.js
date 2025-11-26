/** ANONYMOUS FUNCTIONS */

// Here's a standard utility function
function getRandomNumber(max, min = 0) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// TODO: Rewrite the function above as an anonymous function stored in constant

const getRandomNumberTwo = (max, min) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};


// TODO: Use simplified syntax to streamline the anonymous function to a single line of code
const getRandomNumberThree = (max, min) => (Math.floor(Math.random() * (max - min + 1)) + min);

// TODO: Test each of the three functions by printing their return values to the console
// console.log(getRandomNumber(5, 1));
// console.log(getRandomNumberTwo(5,1));
// console.log(getRandomNumberThree(5,1));

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
};

// TODO: Rewrite the function above as an arrow function,
// stored in a constant, getFormattedAddress
// Make it multi-line with curly braces and the return keyword
const getFormattedAddress = (address) => {
	return `
${address.street}
${address.city}, ${address.state} ${address.zip} 
    `;
};

// TODO: Write it again, this time streamlined on one line
const oneLineAddress = address => `${address.street}\n${address.city}, ${address.state} ${address.zip}`;

// TODO: Use the test data someAddress above to run all three functions
// console.log(formatAddress(someAddress));
// console.log(getFormattedAddress(someAddress));
// console.log(oneLineAddress(someAddress));



// HIGHER-ORDER FUNCTIONS

let numbers = [2, 4, 6, 7, 8, 11, 16, 17, 20];

// TODO: .map() takes an array and returns a different array with new elements
// The function you pass in will be executed for each element
// The original array is not mutated!
// console.log(numbers.map((num)=>num**2));



// TODO: .forEach() works like a for loop — nothing is returned
// but you can do anything you want for each element one at a time
// Does not mutate original array
// let nums = numbers.forEach((num) =>console.log(`${num}: ${num**2}`));


// TODO: .filter() returns a new array with only the elements you want
// You give it a boolean condition to apply to each element
// Does not mutate original array
// console.log(numbers.filter((num) => num >= 20));


// TODO: .reduce() returns a single value and is best for 
// use cases such as adding up numbers or building a string
// console.log(numbers.reduce((sum, num)=>sum+num, 0))


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
// Approach 1
// console.log(
// 	fruits.map(fruit=>({...fruit, price:0}))
// );
// Approach 2
// For each can mutate objects because they are referenced while primitive values are just edited on a copied version
// fruits.forEach((fruit)=> {fruit.price=0})
// console.log(fruits);


// TODO: Use .map to make a copy of the array above and its contents
// Print the original array and the new array
// Do an identity check on the arrays Do an identity check on the same object from each array




// What happens if you don't use the spread operator to return a new object?
