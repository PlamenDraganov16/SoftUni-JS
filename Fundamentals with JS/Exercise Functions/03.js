function main(left, right)
{
    let result = '';
    let code1 = left.charCodeAt();
    let code2 = right.charCodeAt();

    let startCode = Math.min(code1,code2);
    let endCode = Math.max(code1, code2)
    for(let currCode = startCode + 1; currCode < endCode; currCode++)
    {
        let currChar = String.fromCharCode(currCode);
        result += currChar + ' ';
    }

    console.log(result)
}

main('a', 'd')