// Get user input
let x = prompt("Enter a number");
let y = prompt("Enter a second number");

// Compare user input and see which number was larger.
if (x < y && x !== y) {
    window.console.log("The larger number is " + y);
} else if (x > y && x !== y) {
    window.console.log("The larger number is " + x);
} else {
    window.console.log("The numbers are the same");
}
