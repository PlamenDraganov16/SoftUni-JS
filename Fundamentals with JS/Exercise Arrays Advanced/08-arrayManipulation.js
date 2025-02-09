function arrayManipulator(numbers, commands) {
    for (let command of commands) {
        let tokens = command.split(" ");
        let action = tokens[0];
        let element, index;

        switch (action) {
            case "add":
                index = Number(tokens[1]);
                element = Number(tokens[2]);
                numbers.splice(index, 0, element);
                break;

            case "addMany":
                index = Number(tokens[1]);
                let elementsToAdd = tokens.slice(2).map(Number);
                numbers.splice(index, 0, ...elementsToAdd);
                break;

            case "contains":
                element = Number(tokens[1]);
                console.log(numbers.indexOf(element));
                break;

            case "remove":
                index = Number(tokens[1]);
                numbers.splice(index, 1);
                break;

            case "shift":
                let positions = Number(tokens[1]);
                for (let i = 0; i < positions; i++) {
                    numbers.push(numbers.shift());
                }
                break;

            case "sumPairs":
                let summedArray = [];
                for (let i = 0; i < numbers.length; i += 2) {
                    let sum = numbers[i] + (numbers[i + 1] || 0);
                    summedArray.push(sum);
                }
                numbers = summedArray;
                break;

            case "print":
                console.log(`[ ${numbers.join(", ")} ]`);
                return;
        }
    }
}


arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
