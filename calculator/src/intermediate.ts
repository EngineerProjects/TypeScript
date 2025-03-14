import * as readline from 'readline';

// function to make an addition of infinite number of arguments
export function add(...args: number[]): number {
    return args.reduce((acc, val) => acc + val, 0);
}

// function to make a subtraction of infinite number of arguments
export function subtract(...args: number[]): number {
    return args.reduce((acc, val) => acc - val, 0);
}

// function to make a multiplication of infinite number of arguments
export function multiply(...args: number[]): number {
    return args.reduce((acc, val) => acc * val, 1);
}

// function to make a division of infinite number of arguments
export function divide(...args: number[]): number {
    return args.reduce((acc, val) => {
        if (val === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return acc / val;
    }, args.shift()!);
}

// function to make a modulo of infinite number of arguments
export function modulo(...args: number[]): number {
    return args.reduce((acc, val) => acc % val, 1);
}

// function to make a power of infinite number of arguments
export function power(...args: number[]): number {
    return args.reduce((acc, val) => Math.pow(acc, val), 1);
}

// function to evaluate a string expression
export function evaluate(expression: string): number {
    const operators: string[] = ['+', '-', '*', '/', '%', '^'];
    const priority: { [key: string]: number } = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '%': 2,
        '^': 3
    };

    const outputQueue: string[] = [];
    const operatorStack: string[] = [];

    const tokens: string[] = expression.split(/([+\-*/%^()])/).map(token => token.trim()).filter(token => token.length > 0);

    tokens.forEach(token => {
        if (!isNaN(parseFloat(token))) {
            outputQueue.push(token);
        } else if (operators.includes(token)) {
            while (operatorStack.length > 0 && operators.includes(operatorStack[operatorStack.length - 1]) &&
                ((priority[token] <= priority[operatorStack[operatorStack.length - 1]] && token !== '^') ||
                (priority[token] < priority[operatorStack[operatorStack.length - 1]] && token === '^'))) {
                outputQueue.push(operatorStack.pop()!);
            }
            operatorStack.push(token);
        } else if (token === '(') {
            operatorStack.push(token);
        } else if (token === ')') {
            while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
                outputQueue.push(operatorStack.pop()!);
            }
            operatorStack.pop(); // Remove the '(' from the stack
        }
    });

    while (operatorStack.length > 0) {
        outputQueue.push(operatorStack.pop()!);
    }

    const stack: number[] = [];

    outputQueue.forEach(token => {
        if (!isNaN(parseFloat(token))) {
            stack.push(parseFloat(token));
        } else {
            const b = stack.pop()!;
            const a = stack.pop()!;
            switch (token) {
                case '+':
                    stack.push(add(a, b));
                    break;
                case '-':
                    stack.push(subtract(a, b));
                    break;
                case '*':
                    stack.push(multiply(a, b));
                    break;
                case '/':
                    stack.push(divide(a, b));
                    break;
                case '%':
                    stack.push(modulo(a, b));
                    break;
                case '^':
                    stack.push(power(a, b));
                    break;
            }
        }
    });

    return stack[0];
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter an expression: ', (expression) => {
        try {
            const result = evaluate(expression);
            console.log(`Result: ${result}`);
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Error: ${error.message}`);
            } else {
                console.error('An unknown error occurred');
            }
        }
        rl.close();
    });
}

// Run the function
main();