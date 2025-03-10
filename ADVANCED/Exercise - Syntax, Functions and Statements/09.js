function wordsUppercase(str) {
    let words = str.match(/\w+/g).map(w => w.toUpperCase());
    console.log(words.join(', '));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
