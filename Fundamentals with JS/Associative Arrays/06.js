function countWords(words) {
    let wordCount = {};

    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    let sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(([word, count]) => {
        console.log(`${word} -> ${count} times`);
    });
}


countWords(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
