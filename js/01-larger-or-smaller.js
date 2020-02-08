Create an application that accepts two integers within two separate prompts.Then, display only the larger of the two within the browser window.Don’t forget to handle the fact that the two could be equal.

let x = prompt("Enter a number");
let y = prompt("Enter a second number");

if (x < y && x !== y) {
    window.console.log("The larger number is " + y);
} else if (x > y && x !== y) {
    window.console.log("The larger number is " + x);
} else {
    window.console.log("The numbers are the same");
}
