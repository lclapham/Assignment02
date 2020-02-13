// This performs the random coin flip 10 times
function flipCoin() {
    let coinFilp;
    let i = 0;
    do {
        coinFlip = Math.round(Math.random());
        screenPrint(coinFilp);
        i++;
    } while (i < 10);
}

// Display the results of the coin flip in the console
function screenPrint(coinFilp) {
    let shownValue;
    if (coinFlip === 1) {
        shownValue = 'Tails';
        displayCoin(shownValue);
    } else {
        shownValue = 'Heads';
        displayCoin(shownValue);
    }
    window.console.log(shownValue);
}

// Display the results of the coin flip with the image
function displayCoin(shownValue) {
    document.getElementById("heads").style.visibility = "hidden";
    document.getElementById("tails").style.visibility = "hidden";
    window.console.log(shownValue);
    if (shownValue === 'Heads') {
        document.getElementById("heads").style.visibility = "visible";
    } else {
        document.getElementById("tails").style.visibility = "visible";
    }
}

// Button to do coinflip
var handlers = {
    buttonFlip: function () {
        flipCoin();
    }
}
