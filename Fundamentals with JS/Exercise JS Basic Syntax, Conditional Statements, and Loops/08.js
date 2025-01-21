function multiplicationTable(n)
{
    for(let i = 1; i <=10; i++)
    {   
        let result = i * n;
        console.log(`${n} X ${i} = ${result}`)
    }
}

multiplicationTable(5)