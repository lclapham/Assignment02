function draw(x, sym){
    let numSign = " ";
    for (var i = 0; i < x; i++) {
        numSign += sym;
        window.document.write(numSign + "<br>");
    }

}
// Gather some user input
sym = window.prompt("Please enter a character");
x = window.prompt("Please enter the number of times to draw you symbol")

// Run the function
draw(x, sym);
