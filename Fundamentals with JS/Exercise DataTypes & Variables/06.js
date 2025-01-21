function reversedString(input)
{
    let reversedWord = "";

    for(let i = input.length - 1; i >= 0; i--)
    {
        let place = input[i];

        reversedWord += place;
    }

    console.log(reversedWord)
}

reversedString('racecar');

function reversedStringTwo(input)
{
    let reversedWord = input.split('').reverse().join('')
    console.log(reversedWord);
}

reversedStringTwo("Information")