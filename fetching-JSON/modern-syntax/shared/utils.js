export const getTitleCase = str => {
	return str
		.split(' ')
		.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');
};

export const getRandomElement = arr => {
	let randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
};
