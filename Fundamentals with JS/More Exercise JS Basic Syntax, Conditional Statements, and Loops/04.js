function reverseFunc(word)
{
    let reversedWord = "";
    for(let i = word.length - 1;i >=0; i--)
    {
        let index = word[i];

        reversedWord += index;
    }

    console.log(reversedWord)

}   

reverseFunc('Hello')