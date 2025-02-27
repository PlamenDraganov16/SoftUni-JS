function lettersChangeNumbers(input) {
    let words = input.split(/\s+/).filter(Boolean);
    let totalSum = 0;

    words.forEach(word => {
        let firstLetter = word[0];
        let lastLetter = word[word.length - 1];
        let number = parseInt(word.substring(1, word.length - 1));

        let firstPos = firstLetter.toLowerCase().charCodeAt(0) - 96;
        let lastPos = lastLetter.toLowerCase().charCodeAt(0) - 96;

        if (firstLetter === firstLetter.toUpperCase()) {
            number /= firstPos;
        } else {
            number *= firstPos;
        }

        if (lastLetter === lastLetter.toUpperCase()) {
            number -= lastPos;
        } else {
            number += lastPos;
        }

        totalSum += number;
    });

    console.log(totalSum.toFixed(2));
}

lettersChangeNumbers('A12b s17G');
