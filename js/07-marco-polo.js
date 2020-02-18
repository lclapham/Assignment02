// This is a simple Marco Polo application that prints results to console log
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        window.console.log("MARCO POLO");
    } else if (i % 3 === 0) {
        window.console.log("Marco");
    } else if ( i % 5 === 0) {
        window.console.log("Polo");    
    } else {
        window.console.log(i);
    }
}

