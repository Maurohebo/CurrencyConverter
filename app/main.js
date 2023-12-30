const input = require('sync-input');

const currency = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

console.log("Welcome to Currency Converter!\n" +
    "1 USD equals 1 USD\n" +
    "1 USD equals 113.5 JPY\n" +
    "1 USD equals 0.89 EUR\n" +
    "1 USD equals 74.36 RUB\n" +
    "1 USD equals 0.75 GBP\n" +
    "What do you want to do?\n" +
    "1-Convert currencies 2-Exit program");

let askUser;
let from;
let to;
let amount = 0;

let conversion = (amount, from, to, currency) => console.log(`Result: ${amount} ${from} equals ${((amount / currency[from] )* currency[to]).toFixed(4)} ${to}`);

while(askUser !== 1) {
    askUser = Number(input(""));
    if (askUser === 1) {
        while (!(from in currency)) {
            from = input("What do you want to convert?\n" +
                "From: ").toUpperCase();
            if (from in currency) {
                while (!(to in currency)) {
                    to = input("To: ").toUpperCase();
                    if (to in currency) {
                        while (amount === 0) {
                            amount = Number(input("Amount: "));
                            if (amount < 1) {
                                amount = 0;
                                console.log("The amount cannot be less than 1");
                            } else if (isNaN(amount)) {
                                amount = 0;
                                console.log("The amount has to be a number");
                            } else {
                                conversion(amount, from, to, currency);
                            }
                        }
                    } else {
                        console.log(`Unknown currency`);
                    }
                }
            } else {
                console.log(`Unknown currency`);
            }
        }
    } else if (askUser === 2) {
        console.log("Have a nice day!")
        break;
    } else {
        console.log("Unknown input");
    }
}