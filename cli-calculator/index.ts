import {question} from 'readline-sync'

function main():void {
    const firstInput: string = question('Enter first number: ')
    const secondInput: string = question('Enter second number: ')
    const operand: string = question('Enter operand: ')

    if (!isOperand(operand))
        throw new Error('Invalid operand')

    if (!isNumber(firstInput) || !isNumber(secondInput))
        throw new Error('Invalid first number')

    const firstNumber: number = Number(firstInput)
    const secondNumber: number = Number(secondInput)

    const result: number = calculate(firstNumber, secondNumber, operand)
    console.log(`Result: ${result}`)

    const shouldContinue: string = question('Do you want to continue? (Y/N): ')
    if (shouldContinue.toLowerCase() === 'y')
        main()
}

const isOperand = (operand: string): boolean => {
    switch(operand) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true
        default:
            return false
    }
}

const isNumber = (input: string): boolean => {
    return !isNaN(Number(input))
}

const calculate = (firstNumber: number, secondNumber: number, operand: string): number => {
    return eval(`${firstNumber} ${operand} ${secondNumber}`)
}

main()