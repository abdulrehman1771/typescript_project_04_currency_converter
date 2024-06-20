#! /usr/bin/env node

// #Project Statement
// ###The TypeScript console app is used to convert currencies: the users enter a certain amount of money in one currency and set the currency they want to check the monetary value of.
// ###While developing the app, the beginners can master variables, algorithms, loops, if statements, and other TypeScript concepts.


import * as readlinesync from 'readline-sync';

function getUserInputNum(inp:string):number{
    const temp = readlinesync.question(inp);
    return parseFloat(temp);
}

function getUserInputStr(inp:string):string{
    const temp = readlinesync.question(inp);
    return temp;
}


let currency:any = {
    USD: 1, // Base Currency
    GBP: 0.79,
    CAD: 1.35,
    INR: 83.29,
    PKR: 278.25,
    SAR: 3.75,
    QAR: 3.64,
};

let crr = []

// Getting object keys / currencies and putting into crr list
for (const key in currency) {
    crr.push(key)
}

// Getting user input
let from = readlinesync.keyInSelect(crr, "Choose currency you want to change from: "); // This returns the index number of provided list
let to = readlinesync.keyInSelect(crr, "Choose currency you want to change to: "); // This returns the index number of provided list
let amount = getUserInputNum("Enter your amount: ");


//Dynamic Approach Start
let crr_from = crr[from]; // Getting the currency name using user input
let crr_to = crr[to]; // Getting the currency name using user input

//Fetching Exchange rates
let amountFrom = currency[crr_from]; // Getting the exchange rate of user currency from currency object
let amountTo = currency[crr_to]; // Getting the exchange rate of user currency from currency object

// //Debug
// console.log(amountFrom);
// console.log(amountTo);

// Formula to convert base amount / exchange rate and convert to amount
let baseAmount =  amount / amountFrom; // Base amount should always be in USD
let convertedAmount = baseAmount * amountTo

// Final Output
console.log(`\nYour from currency. ${amount} ${crr_from}. \nYour converted amount is ${convertedAmount} ${crr_to}.`);
// Dynamic Approach End