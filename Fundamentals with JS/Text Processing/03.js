function solve(sentence, word)
{
    let censored = '*'.repeat(word.length);
    let result = sentence.replaceAll(word, censored);
    console.log(result);
}

solve('A small sentence with some words', 'small')