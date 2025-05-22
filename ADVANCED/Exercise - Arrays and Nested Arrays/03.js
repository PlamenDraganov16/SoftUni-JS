function solve(commands) {

    let result = [];
    let number = 1;

    for (let command of commands) {
        if (command === 'add') {
            result.push(number);
        } else if (command === 'remove') {
            result.pop();
        }
        number++;
    }

    if (result.length === 0) {
        console.log("Empty");
    } else {
        console.log(result.join('\n'));
    }

}

solve(['add', 'add', 'add', 'add'])