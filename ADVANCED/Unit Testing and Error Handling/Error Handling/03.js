function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suitSymbols = {
            'S': '\u2660', // Spades
            'H': '\u2665', // Hearts
            'D': '\u2666', // Diamonds
            'C': '\u2663'  // Clubs
        };

        if (!validFaces.includes(face) || !suitSymbols.hasOwnProperty(suit)) {
            throw new Error(`Invalid card: ${face + suit}`);
        }

        return {
            toString() {
                return face + suitSymbols[suit];
            }
        };
    }

    let result = [];

    for (let card of cards) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1);

        try {
            result.push(createCard(face, suit).toString());
        } catch (err) {
            console.log(err.message);
            return;
        }
    }

    console.log(result.join(' '));
}