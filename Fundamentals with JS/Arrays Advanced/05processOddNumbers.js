function processOddNums(arr)
{
    let newArr = [];

    for(let i = 1; i < arr.length; i += 2)
    {
        let num = arr[i] * 2
        newArr.push(num)
    }

    console.log(newArr.reverse().join(' '));
}

processOddNums([10, 15, 20, 25]);