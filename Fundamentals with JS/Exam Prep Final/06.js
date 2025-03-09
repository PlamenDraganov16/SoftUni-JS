function solve(input) {
    let n = Number(input.shift());
    let pieces = {};

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input[i].split("|");
        pieces[piece] = { composer, key };
    }

    for (let i = n; i < input.length; i++) {
        let tokens = input[i].split("|");
        let command = tokens[0];
        let piece = tokens[1];

        if (command === "Add") {
            let composer = tokens[2];
            let key = tokens[3];

            if (pieces[piece]) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === "Remove") {
            if (pieces[piece]) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === "ChangeKey") {
            let newKey = tokens[2];

            if (pieces[piece]) {
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === "Stop") {
            break;
        }
    }

    Object.entries(pieces).forEach(([piece, data]) => {
        console.log(`${piece} -> Composer: ${data.composer}, Key: ${data.key}`);
    });
}


solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )