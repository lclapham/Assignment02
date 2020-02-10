function screenPrint(numHeads) {
    if (numHeads === 0) {
        window.console.log("The first flip was tails, you lose!")
    } else
        window.console.log("The Flip was Heads the streak is : " + numHeads);
}

function flipCoin() {
    let coinFilp;
    let i = 0;
    let numHeads = 0;
    do {
        coinFlip = Math.round(Math.random());
        if (coinFlip === 1 && i === 0) {
            i++;
        } else if (coinFlip === 0) {
            numHeads = numHeads + 1;
        } else {
            i++;
        }
    } while (i === 0);
    
    screenPrint(numHeads);
}

flipCoin(); 