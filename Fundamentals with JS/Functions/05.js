function solve(num1, num2, operator)
{
    if (operator === "multiply") {
        console.log(num1 * num2);
    } else if (operator === "divide") {
        console.log(num1 / num2)
    } else if (operator === "add") {
        console.log(num1 + num2)
    } else if (operator === "subtract") {
        console.log(num1 - num2)
    } else {
        return "Invalid operator";
    }
}

solve(5, 5, "multiply");

function solveTwo(numOne, numTwo, operator)
{
    const operations = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
    };

    console.log(operations[operator] ? operations[operator](numOne, numTwo) : "Invalid operator")
}

solveTwo(5, 5, "multiply");