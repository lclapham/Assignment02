let coinflip = Math.round(Math.random());
window.console.log(coinflip);
let choice = prompt("Select Heads or Tails");

if (coinflip === 1 && choice === 'Heads'|| choice === 'heads') {
    window.console.log("TThe flip was heads and you chose heads...you win!")
} else if (coinflip === 0 && choice === 'tails' || choice === 'Tails') {
    window.console.log("TThe flip was tails and you chose tails...you win!")

} else if (coinflip === 1 && choice === 'tails' || choice === 'Tails') {
    window.console.log("The flip was heads but you chose tails...you lose!")
} else {
    window.console.log("The flip was tails but you chose heads...you lose!")
}


