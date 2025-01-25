function solve(array, arrayTwo)
{
    for(let i = 0; i < array.length;i++)
    {
        let word = array[i];

        for(let j = 0; j < arrayTwo.length; j++)
        {
            let wordTwo = arrayTwo[j];
            if(word === wordTwo)
            {
                console.log(word);
            }
        }
    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])