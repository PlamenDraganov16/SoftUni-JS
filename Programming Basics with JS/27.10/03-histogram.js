function histogram(input)
{
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let i = 1; i <= n; i++)
    {
        let currentNum = Number(input[i]);
        if(currentNum < 200) p1++;
        else if(currentNum < 400) p2++;
        else if(currentNum < 600) p3++;
        else if(currentNum < 800) p4++;
        else if(currentNum <= 1000) p5++;
    }

    console.log(`${((p1 / n) * 100).toFixed(2)}%`);
    console.log(`${((p2 / n) * 100).toFixed(2)}%`);
    console.log(`${((p3 / n) * 100).toFixed(2)}%`);
    console.log(`${((p4 / n) * 100).toFixed(2)}%`);
    console.log(`${((p5 / n) * 100).toFixed(2)}%`);
}

histogram([3, 1, 2, 990]);



function histogram2(input)
{
    let n = Number(input[0]);

    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0;

    for(let i = 1; i <= n; i++)

    {   let currentNum = Number(input[i])
        
        if(currentNum < 200) sum1++;
        else if(currentNum < 400) sum2++;
        else if(currentNum < 600) sum3++;
        else if(currentNum < 800) sum4++;
        else sum5++; 
    }

    console.log(`${((sum1 / n) * 100).toFixed(2)}%`);
    console.log(`${((sum2 / n) * 100).toFixed(2)}%`);
    console.log(`${((sum3 / n) * 100).toFixed(2)}%`);
    console.log(`${((sum4 / n) * 100).toFixed(2)}%`);
    console.log(`${((sum5 / n) * 100).toFixed(2)}%`);
}

histogram2([5, 246, 5, 1, 45, 999])