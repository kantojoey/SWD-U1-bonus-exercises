/** IMPORT/EXPORT **/

// Modern syntax for exporting modules is as follows:
// instead of module.exports, just use the export keyword
// (or export default if there is only one thing instead of an object).
// With multiple exports you can put them in front of the variable name
// unless they are functions stored in a constant.

// Modern syntax for importing modules is as follows:
// instead of
// const varName = require('moduleName.js')
// we use
// import varName from 'moduleName.js';
// You can also use destructuring when it is an object with multiple exports
// import { thing1, thing2 } from 'moduleName.js';

// EXAMPLE: Go to 01-arrowFunctions.js and export reverseString() as the default export
// Import it here:
import reverseString from './01-arrowFunctions.js';

// Use it here with the test string and print the result:
let testString = 'This is not a palindrome.';
let reversed = reverseString(testString);
console.log(reversed);

// EXAMPLE: Go to 02-higherOrderFunctions.js and export both numberArray and fruits
// Import them here using destructuring:
import { numberArray, fruits } from './02-higherOrderFunctions.js';

// Print both data structures
console.log(numberArray);
console.log(fruits);

// YOUR TURN! Practice below.

// TODO: Go to 04-logicalOrAndTernary.js and export the avengers object as the default export
// Import it here:
import avengers from './04-logicalORandTernary.js';

// Print it here:
console.log(avengers);

// TODO: Go to 05-destructuring.js and export phoneNumberParts, userInfo,
// and any other data structures you created
// Import them here using destructuring:
import {
	phoneNumberParts,
	userInfo,
	faveFruits,
	dinner,
} from './05-destructuring.js';

// Print all data structures
console.log(phoneNumberParts);
console.log(userInfo);
console.log(faveFruits);
console.log(dinner);
