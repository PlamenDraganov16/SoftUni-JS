function solve(array)
{
    let topNums = [];

    for(let i = 0; i < array.length; i++)
    {   
        let num = array[i];
        let isTop = true;
        
        for(let j = i + 1; j < array.length; j++)
        {
            let rightNum = array[j];    

            if(num <= rightNum) 
                {
                    isTop = false; break;
                }
        }

        if(isTop)
        {
            topNums.push(num);
        }
    }

    console.log(topNums.join(" "));
}

solve([1, 4, 3, 2])