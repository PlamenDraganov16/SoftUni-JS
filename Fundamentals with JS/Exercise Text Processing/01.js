function revealWords(words, sentence) {
    let wordsArray = words.split(', '); 
    wordsArray.forEach(word => {
        let placeholder = '*'.repeat(word.length); 
        sentence = sentence.replace(placeholder, word); 
    });
    console.log(sentence);
}

revealWords('great', 'softuni is ***** place for learning new programming languages');