function solve(word, repeat)
{
    let result = ""
    
    for(let i = 1; i <= repeat; i++)
    {
        result += word;
    }

    console.log(result)   
}

solve("abc", 3)