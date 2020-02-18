// This application prints the odd and even numbers with the text (Odd or Even) to the window.
let type;
for (var i = 0; i <= 15; i++) {
    if ( i % 2 === 0) {
        type = "Even";
    } else {
        type = "Odd";
    }
    window.document.write(i + " is " + type + "<br>");

}