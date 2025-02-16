function memoryGame(input) {
    let sequence = input.shift().split(" ");
    let moves = 0;

    while (input.length > 0) {
        let command = input.shift();

        if (command === "end") {
            console.log(`Sorry you lose :(\n${sequence.join(" ")}`);
            return;
        }

        let [index1, index2] = command.split(" ").map(Number);
        moves++;

        if (
            index1 === index2 || 
            index1 < 0 || index2 < 0 || 
            index1 >= sequence.length || index2 >= sequence.length
        ) {
            let penaltyElement = `-${moves}a`;
            let middle = Math.floor(sequence.length / 2);
            sequence.splice(middle, 0, penaltyElement, penaltyElement);
            console.log("Invalid input! Adding additional elements to the board");
            continue;
        }

        if (sequence[index1] === sequence[index2]) {
            let matchedElement = sequence[index1];
            console.log(`Congrats! You have found matching elements - ${matchedElement}!`);

            sequence = sequence.filter((_, idx) => idx !== index1 && idx !== index2);
            
            if (sequence.length === 0) {
                console.log(`You have won in ${moves} turns!`);
                return;
            }
        } else {
            console.log("Try again!");
        }
    }
}
