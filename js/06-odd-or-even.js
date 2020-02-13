let type;
for (var i = 0; i <= 15; i++) {
    if ( i % 2 === 0) {
        type = "Even";
    } else {
        type = "Odd";
    }
    window.document.write(i + " is " + type + "<br>");

}