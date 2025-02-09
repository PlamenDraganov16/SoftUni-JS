function sorting(arr)
{
    let sortedArr = arr.sort((a, b) => a-b);
    let resultArr = [];

    while(sortedArr.length > 0)
    {
        let maxNum = sortedArr.pop();
        let minNum = sortedArr.shift();

        resultArr.push(maxNum);
        resultArr.push(minNum);
    }

    console.log(resultArr.join(' '))
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);