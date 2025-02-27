function findWord(word, text) {
    let lowerText = text.toLowerCase().split(' ');

    if (lowerText.includes(word)) {
        console.log(word);
        return;
    } else {
        console.log(`${word} not found!`);
        return;
    }
}

findWord('javascript', 'JavaScript is the best programming language javascript');