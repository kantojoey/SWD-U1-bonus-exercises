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
		// TODO: Fetch data with traditional fetch syntax & put image on page
        
	}

	// RANDOM CAT PIC courtesy of https://thecatapi.com/
	// You will need to request a free key
	// Use the API documentation to look up the correct endpoint for a random photo
	// Note: a header will be required!
	if (event.target.id === 'cat-button') {
		// TODO: Fetch data and put an image on the page
	}
});
