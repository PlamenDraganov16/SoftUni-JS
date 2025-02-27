function solve(sentence, word)
{
    let arr = sentence.split(' ');
    let count = 0;

    for(let search of arr)
    {
        if(search === word)
        {
            count++
        }
    }

    console.log(count)
}

solve('This is a word and it also is a sentence',
'is'
)