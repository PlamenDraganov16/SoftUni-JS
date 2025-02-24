function countWordOccurrences(input) {
    
    let targetWords = input[0].split(' ');
    let words = input.slice(1);

    let wordCount = new Map();

    for (let word of targetWords) {
        wordCount.set(word, 0);
    }

    for (let word of words) {
        if (wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word) + 1);
        }
    }

    let sortedWords = [...wordCount.entries()].sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}
countWordOccurrences([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 
    'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 
    'because', 'this', 'is', 'your', 'task'
]);
