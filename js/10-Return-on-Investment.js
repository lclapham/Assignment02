let futureValue, investment, rate, years, i, check;

// run the application
do {
    getUserInvestment();

    getRate();

    getYears();

    calcFuture();

    showOutput(investment, rate, years, futureValue);

    goAgain();

} while (check === true);



function getUserInvestment() {
    do {
        investment = (window.prompt("Enter Investment Amount as XXXX.XX"));
        if (isNaN(investment)) {
            check = false;
        } else {
            check = true;
            return parseFloat(investment);
        }
    } while (check === false);
}

function getRate() {
    do {
        rate = parseFloat(window.prompt("Enter the intereset rate as XX.X"));
        if (isNaN(rate)) {
            check = false;
        } else if (rate > 10) {
            window.alert("Enter a number below 10 for percentage rate");
            check = false;
        } else {
            check = true;
            return parseFloat(rate);
        }
    } while (check === false);
}

function getYears() {
    do {
        years = (window.prompt("Enter number of years"));
        if (isNaN(rate)) {
            check = false;
        } else if (years > 100) {
            window.alert("Enter a number below 100 for years");
            check = false;
        } else {
            check = true;
            return parseFloat(years);
        }
    } while (check === false);
}

function calcFuture(rate) {
    futureValue = investment;

    for (i = 1; i <= years; i += 1) {
        return parseFloat(futureValue = futureValue + (futureValue * rate / 100));
    }
}

function showOutput(investment, rate, years, futureValue) {
    window.document.write("Investment amount: $" + investment + "<br>");
    window.document.write("Interest Rate" + rate + "<br>");
    window.document.write("Years: $" + years + "<br>");
    window.document.write("Future value: $" + futureValue + "<br>");

}

function goAgain(){
    check = window.prompt("Do you have another value you want to project?  (y/n)");
    if (check === "y"){
        return check === true;
    } else {
        window.document.write("The application has terminated" + "<br")
        return check === false;
    }
}