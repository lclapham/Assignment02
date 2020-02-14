let miles, gallons, mpg, again;

//APPLICATION
//This loops the application and calls the functions.
do {
    getMiles();

    getGallons();

    calcMPG(miles, gallons);

    controlApplication();

} while (again === "y" || again === "Y");

window.document.write("<br> The application has terminated.")



// FUNCTIONS
// This gets the users and loops if they do it wrong
function getMiles() {
    do {
        miles = parseFloat(window.prompt("Please enter the number of miles driven. "));
    } while (miles <= 0 || Number.isInteger(miles) === false);
    return miles;
}

// This gets the users and loops if they do it wrong
function getGallons() {
    do {
        gallons = parseFloat(window.prompt("Please enter the number of gallons used. "));
    } while (miles <= 0 || Number.isInteger(gallons) === false);
    return gallons;
}

// This calculates the MPG and prints to screen
function calcMPG(miles, gallons) {
    mpg = miles / gallons;
    window.document.write("The miles per gallon equals: " + mpg + "<br>");
}

// This gets the users and loops if they do it wrong
function controlApplication() {
    let runAgain;
    do {
        again = window.prompt("Would you like to calculate a new MPG scenario?  (y/n)");
        if (again === "y" || again === "Y" || again === "n" || again === "N") {
            runAgain = false;
        } else {
            runAgain = true;
        }
    } while (runAgain === true);

    return again;
}
