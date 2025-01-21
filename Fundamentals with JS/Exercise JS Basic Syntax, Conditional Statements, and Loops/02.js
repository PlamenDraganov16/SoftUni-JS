function solve(n1, n2)
{
    if(n2 > 15)
        n2 = 15;

    let roundedNum = parseFloat(n1.toFixed(n2))
   
    console.log(roundedNum);
}

solve(10.5, 3)