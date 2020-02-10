function flipCoin() {
    let coinFilp;
    let i = 0;
    do {
        coinFlip = Math.round(Math.random());
        screenPrint(coinFilp);
        i++;
    } while (i < 10);
}

// Display the results of the coin flip
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

var handlers = {
    buttonFlip: function () {
        flipCoin();
    }
}



// function displayCoin(shownValue) {
//     var x = document.createElement("IMG");
//     x.setAttribute("src", "images/"+shownValue+".png");
//     x.setAttribute("width", "304");
//     x.setAttribute("height", "228");
//     x.setAttribute("alt", "coin");
//     document.body.parentElement(x);

//     appendChild(x);

//   }
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