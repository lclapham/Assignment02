function screenPrint(numHeads) {
    window.console.log("The Flip was Heads the streak is : " + numHeads);
}

function flipCoin() {
    let coinFilp;
    let i = 0;
    let numHeads = 0;
    do {
        coinFlip = Math.round(Math.random());
        window.console.log("the coinflips was : " +coinFlip);
        if (coinFlip === 0) {
            window.console.log("in if");
            numHeads = numHeads + 1;
            window.console.log (" ther are x many heads: ", numHeads);
            screenPrint(numHeads);
        } else {
            i = 1;
        }
    } while (i === 0);
}


// RUN IT 
flipCoin();