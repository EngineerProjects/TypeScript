"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.modulo = modulo;
exports.power = power;
exports.evaluate = evaluate;
const readline = __importStar(require("readline"));
// function to make an addition of infinite number of arguments
function add(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
// function to make a subtraction of infinite number of arguments
function subtract(...args) {
    return args.reduce((acc, val) => acc - val, 0);
}
// function to make a multiplication of infinite number of arguments
function multiply(...args) {
    return args.reduce((acc, val) => acc * val, 1);
}
// function to make a division of infinite number of arguments
function divide(...args) {
    return args.reduce((acc, val) => {
        if (val === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return acc / val;
    }, args.shift());
}
// function to make a modulo of infinite number of arguments
function modulo(...args) {
    return args.reduce((acc, val) => acc % val, 1);
}
// function to make a power of infinite number of arguments
function power(...args) {
    return args.reduce((acc, val) => Math.pow(acc, val), 1);
}
// function to evaluate a string expression
function evaluate(expression) {
    const operators = ['+', '-', '*', '/', '%', '^'];
    const priority = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '%': 2,
        '^': 3
    };
    const outputQueue = [];
    const operatorStack = [];
    const tokens = expression.split(/([+\-*/%^()])/).map(token => token.trim()).filter(token => token.length > 0);
    tokens.forEach(token => {
        if (!isNaN(parseFloat(token))) {
            outputQueue.push(token);
        }
        else if (operators.includes(token)) {
            while (operatorStack.length > 0 && operators.includes(operatorStack[operatorStack.length - 1]) &&
                ((priority[token] <= priority[operatorStack[operatorStack.length - 1]] && token !== '^') ||
                    (priority[token] < priority[operatorStack[operatorStack.length - 1]] && token === '^'))) {
                outputQueue.push(operatorStack.pop());
            }
            operatorStack.push(token);
        }
        else if (token === '(') {
            operatorStack.push(token);
        }
        else if (token === ')') {
            while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
                outputQueue.push(operatorStack.pop());
            }
            operatorStack.pop(); // Remove the '(' from the stack
        }
    });
    while (operatorStack.length > 0) {
        outputQueue.push(operatorStack.pop());
    }
    const stack = [];
    outputQueue.forEach(token => {
        if (!isNaN(parseFloat(token))) {
            stack.push(parseFloat(token));
        }
        else {
            const b = stack.pop();
            const a = stack.pop();
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
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(`Error: ${error.message}`);
            }
            else {
                console.error('An unknown error occurred');
            }
        }
        rl.close();
    });
}
// Run the function
main();
