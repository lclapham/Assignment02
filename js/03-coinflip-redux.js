function screenPrint (coinFilp){
    if(coinFlip === 1){
        shownValue = 'Tails';
    } else {
        shownValue = 'heads';
    }
    window.console.log(shownValue);
}

function flipCoin () {
    let coinFilp;
    let i = 0;
    do {
        coinFlip = Math.round(Math.random());
        screenPrint();
        i++;
    } while (i < 10);
}

// RUN IT 
flipCoin();



// for (x = 0; x <= 9; x++) {
//     coinFlip = Math.round(Math.random());
//     window.console.log(coinFlip);
//     if(coinFlip === 1){
//         heads++;
//     } else {
//         tails++;
//     }
// }

// if (coinFlip === 0) {
//     window.console.log("The coin flip was Heads");
// } else {
//     window.console.log("The coin flip was Tails");
// }

// window.console.log("Landed on heads " + heads + " times and landed on tails " + tails + " times");



// let choice = prompt("Select Heads or Tails");

// if (coinFlip === 0 && choice === 'Heads' || choice === 'heads') {
//     window.console.log("The flip was heads and you chose heads...you win!")

// } else if (coinFlip === 1 && choice === 'tails' || choice === 'Tails') {
//     window.console.log("TThe flip was tails and you chose tails...you win!")

// } else if (coinFlip === 0 && choice === 'tails' || choice === 'Tails') {
//     window.console.log("The flip was heads but you chose tails...you lose!")

// } else {
//     window.console.log("The flip was tails but you chose heads...you lose!")
// }