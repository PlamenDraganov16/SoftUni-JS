function solve(input)
{
    let words = input.toLowerCase().split(' ');

    let wordCount = new Map();

    for(let word of words)
    {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    let result = [];
    for (let [word, count] of wordCount) {
        if (count % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');