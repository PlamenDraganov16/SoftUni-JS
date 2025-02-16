
function solve2(arr) {
    let myDeck = arr.shift().split(', '); 
    let n = Number(arr.shift()); 

    for (let i = 0; i < n; i++) {
        let tokens = arr.shift().split(', '); 
        let action = tokens[0];

        if (action === 'Add') {
            let card = tokens[1];
            if (!myDeck.includes(card)) {
                myDeck.push(card);
                console.log("Card successfully added");
            } else {
                console.log("Card is already in the deck");
            }
        } 
        else if (action === 'Remove') {
            let card = tokens[1];
            let index = myDeck.indexOf(card);
            if (index !== -1) {
                myDeck.splice(index, 1); // Corrected from slice to splice
                console.log("Card successfully removed");
            } else {
                console.log("Card not found");
            }
        } 
        else if (action === 'Remove At') {
            let index = Number(tokens[1]);
            if (index >= 0 && index < myDeck.length) {
                myDeck.splice(index, 1);
                console.log("Card successfully removed");
            } else {
                console.log("Index out of range");
            }
        } 
        else if (action === 'Insert') {
            let index = Number(tokens[1]);
            let card = tokens[2];
            if (index >= 0 && index < myDeck.length) {
                if (!myDeck.includes(card)) {
                    myDeck.splice(index, 0, card);
                    console.log("Card successfully added");
                } else {
                    console.log("Card is already added");
                }
            } else {
                 console.log("Index out of range");
             }
        }
    }

    console.log(myDeck.join(', '));
}

solve2((["Ace of Diamonds, Queen of Hearts, King of Clubs",
        "3",
        "Add, King of Diamonds",
        "Insert, 2, Jack of Spades",
        "Remove, Ace of Diamonds"])
        )