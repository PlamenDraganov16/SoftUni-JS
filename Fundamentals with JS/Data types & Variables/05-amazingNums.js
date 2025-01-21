function amazingNumbers(n)
{
    let sum = 0;
    let strN = n.toString();
for(let i = 0; i < strN.length; i++)
{
    let byte = strN[i];
    sum += Number(byte);
}

    let result = sum.toString().includes('9')
    console.log(result ? `${n} Amazing? True` : `${n} Amazing? False`)
}

amazingNumbers(1233)