function solve(input) {
    let stack = [];

    for (let item of input) {
        if (typeof item === 'number') {
            stack.push(item);  
        } else if (['+', '-', '*', '/'].includes(item)) {
            if (stack.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            let b = stack.pop();
            let a = stack.pop();

            let result;
            switch (item) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = Math.floor(a / b);  
                    break;
            }
            stack.push(result);
        } else {
            console.log('Error: invalid operator!');
            return;
        }
    }

    if (stack.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(stack.pop());
    }
}

solve([3, 4, '+']);  
solve([5, 3, 4, '*', '-']);  
solve([7, 33, 8, '-']);  
solve([15, '/']); 
