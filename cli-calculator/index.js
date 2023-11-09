"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstInput = (0, readline_sync_1.question)('Enter first number: ');
    var secondInput = (0, readline_sync_1.question)('Enter second number: ');
    var operand = (0, readline_sync_1.question)('Enter operand: ');
    if (!isOperand(operand))
        throw new Error('Invalid operand');
    if (!isNumber(firstInput) || !isNumber(secondInput))
        throw new Error('Invalid first number');
    var firstNumber = Number(firstInput);
    var secondNumber = Number(secondInput);
    var result = calculate(firstNumber, secondNumber, operand);
    console.log("Result: ".concat(result));
    var shouldContinue = (0, readline_sync_1.question)('Do you want to continue? (Y/N): ');
    if (shouldContinue.toLowerCase() === 'y')
        main();
}
var isOperand = function (operand) {
    switch (operand) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
};
var isNumber = function (input) {
    return !isNaN(Number(input));
};
var calculate = function (firstNumber, secondNumber, operand) {
    return eval("".concat(firstNumber, " ").concat(operand, " ").concat(secondNumber));
};
main();
