/* Put shared HTML on all pages */

// Parse window.location.href to get name of page based on html file name
const url = new URL(window.location.href);
const pathNameArray = url.pathname.split('/');
const fileName = pathNameArray[pathNameArray.length - 1];
const pageName = fileName.slice(0, fileName.indexOf('.'));

// TODO: Set title, nav paths, and home path depending on whether page name is 'index', 


// TODO: Get current year


// TODO: Establish JS objects for specific elements where dynamic content is needed


// TODO: Add title text for browser tab


// TODO: Add Google fonts to head


// TODO: Add org name and nav menu to header


// TODO: Add fine print to footer


/*
    Fetch photos URLs from a public API using modern syntax (linked below)
*/

// TODO: Create object for span where image will be placed


// TODO: Create an array to hold fetched URLs


// TODO: Call the async function defined below to execute the fetch code


// RANDOM CAT PICS courtesy of https://thecatapi.com/
async function getCatPics() {

    // TODO: Fetch 20 random photos using modern async/await syntax


    // TODO: Check data in console


	// TODO: Add all urls to photoUrls array (see logged data for structure)


	// TODO: Put images on page after async fetch is complete

}

// TODO: Write helper function to display one or more photos

