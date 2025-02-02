function main(array)
{
    for(let num of array)
    {
        console.log(isPalindrome(num));
    }
}

function isPalindrome(num)
{
    let numStr = num.toString();
    let reversedNum = ''

    for(let i = numStr.length - 1; i >= 0; i--)
    {
        let currChar = numStr[i]
        reversedNum += currChar;
    }

    return numStr === reversedNum;
}


main([123, 323, 421, 121])