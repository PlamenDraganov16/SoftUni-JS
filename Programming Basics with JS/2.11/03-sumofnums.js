function sumOfNums(array)
{
    let total = Number(array[0]);
    let index = 1;
    let sum = 0;

    let currentNum = Number(array[index]);

    while(sum < total)
    {   
        sum += currentNum;
        
        index++;
        currentNum = Number(array[index]);
    }

    console.log(sum)
}

sumOfNums(['100', '10', '20', '30', '40']);