function solve(word)
{
    let count = 0;
    let newWord = ''

    for(let ch of word)
    {
        count++;
        newWord += ch;
    }

    console.log(count);
    console.log(newWord);
}

solve('Hello, JavaScript!')