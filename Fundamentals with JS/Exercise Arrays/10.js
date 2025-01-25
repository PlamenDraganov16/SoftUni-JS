function solve()
{

}

solve()

function ladybugs(input) {
   
    const fieldSize = Number(input[0]);
    const ladybugIndexes = input[1].split(' ').map(Number);
    const commands = input.slice(2);

    // Initialize the field
    let field = Array(fieldSize).fill(0);

    // Place ladybugs in the field
    for (let index of ladybugIndexes) {
        if (index >= 0 && index < fieldSize) {
            field[index] = 1;
        }
    }

    // Process each command
    for (let command of commands) {
        let [index, direction, flyLength] = command.split(' ');
        index = Number(index);
        flyLength = Number(flyLength);

        if (index < 0 || index >= fieldSize || field[index] !== 1) {
            // Invalid index or no ladybug at the index
            continue;
        }

        // Remove the ladybug from the initial position
        field[index] = 0;

        // Determine the movement direction
        let move = direction === 'right' ? 1 : -1;
        let newPosition = index + move * flyLength;

        // Fly until finding an empty spot or going out of bounds
        while (newPosition >= 0 && newPosition < fieldSize && field[newPosition] === 1) {
            newPosition += move * flyLength;
        }

        // Place the ladybug in the new position if it's valid
        if (newPosition >= 0 && newPosition < fieldSize) {
            field[newPosition] = 1;
        }
    }

    // Print the final field
    console.log(field.join(' '));
}

ladybugs([
    '3',
    '0 1',
    '0 right 1',
    '2 right 1',
]);