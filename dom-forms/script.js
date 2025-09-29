// Elements in card preview to add/change content/styling
const cardBkg = document.getElementById('card-bkg');
const cardText = document.getElementById('card-text');
const name = document.getElementById('name');
const address1 = document.getElementById('address1');
const address2 = document.getElementById('address2');
const phoneEmail = document.getElementById('phone-email');

// Object for form
const form = document.querySelector('form');

// Objects for input elements
const styleInput = document.getElementById('style-input');
const nameInput = document.getElementById('name-input');
const address1Input = document.getElementById('address1-input');
const address2Input = document.getElementById('address2-input');
const omitAddress2 = document.getElementById('omit-address2');
const phoneInput = document.getElementById('phone-input');
const emailInput = document.getElementById('email-input');

// Object for reset button
const resetButton = document.querySelector('#reset-button');

// Listener to update style of card preview
styleInput.addEventListener('change', () => {
	if (styleInput.value === 'elegant') {
		cardBkg.style.backgroundImage = 'url(images/elegant-bkg.png)';
		cardBkg.style.justifyContent = 'center';
		cardText.style.alignItems = 'center';
		cardText.style.color = '#1a4362';
		name.style.fontFamily = `'Cormorant SC', serif`;
		name.style.fontSize = '20px';
	} else if (styleInput.value === 'floral') {
		cardBkg.style.backgroundImage = 'url(images/floral-bkg.png)';
		cardBkg.style.justifyContent = 'flex-end';
		cardText.style.alignItems = 'flex-end';
		cardText.style.color = 'firebrick';
		name.style.fontFamily = `'Lily Script One', cursive`;
		name.style.fontSize = '20px';
	} else if (styleInput.value === 'geometric') {
		cardBkg.style.backgroundImage = 'url(images/geometric-bkg.png)';
		cardBkg.style.justifyContent = 'flex-end';
		cardText.style.alignItems = 'flex-end';
		cardText.style.color = '#333';
		name.style.fontFamily = `'Michroma', sans-serif`;
		name.style.fontSize = '14px';
	} else if (styleInput.value === 'luxe') {
		cardBkg.style.backgroundImage = 'url(images/luxe-bkg.png)';
		cardBkg.style.justifyContent = 'center';
		cardText.style.alignItems = 'flex-start';
		cardText.style.color = 'darkgoldenrod';
		name.style.fontFamily = `'Marcellus SC', serif`;
		name.style.fontSize = '20px';
	} else if (styleInput.value === 'classic') {
		cardBkg.style.backgroundImage = 'url(images/classic-bkg.png)';
		cardBkg.style.justifyContent = 'center';
		cardText.style.alignItems = 'center';
		cardText.style.color = '#666';
		name.style.fontFamily = `'Cormorant SC', serif`;
		name.style.fontSize = '20px';
	} else if (styleInput.value === '') {
		cardBkg.style.backgroundImage = 'none';
		cardBkg.style.justifyContent = 'center';
		cardText.style.alignItems = 'center';
		cardText.style.color = 'inherit';
		name.style.fontFamily = 'inherit';
		name.style.fontSize = '20px';
	}
});

// Update content of card preview with user input
nameInput.addEventListener('input', () => {
	name.innerHTML = nameInput.value || 'Your Name';
});
address1Input.addEventListener('input', () => {
	address1.innerHTML = address1Input.value || 'Your Address Line 1';
});
address2Input.addEventListener('input', () => {
	address2.innerHTML = address2Input.value || 'Your Address Line 2';
});
omitAddress2.addEventListener('input', () => {
	if (omitAddress2.checked) {
		address2.style.display = 'none';
	} else {
		address2.style.display = 'block';
	}
});

// Update phone and email on same line
function updatePhoneAndEmail() {
	phoneEmail.innerHTML = `${phoneInput.value || 'Your Phone'} | ${
		emailInput.value || 'Your Email'
	}`;
}
phoneInput.addEventListener('input', updatePhoneAndEmail);
emailInput.addEventListener('input', updatePhoneAndEmail);

// Reset form & card preview
resetButton.addEventListener('click', function (event) {
	// Confirm before resetting
	let shouldReset = confirm('\nAre you sure you want to start over?\n');
	if (!shouldReset) {
		event.preventDefault();
		return; // exit function early
	}
	// Reset content on card preview
	name.innerHTML = 'Your Name';
	address1.innerHTML = 'Your Address Line 1';
	address2.innerHTML = 'Your Address Line 2';
	phoneEmail.innerHTML = 'Your Phone | Your Email';

	// Reset styling on card preview
	cardBkg.style.backgroundImage = 'none';
	cardBkg.style.justifyContent = 'center';
	cardText.style.alignItems = 'center';
	cardText.style.color = 'inherit';
	name.style.fontFamily = 'inherit';
	name.style.fontSize = '20px';
	address2.style.display = 'block';
});

// This will run only after the user passes built-in validation
form.addEventListener('submit', function (event) {
	// You could add custom validation here along with
	// event.preventDefault() if they don't pass
	// We aren't really saving anything to a database in this example,
	// but this is where we would do it
	console.log('Form successfully submitted.');
});
