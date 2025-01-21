function replaceChar(word, char, result)
{
    let res = word.replace("_", char);

    if(res === result) console.log('Matched')
        else console.log("Not Matched")
}

replaceChar("Str_ng", "i", "String")