function calculateHandValues(input) {
    const cardValues = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
        'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };
    const typeMultipliers = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
    
    const players = new Map();
    
    for (const entry of input) {
        let [name, cards] = entry.split(': ');
        let cardSet = players.get(name) || new Set();
        
        cards.split(', ').forEach(card => cardSet.add(card));
        players.set(name, cardSet);
    }
    
    const results = [];
    
    for (const [name, cards] of players) {
        let totalValue = 0;
        for (const card of cards) {
            let power = card.slice(0, -1);
            let type = card.slice(-1);
            totalValue += (cardValues[power] * typeMultipliers[type]);
        }
        results.push(`${name}: ${totalValue}`);
    }
    
    console.log(results.join('\n'));
}

calculateHandValues([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )