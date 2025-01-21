function specialNums(num)
{
    for(let i = 1; i <= num; i++)
    {   let sum = 0
        let tracker = String(i);
        
        for (let j = 0; j < tracker.length; j++) {
            sum += Number(tracker[j]); // Добавяме стойността на всяка цифра
        }
        
        if(String(sum) === '5' || String(sum) === '7' || String(sum) === '11')
        {
            console.log(`${i} -> True`);
        }
        else 
        {
            console.log(`${i} -> False`)
        } 
    }  
}

specialNums(15)