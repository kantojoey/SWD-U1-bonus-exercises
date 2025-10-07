/*** Pet Pics ***/

/*
    Some practice on using fetch - utilizing two different public APIs (linked below)
*/

const result = document.getElementById('result');

// Event delegation - listen for click on entire document, then check id of target
document.addEventListener('click', function (event) {

	// RANDOM DOG PIC courtesy of https://dog.ceo/dog-api/
	// Use the API documentation to look up the correct endpoint for a random photo
	if (event.target.id === 'dog-button') {
		// TODO: Fetch data with modern fetch syntax & put image on page
        
	}

	// RANDOM CAT PIC courtesy of https://thecatapi.com/
	// Use the API documentation to look up the correct endpoint for 5 random photos
	// Bonus: Narrow the breed to Norweigan Forest Cat
	// You will need to request a free key
	// Note: a header will be required!
	// Display all five images in the result section.
	if (event.target.id === 'cat-button') {
		// TODO: Fetch data with modern syntax and put images on the page
	}
    
});
