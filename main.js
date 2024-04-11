#! /usr/bin/env node
import * as readlinesync from 'readline-sync';
function getUserInputNum(inp) {
    const temp = readlinesync.question(inp);
    return parseFloat(temp);
}
function getUserInputStr(inp) {
    const temp = readlinesync.question(inp);
    return temp;
}
let currency = {
    USD: 1, // Base Currency
    GBP: 0.79,
    CAD: 1.35,
    INR: 83.29,
    PKR: 278.25,
    SAR: 3.75,
    QAR: 3.64,
};
let crr = [];
for (const key in currency) {
    crr.push(key);
}
let from = readlinesync.keyInSelect(crr, "Choose currency you want to change from: ");
let to = readlinesync.keyInSelect(crr, "Choose currency you want to change to: ");
let amount = getUserInputNum("Enter your amount: ");
let crr_from = crr[from];
let crr_to = crr[to];
let amountFrom = currency[crr_from];
let amountTo = currency[crr_to];
// //Debug
// console.log(amountFrom);
// console.log(amountTo);
// Formula to convert base amount / exchange rate and convert to amount
let baseAmount = amount / amountFrom; // Base amount should always be in USD
let convertedAmount = baseAmount * amountTo;
console.log(`\nYour from currency. ${amount} ${crr_from}. \nYour converted amount is ${convertedAmount} ${crr_to}.`);
