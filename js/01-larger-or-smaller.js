let x = prompt("Enter a number");
let y = prompt("Enter a second number");

if (x < y && x !== y) {
    window.console.log("The larger number is " + y);
} else if (x > y && x !== y) {
    window.console.log("The larger number is " + x);
} else {
    window.console.log("The numbers are the same");
}
