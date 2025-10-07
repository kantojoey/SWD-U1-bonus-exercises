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
		fetch('https://dog.ceo/api/breeds/image/random').then(function (response) {
			response.json().then(function (data) {
				console.log(data);

				result.innerHTML = `<img src="${data.message}" width="300px" />`;
			});
		});
	}

	// RANDOM CAT PIC courtesy of https://thecatapi.com/
	// Use the API documentation to look up the correct endpoint for 5 random photos
	// Bonus: Narrow the breed to Norweigan Forest Cat
	// You will need to request a free key
	// Note: a header will be required!
	// Display all five images in the result section.
	if (event.target.id === 'cat-button') {
		fetch('https://api.thecatapi.com/v1/images/search?limit=5&breed_id=norw', {
			headers: {
				'x-api-key':
					'live_OGxGd4Qnu16oAEBlonS9roxlp8vKLHd0CNZ7KHIE67CqGGGBPJdg8FSbWEgMMoNA',
			},
		}).then(response => {
			response.json().then(data => {
				console.log(data);

				result.innerHTML = ''; // Clear any previous photos
				for (let obj of data) {
					result.innerHTML += `<img src="${obj.url}" width=300px />`;
				}
			});
		});
	}
});
